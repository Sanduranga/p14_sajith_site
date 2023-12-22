import React from "react";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

const itemsData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/entry_foyer", {
      cache: "no-store",
    });
    if (!res.ok) {
      alert("Faild to fetch Entry Foyer items");
    }

    return res.json();
  } catch (error) {
    alert(error);
  }
};

const EntryFoyer = async () => {
  const { items }: any = await itemsData();

  return (
    <div>
      <Link
        className="flex w-fit p-1 rounded-md bg-green-500 mx-auto my-5 text-white"
        href={"/addItem/entry_foyer"}
      >
        ADD ITEM
      </Link>
      <div className="flex flex-wrap gap-5">
        {items.map((item: any) => (
          <div
            key={item._id}
            className="w-[170px] h-[170px] flex flex-col p-2 gap-2 justify-center bg-green-200"
          >
            <div className="h-[100px] bg-red-300">{item.image}</div>
            <div className="text-center">Rs. {item.price}</div>
            <div className="flex justify-between">
              <DeleteButton id={item._id} />
              <Link
                className="p-1 rounded-md bg-blue-500 text-white"
                href={`/editItem/${item._id}`}
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntryFoyer;
