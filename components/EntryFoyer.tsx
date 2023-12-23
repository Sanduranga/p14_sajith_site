import React from "react";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import { itemTypes } from "./AddItemForm";

const itemsData = async () => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/wood_hub?category=entryFoyer",
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      alert("Faild to fetch Entry Foyer items");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EntryFoyer = async () => {
  try {
    const { items } = await itemsData();
    if (items.length > 0) {
      return (
        <div>
          <Link
            className="flex w-fit p-1 rounded-md bg-green-500 mx-auto my-5 text-white"
            href={"/addItem/cooking-hub"}
          >
            ADD ITEM
          </Link>
          <div className="flex flex-wrap gap-5">
            {items.map((item: itemTypes) => (
              <div
                key={item._id}
                className="w-[170px] h-[170px] flex flex-col p-2 gap-2 justify-center bg-green-200"
              >
                <div className="h-[100px] bg-red-300">{item.image1}</div>
                <div className="text-center">Rs. {item.price}</div>
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
          <Link
            className="flex w-fit p-1 rounded-md bg-green-500 mx-auto my-5 text-white"
            href={"/addItem/cooking-hub"}
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
    alert(error);
  }
};

export default EntryFoyer;
