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
  newLength: string;
  newWidth: string;
  newHeight: string;
  newMaterial: string;
  newColor: string;
  newSize: string;
}

const EditForm = (props: itemTypes) => {
  const router = useRouter();
  const [input, setInput] = useState({} as editItemTypes);

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
      newLength,
      newWidth,
      newHeight,
      newMaterial,
      newColor,
      newSize,
      newDescription,
    } = input;
    try {
      const res = await fetch(
        `${process.env.NEXT_URL}/api/wood_hub/${props._id}?category=${props.section}`,
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
            newLength,
            newWidth,
            newHeight,
            newMaterial,
            newColor,
            newSize,
            newDescription,
          }),
        }
      );
      if (res.ok) {
        alert("Item Updated Successful");
        if (props.section === "entryFoyer") {
          router.push("/entry-foyer");
        } else if (props.section === "kitchen") {
          router.push("/cooking-hub");
        } else if (props.section === "living") {
          router.push("/family-hub");
        } else if (props.section === "bathroom") {
          router.push("/refresh-zone");
        } else if (props.section === "outdoor") {
          router.push("/outdoor-oasis");
        } else if (props.section === "bedroom") {
          router.push("/sleep-sanctuary");
        } else if (props.section === "office") {
          router.push("/office-nook");
        } else if (props.section === "dining") {
          router.push("/dining-domain");
        }
      }
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
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="length"
          type="text"
          name="newLength"
          defaultValue={props.length}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="width"
          type="text"
          name="newWidth"
          defaultValue={props.width}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="height"
          type="text"
          name="newHeight"
          defaultValue={props.height}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="material"
          type="text"
          name="newMaterial"
          defaultValue={props.material}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="color"
          type="text"
          name="newColor"
          defaultValue={props.color}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="size"
          type="text"
          name="newSize"
          defaultValue={props.size}
          onChange={handleChange}
        />

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

        <button className="p-2 bg-orange-400 font-bold rounded-md">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditForm;
