"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ id }: any) => {
  const router = useRouter();
  const handleDelete = async (id: any) => {
    const confirmed = confirm("Are you sure?");
    try {
      if (confirmed) {
        const res = await fetch(
          `http://localhost:3000/api/entry_foyer?id=${id}`,
          {
            method: "DELETE",
          }
        );
        const { message }: any = await res.json();
        alert(message);
        if (res.ok) {
          router.refresh();
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <button
      onClick={() => handleDelete(id)}
      className="p-1 rounded-md bg-red-500 text-white"
    >
      Dele
    </button>
  );
};

export default DeleteButton;
