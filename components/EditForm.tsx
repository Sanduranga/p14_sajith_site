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
        `http://localhost:3000/api/wood_hub/${props._id}?category=${props.section}`,
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
          name="newSection"
          defaultValue={props.section}
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
          name="newImage1"
          defaultValue={props.image1}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="image2"
          type="text"
          name="newImage2"
          defaultValue={props.image2}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="image3"
          type="text"
          name="newImage3"
          defaultValue={props.image3}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="image4"
          type="text"
          name="newImage4"
          defaultValue={props.image4}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="image5"
          type="text"
          name="newImage5"
          defaultValue={props.image5}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="price"
          type="number"
          name="newPrice"
          defaultValue={props.price}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="description"
          type="text"
          name="newDescription"
          defaultValue={props.description}
          onChange={handleChange}
        />
        <button className="p-2 bg-orange-400 font-bold rounded-md">Edit</button>
      </form>
    </div>
  );
};

export default EditForm;
