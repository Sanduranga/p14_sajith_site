"use client";
import {
  CldUploadButton,
  CldUploadWidget,
  CldUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

export interface itemTypes {
  _id: string;
  section: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  price: number;
  length: string;
  width: string;
  height: string;
  material: string;
  color: string;
  size: string;
  likes: number;
  description: string;
}

const AddItemForm = () => {
  const [input, setInput] = useState({} as itemTypes);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      section,
      image1,
      image2,
      image3,
      image4,
      image5,
      price,
      length,
      width,
      height,
      material,
      color,
      size,
      description,
    } = input;

    try {
      const res = await fetch(`/api/wood_hub?category=${section}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          section,
          image1,
          image2,
          image3,
          image4,
          image5,
          price,
          length,
          width,
          height,
          material,
          color,
          size,
          description,
        }),
      });
      if (res.ok) {
        alert("Submitted!");
      }
    } catch (error) {
      alert(error);
    }
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<any>
  ) => {
    //  **************************************************************************

    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUploadimage = (result: CldUploadWidgetResults, j: number) => {
    const info = result.info as object;
    console.log(j);

    if ("secure_url" in info) {
      setInput((prevInput) => ({
        ...prevInput,
        [`image${j}`]: info.secure_url as string,
      }));
    }
  };

  return (
    <div className="mb-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 mx-auto mt-28 w-[50dvw] p-10 bg-gray-300 rounded-lg border-2"
      >
        <select
          className="border-2 border-gray-500 px-2 rounded-md"
          name="section"
          onChange={handleChange}
        >
          <option>Modern Collection</option>
          <option value="entryFoyer">Entry Foyer</option>
          <option value="living">Family Hub</option>
          <option value="bedroom">Sleep Sanctuary</option>
          <option value="kitchen">Cooking Hub</option>
          <option value="dining">Dining Domain</option>
          <option value="bathroom">Refresh Zone</option>
          <option value="outdoor">Outdoor Oasis</option>
          <option value="office">Office Nook</option>
        </select>

        <input
          className="border-2 border-gray-500 px-2 rounded-md"
          placeholder="price"
          type="number"
          name="price"
          onChange={handleChange}
        />
        <textarea
          className="border-2 border-gray-500 px-2 rounded-md"
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <input
          className="border-2 border-gray-500 px-2 rounded-md"
          placeholder="length"
          type="text"
          name="length"
          onChange={handleChange}
        />
        <input
          className="border-2 border-gray-500 px-2 rounded-md"
          placeholder="width"
          type="text"
          name="width"
          onChange={handleChange}
        />
        <input
          className="border-2 border-gray-500 px-2 rounded-md"
          placeholder="height"
          type="text"
          name="height"
          onChange={handleChange}
        />
        <input
          className="border-2 border-gray-500 px-2 rounded-md"
          placeholder="material"
          type="text"
          name="material"
          onChange={handleChange}
        />
        <input
          className="border-2 border-gray-500 px-2 rounded-md"
          placeholder="color"
          type="text"
          name="color"
          onChange={handleChange}
        />
        <input
          className="border-2 border-gray-500 px-2 rounded-md"
          placeholder="size"
          type="text"
          name="size"
          onChange={handleChange}
        />
        {Array.from({ length: 5 }).map((_, j) => {
          const imageSources = input[`image${j + 1}`];

          return (
            <CldUploadButton
              key={j}
              uploadPreset="wq0w4znw"
              className="w-full relative h-[150px] border-2 border-dotted grid place-items-center bg-slate-100"
              onUpload={(result) => handleUploadimage(result, j + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {imageSources && (
                <Image
                  src={imageSources}
                  alt={`image_${j + 1}`}
                  className="absolute object-cover inset-0"
                  fill
                />
              )}
            </CldUploadButton>
          );
        })}

        <button className="p-2 bg-orange-400 font-bold rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
