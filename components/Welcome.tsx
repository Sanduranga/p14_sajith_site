"use client";
import React, { useEffect, useRef, useState } from "react";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import { itemTypes } from "./AddItemForm";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  alldata,
  putLikes,
  putUserLikes,
  userData,
} from "@/redux/features/woodItems/welcomePageSlice";
import { RootState } from "@/redux/Store";
import Navbar2 from "./Navbar2";
import { AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaWhatsappSquare } from "react-icons/fa";
import { useSession } from "next-auth/react";

export interface userTypes {
  _id: string;
  userName: string;
  userEmail: string;
  userImage: string;
  likedItemIds: string[];
  createdAt: string;
  updatedAt: string;
  __v: string;
}

const Welcome = ({ allItems }: { allItems: itemTypes[] }) => {
  const dispatch = useDispatch();
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const { status, data: session } = useSession();
  const [uData, setUData] = useState({
    _id: "",
    userName: "",
    userEmail: "",
    userImage: "",
    likedItemIds: [],
  }); // To store user data
  const [bigImage, setImage] = useState<{ image: string; index: number }>();

  const allItemsRedux = useSelector(
    (state: RootState) => state.welcomePage.allItems
  );
  const userDataRedux = useSelector(
    (state: RootState) => state.welcomePage.userData
  );
  const userLikedItems: string[] = [...userDataRedux.likedItemIds]; // Creating an user liked items array

  // **********************************************************************************
  useEffect(() => {
    if (status === "authenticated") {
      fetch(`/api/wood_hub/${session?.user?.email}?category=users`, {
        cache: "no-cache",
      })
        .then((res) => res.json())
        .then((data) => dispatch(userData(data.user))); // Fetching user data
    }
    dispatch(alldata(allItems));
  }, [status, session, dispatch, allItems]);
  // **********************************************************************************

  const setBigImage = (image: string, index: number) => {
    setImage({ image, index });
    if (itemRefs.current[index]) {
      itemRefs.current[index]!.scrollIntoView({
        behavior: "smooth",
        block: "center", // Align to the bottom
        inline: "start", // Align to the nearest edge
      });
    }
  };

  // ************************** Handling Like button *******************************************************
  const handleLikes = (
    _id: string,
    category: string,
    likes: number,
    index: number
  ) => {
    // Here, checks the clicked event whether the user liked one or not previously
    if (userDataRedux.likedItemIds.includes(_id)) {
      let toUnlike = userLikedItems.indexOf(_id); // Here I have to use `userLikeItems` (copy of `userDataRedux.likedItemIds`). Because otherwise I can not directly mutate (splice, push()...etc) redux state in Welcome page.
      userLikedItems.splice(toUnlike, 1);
      dispatch(putLikes({ id: index, logic: "minus" })); // Updating the count of likes
      // Updating ${category} cluster..................................................
      let newLikes = likes - 1;
      fetch(`/api/wood_hub/${_id}?category=${category}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newLikes,
        }),
      }).catch((err) => alert(`Common liked error: ${err}`));
    } else {
      userLikedItems.push(_id);
      dispatch(putLikes({ id: index, logic: "plus" })); // Updating the count of likes
      // Updating ${category} cluster..................................................
      let newLikes = likes + 1;
      fetch(`/api/wood_hub/${_id}?category=${category}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newLikes,
        }),
      }).catch((err) => alert(`Common liked error: ${err}`));
    }
    dispatch(putUserLikes(userLikedItems)); // Here due to dispatch `userDataRedux` state is updated. Due to update, Welcome page should be re rendered. Then (`if (userDataRedux.likedItemIds.includes(_id)){}`) logic also immediately updated to new version and even though user clicks several times Liked button at once, logic works as we expect.
    // ************ Updating ${category} cluster..................................................
    fetch(`/api/wood_hub/${session?.user?.email}?category=users`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        NewLikedItemIds: userLikedItems,
      }),
    }).catch((err) => alert(`User liked error: ${err}`));
  };

  const userName = "saji" as string;

  return (
    <div className="flex mt-28 px-5">
      <div className="w-[20vw]">
        <Navbar2 />
      </div>
      <div className="w-[80vw]">
        {allItems.length ? (
          userName === "sajith" ? (
            <div className="">
              <Link
                className="flex w-fit px-3 py-2 rounded-md mx-auto my-5 bg-themeCol text-white"
                href={"/addItem/entryFoyer"}
              >
                ADD ITEM
              </Link>
            </div>
          ) : (
            <div className="flex flex-col mx-auto gap-5">
              {allItemsRedux.map((item: itemTypes, i) => (
                <div
                  key={i}
                  className="contain flex justify-between p-3 gap-3 mx-auto bg-gray-950/20 rounded-md"
                >
                  <div className="flex flex-col gap-3 w-[50dvw]">
                    <div>
                      <Link
                        ref={(ref) => (itemRefs.current[i] = ref)}
                        href={`clicked-item/${item._id}/${item.section}`}
                      >
                        <Image
                          src={
                            bigImage?.index === i ? bigImage.image : item.image1
                          }
                          alt="mainImg"
                          layout="responsive"
                          width={600}
                          height={600}
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </Link>
                    </div>
                    <div className="grid grid-cols-5 gap-3 mx-auto rounded-md p-1">
                      <div
                        className={`${
                          item.image2 ? "cursor-pointer" : "hidden"
                        }`}
                      >
                        <Image
                          src={item.image2 ? item.image2 : ""}
                          alt="Img"
                          layout="responsive"
                          width={600}
                          height={600}
                          className="rounded-md"
                          objectFit="cover"
                          onClick={() => {
                            setBigImage(item.image2, i);
                          }}
                        />
                      </div>

                      <div
                        className={`${
                          item.image3 ? "cursor-pointer" : "hidden"
                        }`}
                      >
                        <Image
                          src={item.image3 ? item.image3 : ""}
                          alt="Img"
                          layout="responsive"
                          width={600}
                          height={600}
                          className="rounded-md"
                          objectFit="contain"
                          onClick={() => {
                            setBigImage(item.image3, i);
                          }}
                        />
                      </div>
                      <div
                        className={`${
                          item.image4 ? "cursor-pointer" : "hidden"
                        }`}
                      >
                        <Image
                          src={item.image4 ? item.image4 : ""}
                          alt="Img"
                          layout="responsive"
                          width={600}
                          height={600}
                          className="rounded-md"
                          objectFit="contain"
                          onClick={() => setBigImage(item.image4, i)}
                        />
                      </div>
                      <div
                        className={`${
                          item.image5 ? "cursor-pointer" : "hidden"
                        }`}
                      >
                        <Image
                          src={item.image5 ? item.image5 : ""}
                          alt="Img"
                          layout="responsive"
                          width={600}
                          height={600}
                          className="rounded-md"
                          objectFit="contain"
                          onClick={() => setBigImage(item.image5, i)}
                        />
                      </div>
                      <div
                        className={`${
                          item.image1 ? "cursor-pointer" : "hidden"
                        }`}
                      >
                        <Image
                          src={item.image1 ? item.image1 : ""}
                          alt="Img"
                          layout="responsive"
                          width={600}
                          height={600}
                          className="rounded-md"
                          objectFit="contain"
                          onClick={() => setBigImage(item.image1, i)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 justify-start pt-2">
                    <button
                      onClick={() =>
                        handleLikes(item._id, item.section, item.likes, i)
                      }
                      className="flex"
                    >
                      {/* Here checks whether there is authenticated users' personal likes items or not. */}
                      {status === "authenticated" ? (
                        userLikedItems.includes(item._id) ? (
                          <span className="text-3xl text-yellow-500">
                            {<FcLike />}
                          </span>
                        ) : (
                          <span className="text-3xl text-yellow-500">
                            {<AiFillLike />}
                          </span>
                        )
                      ) : (
                        <span className="text-3xl text-yellow-500">
                          {<AiFillLike />}
                        </span>
                      )}

                      <span className="ml-1">{item.likes}</span>
                    </button>
                    <span className="px-3 py-2 bg-themeCol rounded-md text-yellow-500 font-semibold hover:translate-x-2 duration-100">
                      <Link href={`clicked-item/${item._id}/${item.section}`}>
                        Explore
                      </Link>
                    </span>
                    <button className="text-themeCol text-4xl">
                      <FaWhatsappSquare />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div>
            <Link
              className="flex w-fit p-1 rounded-md bg-green-500 mx-auto my-5 text-white"
              href={"/addItem/entryFoyer"}
            >
              ADD ITEM
            </Link>

            <div className="flex w-fit mx-auto font-bold">
              There are no items to show
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Welcome;
