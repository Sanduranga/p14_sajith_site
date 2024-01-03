"use client";

import DeleteButton from "./DeleteButton";
import Link from "next/link";
import { itemTypes } from "./AddItemForm";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/Store";

const EntryFoyer = () => {
  const allItems: itemTypes[] = useSelector(
    (state: RootState) => state.welcomePage.allItems
  );
  const entryItems: itemTypes[] = allItems.filter(
    (sec) => sec.section === "entryFoyer"
  );

  const userName = "sajith" as string;

  return (
    <div>
      {entryItems.length ? (
        userName === "sajith" ? (
          <div>
            <Link
              className="flex w-fit p-1 rounded-md bg-green-500 mx-auto my-5 text-white"
              href={"/addItem/entryFoyer"}
            >
              ADD ITEM
            </Link>
            <div className="flex flex-col-3 flex-wrap gap-5">
              {entryItems.map((item: itemTypes) => (
                <div
                  key={item._id}
                  className="flex flex-col w-[350px] h-auto p-2 gap-2 justify-center bg-green-200"
                >
                  <Link href={`clicked-item/${item._id}/${item.section}`}>
                    <div className=" bg-red-300">
                      <Image
                        src={item.image1}
                        alt="itemImg"
                        width={750}
                        height={500}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center">Rs. {item.price}</div>
                  </Link>
                  <div className="flex justify-between">
                    <DeleteButton id={item._id} category={item.section} />
                    <Link
                      className="p-1 rounded-md bg-blue-500 text-white"
                      href={`editItem/${item._id}/${item.section}`}
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-5">
            {entryItems.map((item: itemTypes) => (
              <div
                key={item._id}
                className="flex flex-col w-[350px] h-auto p-2 gap-2 justify-center bg-green-200"
              >
                <Link href={`clicked-item/${item._id}/${item.section}`}>
                  <div className=" bg-red-300">
                    <Image
                      src={item.image1}
                      alt="itemImg"
                      width={750}
                      height={500}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">Rs. {item.price}</div>
                </Link>
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
            There are no Entry foyer items to show
          </div>
        </div>
      )}
    </div>
  );
};

export default EntryFoyer;
