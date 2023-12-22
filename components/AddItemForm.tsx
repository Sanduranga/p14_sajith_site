"use client";
interface itemTypes {
  image: string;
  price: string;
  description: string;
}

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddItemForm = () => {
  const [input, setInput] = useState({} as itemTypes);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    const { image, price, description } = input;
    try {
      const res = await fetch("http://localhost:3000/api/entry_foyer", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ image, price, description }),
      });
      if (res.ok) {
        router.push("/entry-foyer");
      }
    } catch (error) {
      alert(error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="image"
          type="text"
          name="image"
          onChange={handleChange}
        />
        <input
          className="border-2 border-black px-2 rounded-md"
          placeholder="price"
          type="text"
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
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddItemForm;
