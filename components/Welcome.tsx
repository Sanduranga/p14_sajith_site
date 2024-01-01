"use client";
import React, { useEffect, useRef, useState } from "react";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import { itemTypes } from "./AddItemForm";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems } from "@/redux/features/woodItems/welcomePageSlice";
import { RootState } from "@/redux/Store";

const Welcome = () => {
  const userName = "sajith" as string;
  const dispatch = useDispatch();
  const focusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("useEffect");

    dispatch(fetchAllItems() as any);
  }, [dispatch]);

  const data = useSelector((state: RootState) => state.welcomePage.allItems);
  const [bigImage, setImage] = useState<{ image: string; index: number }>();

  console.log("jsx");
  const setBigImage = (image: string, index: number) => {
    setImage({ image, index });
  };
  const likes = 4;
  const handleLike = (id?: string) => {};

  try {
    if (data.length > 0) {
      if (userName === "sjith") {
        return (
          <div ref={focusRef} className="flex flex-wrap gap-5">
            <Link
              className="flex w-fit p-1 rounded-md mx-auto my-5 text-white"
              href={"/addItem/entryFoyer"}
            >
              ADD ITEM
            </Link>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-5">
              <Link
                className="flex w-fit p-1 rounded-md mx-auto my-5 text-white"
                href={"/addItem/entryFoyer"}
              >
                ADD ITEM
              </Link>
            </div>
            {data.map((item: itemTypes, i) => (
              <div
                key={i}
                className="flex flex-col p-2 gap-2 justify-center bg-green-500"
              >
                <div className="contain flex flex-col w-[60dvw] p-3 gap-5 mx-auto bg-blue-700">
                  <div
                    ref={bigImage?.index === i ? focusRef : undefined}
                    className="bg-red-500 p-3"
                  >
                    <Link href={`clicked-item/${item._id}/${item.section}`}>
                      <Image
                        src={
                          bigImage?.index === i ? bigImage.image : item.image1
                        }
                        alt="mainImg"
                        layout="responsive"
                        width={600}
                        height={600}
                        objectFit="cover"
                      />
                    </Link>
                  </div>
                  <div className="grid grid-cols-5 gap-3 mx-auto bg-purple-700">
                    <Image
                      src={item.image2}
                      alt="Img"
                      layout="responsive"
                      width={600}
                      height={600}
                      objectFit="cover"
                      className={`${item.image2 ? "cursor-pointer" : "hidden"}`}
                      onClick={() => {
                        focusRef.current?.focus();
                        setBigImage(item.image2, i);
                      }}
                    />

                    <Image
                      src={item.image3}
                      alt="Img"
                      layout="responsive"
                      width={600}
                      height={600}
                      objectFit="contain"
                      className={`${item.image3 ? "cursor-pointer" : "hidden"}`}
                      onClick={() => {
                        focusRef.current?.focus();
                        setBigImage(item.image3, i);
                      }}
                    />

                    <Image
                      src={item.image4}
                      alt="Img"
                      layout="responsive"
                      width={600}
                      height={600}
                      objectFit="contain"
                      className={`${item.image4 ? "cursor-pointer" : "hidden"}`}
                      onClick={() => setBigImage(item.image4, i)}
                    />

                    <Image
                      src={item.image5}
                      alt="Img"
                      layout="responsive"
                      width={600}
                      height={600}
                      objectFit="contain"
                      className={`${item.image5 ? "cursor-pointer" : "hidden"}`}
                      onClick={() => setBigImage(item.image5, i)}
                    />

                    <Image
                      src={item.image1}
                      alt="Img"
                      layout="responsive"
                      width={600}
                      height={600}
                      objectFit="contain"
                      className={`${item.image1 ? "cursor-pointer" : "hidden"}`}
                      onClick={() => setBigImage(item.image1, i)}
                    />
                  </div>
                  <div className="flex justify-evenly">
                    <button onClick={() => handleLike(item._id)}>
                      Like <span className="ml-1">{likes}</span>
                    </button>
                    <button>Whtapp</button>
                    <button>explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      }
    } else {
      return (
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
      );
    }
  } catch (error) {
    console.log(error);
  }
};
export default Welcome;
