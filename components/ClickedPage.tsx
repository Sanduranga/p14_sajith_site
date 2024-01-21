"use client";
import Image from "next/image";
import { itemTypes } from "./AddItemForm";
import { useEffect, useState } from "react";

export default function ClickedPage(props: itemTypes) {
  useEffect(() => {
    const newMarks: number = props.marks + 1; //Adding marks for the item

    fetch(`/api/wood_hub/${props._id}?category=${props.section}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        newMarks,
      }),
    }).catch((err) => alert(`Puting marks error :${err}`));
  }, [props.section, props.marks, props._id]);
  const [bigImage, setBigImage] = useState(props.image1);
  return (
    <div className="wrapper flex flex-col px-5 mt-28 gap-10 mx-auto">
      <div className="main_container">
        <div className="flex w-full bg-gray-200 px-3 py-5 flex-col-2 max-h-[100dvh] rounded-md gap-5">
          <div className="img-container grid grid-rows-5 gap-3 bg-themeCol p-1 rounded-md w-[60dvw]">
            <div className="row-span-4">
              <Image
                src={bigImage}
                alt="mainImg"
                layout="responsive"
                width={600}
                height={600}
                objectFit="contain"
                className="h-[350px] relative rounded-md"
                // sizes="(min-width: 1540px) 1536px, (min-width: 1280px) 1280px, (min-width: 1040px) 1024px, (min-width: 780px) 768px, (min-width: 680px) 640px, calc(94.44vw + 17px)"
              />
            </div>
            <div className="grid grid-cols-5 row-span-1 bg-gray-200 p-1 rounded-md place-content-center place-items-center w-full relative gap-3 mx-auto">
              <div
                className={`${
                  props.image2 ? "cursor-pointer relative " : "hidden"
                }`}
              >
                <Image
                  src={props.image2}
                  alt="mainImg"
                  width={600}
                  height={600}
                  className=" relative object-cover rounded-md"
                  onClick={() => setBigImage(props.image2)}
                />
              </div>
              <div
                className={`${
                  props.image3 ? "cursor-pointer relative" : "hidden"
                }`}
              >
                <Image
                  src={props.image3}
                  alt="mainImg"
                  width={600}
                  height={600}
                  className=" relative object-cover rounded-md"
                  onClick={() => setBigImage(props.image3)}
                />
              </div>
              <div
                className={`${
                  props.image4 ? "cursor-pointer relative" : "hidden"
                }`}
              >
                <Image
                  src={props.image4}
                  alt="mainImg"
                  width={600}
                  height={600}
                  className=" relative object-cover rounded-md"
                  onClick={() => setBigImage(props.image4)}
                />
              </div>
              <div
                className={`${
                  props.image5 ? "cursor-pointer relative" : "hidden"
                }`}
              >
                <Image
                  src={props.image5}
                  alt="mainImg"
                  width={600}
                  height={600}
                  className=" relative object-cover rounded-md"
                  onClick={() => setBigImage(props.image5)}
                />
              </div>
              <div
                className={`${
                  props.image1 ? "cursor-pointer relative" : "hidden"
                }`}
              >
                <Image
                  src={props.image1}
                  alt="mainImg"
                  width={600}
                  height={600}
                  className=" relative object-cover rounded-md"
                  onClick={() => setBigImage(props.image1)}
                />
              </div>
            </div>
          </div>

          <div className="des._container flex flex-col gap-3">
            <h1 className="font-bold text-3xl">Premium Solid Teak Bed</h1>
            <div className="flex gap-4  text-themeCol font-bold">
              <h2>★ ★ ★ ★ ★</h2>
              <h2>108 reviews</h2>
            </div>
            <div>
              <h2 className="font-bold text-xl font-sp">රු. {props.price}</h2>
              <h4>Shop now at Slashed Price (29% OFF) with coupon GIFTMASF</h4>
            </div>
            <div className="flex gap-2">
              <h3>Availability :</h3>
              <h4 className=" text-themeCol font-bold">In-store ✓</h4>
            </div>
            <div className="flex flex-col gap-1">
              <h3>Size</h3>
              <select
                name="size"
                className="border-2 px-3 py-1 rounded-md border-gray-400 max-w-[200px] w-full"
              >
                <option value="">Double</option>
                <option value="">Single</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <h3>Quantity</h3>
              <div className="flex gap-2">
                <h4 className="px-2 border-2 rounded-full border-gray-400">
                  -
                </h4>
                <h3 className="px-4 border-2 rounded-xl border-gray-400">1</h3>
                <h4 className="px-2 border-2 rounded-full border-gray-400">
                  +
                </h4>
              </div>
            </div>
            <div className="flex gap-3 text-white font-bold">
              <button className=" bg-themeCol px-3 py-2 rounded-md border-gray-400 max-w-[200px] w-full">
                ADD TO CART
              </button>
              <button className=" bg-themeCol px-3 bg py-2 rounded-md border-gray-400 max-w-[200px] w-full">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="suggesion"></div>

      {/* ***************************************** Item Details ************************************* */}

      <div className="details grid grid-cols-2 gap-5">
        <div className="information-table min-h-screen">
          <h2 className="mb-4 text-xl font-bold text-gray-700">
            Product Information
          </h2>
          <div className="text-lg text-gray-600 px-2">
            <div className="flex relative justify-between items-center py-2 border-t-2 space-x-4">
              <div className="px-2 relative text-center font-semibold w-1/3">
                <span>Category</span>
              </div>

              <div className="text-center relative w-2/3 border-l-2">
                <span>{props.section}</span>
              </div>
            </div>
            <div className="flex relative justify-between items-center py-2 border-t-2 space-x-4">
              <div className="px-2 relative text-center font-semibold w-1/3">
                <span>Length</span>
              </div>

              <div className="text-center relative w-2/3 border-l-2">
                <span>{props.length}</span>
              </div>
            </div>
            <div className="flex relative justify-between items-center py-2 border-t-2 space-x-4">
              <div className="px-2 relative text-center font-semibold w-1/3">
                <span>Width</span>
              </div>

              <div className="text-center relative w-2/3 border-l-2">
                <span>{props.width}</span>
              </div>
            </div>
            <div className="flex relative justify-between items-center py-2 border-t-2 space-x-4">
              <div className="px-2 relative text-center font-semibold w-1/3">
                <span>Height</span>
              </div>

              <div className="text-center relative w-2/3 border-l-2">
                <span>{props.height}</span>
              </div>
            </div>
            <div className="flex relative justify-between items-center py-2 border-t-2 space-x-4">
              <div className="px-2 relative text-center font-semibold w-1/3">
                <span>Material</span>
              </div>

              <div className="text-center relative w-2/3 border-l-2">
                <span>{props.material}</span>
              </div>
            </div>
            <div className="flex relative justify-between items-center py-2 border-t-2 space-x-4">
              <div className="px-2 relative text-center font-semibold w-1/3">
                <span>Color</span>
              </div>

              <div className="text-center relative w-2/3 border-l-2">
                <span>{props.color}</span>
              </div>
            </div>
            <div className="flex relative justify-between items-center py-2 border-t-2 space-x-4">
              <div className="px-2 relative text-center font-semibold w-1/3">
                <span>Size</span>
              </div>

              <div className="text-center relative w-2/3 border-l-2">
                <span>{props.size}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ***************************************** Product Description ************************************* */}

        <div className="description">
          <h2 className="mb-4 text-xl font-bold text-gray-700">
            Product Description
          </h2>
          <p className="text-gray-600 px-2 text-justify">{props.description}</p>
        </div>
      </div>
      <div className="reviews"></div>
    </div>
  );
}
