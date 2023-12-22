"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { itemTypes } from "./AddItemForm";

interface editItemTypes {
  newSection: string;
  newImage1: string;
  newImage2: string;
  newImage3: string;
  newImage4: string;
  newImage5: string;
  newPrice: number;
  newDescription: string;
}

// { section },
//   { image1 },
//   { image2 },
//   { image3 },
//   { image4 },
//   { image5 },
//   { price },
//   { description }

const EditForm = (props: itemTypes) => {
  const [input, setInput] = useState({} as editItemTypes);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      newSection,
      newImage1,
      newImage2,
      newImage3,
      newImage4,
      newImage5,
      newPrice,
      newDescription,
    } = input;
    try {
      const res = await fetch(
        `http://localhost:3000/api/wood_hub?category=${props._id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newSection,
            newImage1,
            newImage2,
            newImage3,
            newImage4,
            newImage5,
            newPrice,
            newDescription,
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
  ) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
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
          placeholder="image1"
          type="text"
          name="image1"
          value={props.image1}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="image2"
          type="text"
          name="image2"
          value={props.image2}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="image3"
          type="text"
          name="image3"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="image4"
          type="text"
          name="image4"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="image5"
          type="text"
          name="image5"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="price"
          type="number"
          name="price"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="description"
          type="text"
          name="description"
          onChange={handleChange}
        />
        <button className="p-2 bg-orange-400 font-bold rounded-md">Edit</button>
      </form>
    </div>
  );
};

export default EditForm;
