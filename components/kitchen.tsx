"use client";
import React from "react";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import { itemTypes } from "./AddItemForm";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { useSession } from "next-auth/react";

const Kitchen = ({ items }: { items: itemTypes[] }) => {
  const { data } = useSession();
  const userName = data?.user?.name;

  try {
    if (items.length > 0) {
      if (userName === "tharaka edirisinghe") {
        return (
          <div className="mt-28 mb-10">
            <Link
              className="flex w-fit p-1 rounded-md bg-green-500 mx-auto my-5 text-white"
              href={"/addItem/entryFoyer"}
            >
              ADD ITEM
            </Link>
            <div className="flex flex-col-3 flex-wrap gap-5">
              {items.map((item: itemTypes) => (
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
        );
      } else {
        return (
          <div>
            <div className="flex flex-wrap gap-5 mt-28 mb-10">
              {items.map((item: itemTypes) => (
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
          </div>
        );
      }
    } else {
      return (
        <div className="min-h-screen mt-28">
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
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export default Kitchen;
