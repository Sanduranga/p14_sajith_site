"use client";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

export interface itemTypes {
  _id?: string;
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
    console.log(input);

    try {
      const res = await fetch(
        `http://localhost:3000/api/wood_hub?category=${section}`,
        {
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
        }
      );
      // if (res.ok) {
      //   router.push("/entry-foyer");
      // }
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
    // *****************  Here I am trying to implement image to Base64 and upload to the MongoDB ********

    // if (e.target.name === "image2" && e.target.files) {
    //   console.log("img 2");

    //   const reader = new FileReader();
    //   reader.readAsDataURL(e.target.files[0]);
    //   reader.onload = () => {
    //     setInput((prevInput) => ({
    //       ...prevInput,
    //       [e.target.name]: reader.result,
    //     }));
    //     console.log(reader.result);
    //   };
    //   reader.onerror = (error) => {
    //     console.log("Error : ", error);
    //   };
    // } else {

    //  **************************************************************************

    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUploadimage1 = (result: CldUploadWidgetResults) => {
    const info = result.info as object;

    if ("secure_url" in info) {
      setInput((prevInput) => ({
        ...prevInput,
        ["image1"]: info.secure_url as string,
      }));
    }
  };
  const handleUploadimage2 = (result: CldUploadWidgetResults) => {
    const info = result.info as object;

    if ("secure_url" in info) {
      setInput((prevInput) => ({
        ...prevInput,
        ["image2"]: info.secure_url as string,
      }));
    }
  };
  const handleUploadimage3 = (result: CldUploadWidgetResults) => {
    const info = result.info as object;

    if ("secure_url" in info) {
      setInput((prevInput) => ({
        ...prevInput,
        ["image3"]: info.secure_url as string,
      }));
    }
  };
  const handleUploadimage4 = (result: CldUploadWidgetResults) => {
    const info = result.info as object;

    if ("secure_url" in info) {
      setInput((prevInput) => ({
        ...prevInput,
        ["image4"]: info.secure_url as string,
      }));
    }
  };
  const handleUploadimage5 = (result: CldUploadWidgetResults) => {
    const info = result.info as object;

    if ("secure_url" in info) {
      setInput((prevInput) => ({
        ...prevInput,
        ["image5"]: info.secure_url as string,
      }));
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 mx-auto w-[400px] p-5 border-2"
      >
        <select
          className="border-2 border-black px-2 rounded-md"
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
          className="border-2 border-black px-2 rounded-md"
          placeholder="price"
          type="number"
          name="price"
          onChange={handleChange}
        />
        <textarea
          className="border-2 border-black px-2 rounded-md"
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="length"
          type="text"
          name="length"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="width"
          type="text"
          name="width"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="height"
          type="text"
          name="height"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="material"
          type="text"
          name="material"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="color"
          type="text"
          name="color"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="size"
          type="text"
          name="size"
          onChange={handleChange}
        />

        <CldUploadButton
          uploadPreset="wq0w4znw"
          className="w-full relative h-[150px] border-2 border-dotted grid place-items-center bg-slate-100"
          onUpload={handleUploadimage1}
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
          {input.image1 && (
            <Image
              src={input.image1}
              alt="image_1"
              className="absolute object-cover inset-0"
              fill
            />
          )}
        </CldUploadButton>

        <CldUploadButton
          uploadPreset="wq0w4znw"
          className="w-full relative h-[150px] border-2 border-dotted grid place-items-center bg-slate-100"
          onUpload={handleUploadimage2}
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
          {input.image2 && (
            <Image
              src={input.image2}
              alt="image_1"
              className="absolute object-cover inset-0"
              fill
            />
          )}
        </CldUploadButton>

        <CldUploadButton
          uploadPreset="wq0w4znw"
          className="w-full relative h-[150px] border-2 border-dotted grid place-items-center bg-slate-100"
          onUpload={handleUploadimage3}
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
          {input.image3 && (
            <Image
              src={input.image3}
              alt="image_1"
              className="absolute object-cover inset-0"
              fill
            />
          )}
        </CldUploadButton>
        <CldUploadButton
          uploadPreset="wq0w4znw"
          className="w-full relative h-[150px] border-2 border-dotted grid place-items-center bg-slate-100"
          onUpload={handleUploadimage3}
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
          {input.image3 && (
            <Image
              src={input.image3}
              alt="image_1"
              className="absolute object-cover inset-0"
              fill
            />
          )}
        </CldUploadButton>

        <CldUploadButton
          uploadPreset="wq0w4znw"
          className="w-full relative h-[150px] border-2 border-dotted grid place-items-center bg-slate-100"
          onUpload={handleUploadimage4}
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
          {input.image4 && (
            <Image
              src={input.image4}
              alt="image_1"
              className="absolute object-cover inset-0"
              fill
            />
          )}
        </CldUploadButton>

        <CldUploadButton
          uploadPreset="wq0w4znw"
          className="w-full relative h-[150px] border-2 border-dotted grid place-items-center bg-slate-100"
          onUpload={handleUploadimage5}
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
          {input.image5 && (
            <Image
              src={input.image5}
              alt="image_1"
              className="absolute object-cover inset-0"
              fill
            />
          )}
        </CldUploadButton>

        <button className="p-2 bg-orange-400 font-bold rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
