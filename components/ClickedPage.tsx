"use client";
import Image from "next/image";
import { itemTypes } from "./AddItemForm";

export default function ClickedPage(props: itemTypes) {
  return (
    <div>
      <div className="wrapper flex flex-col px-5 mx-auto">
        <div className="main_container flex flex-col-2 gap-5">
          <div className="img waraper w-1/2">
            <div className="img container flex flex-col gap-5">
              <div className=" bg-green-600">
                <Image
                  src={props.image1}
                  alt="mainImg"
                  width={768}
                  height={500}
                  layout="responsive"
                  sizes="(min-width: 1540px) 1536px, (min-width: 1280px) 1280px, (min-width: 1040px) 1024px, (min-width: 780px) 768px, (min-width: 680px) 640px, calc(94.44vw + 17px)"
                />
              </div>
              <div className="flex gap-3 ">
                <div className="">
                  <Image
                    src={props.image2}
                    alt="mainImg"
                    width={768}
                    height={500}
                  />
                </div>
                <div>
                  <Image
                    src={props.image3}
                    alt="mainImg"
                    width={768}
                    height={500}
                  />
                </div>
                <div>
                  <Image
                    src={props.image4}
                    alt="mainImg"
                    width={768}
                    height={500}
                  />
                </div>
                <div>
                  <Image
                    src={props.image5}
                    alt="mainImg"
                    width={768}
                    height={500}
                  />
                </div>
                <div>
                  <Image
                    src={props.image1}
                    alt="mainImg"
                    width={768}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="description wraper w-1/2">
            <div className="des._container flex flex-col gap-3">
              <h1 className="font-bold text-3xl">Premium Solid Teak Bed</h1>
              <div className="flex gap-4 text-amber-900 font-bold">
                <h2>★ ★ ★ ★ ★</h2>
                <h2>108 reviews</h2>
              </div>
              <div>
                <h2 className="font-bold text-xl font-sp">රු. 28500</h2>
                <h4>
                  Shop now at Slashed Price (29% OFF) with coupon GIFTMASF
                </h4>
              </div>
              <div className="flex gap-2">
                <h3>Availability :</h3>
                <h4 className="text-amber-900 font-bold">In-store ✓</h4>
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
                  <h3 className="px-4 border-2 rounded-xl border-gray-400">
                    1
                  </h3>
                  <h4 className="px-2 border-2 rounded-full border-gray-400">
                    +
                  </h4>
                </div>
              </div>
              <div className="flex gap-3 text-white font-bold">
                <button className="bg-amber-900 px-3 py-2 rounded-md border-gray-400 max-w-[200px] w-full">
                  ADD TO CART
                </button>
                <button className="bg-amber-900 px-3 bg py-2 rounded-md border-gray-400 max-w-[200px] w-full">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="suggesion"></div>
      </div>
    </div>
  );
}
