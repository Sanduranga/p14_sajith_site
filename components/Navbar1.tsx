"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar1 = () => {
  const routor = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "kitchenItems") {
      routor.push("./kitchen-items");
    }
  };

  return (
    <nav className="flex justify-between items-center p-10 h-10 bg-red-200">
      <Link href="./">
        <Image src={""} alt="logo" />
      </Link>
      <ul className="flex gap-5">
        <li>
          <select name="" id="" onChange={handleChange}>
            <option>Products</option>
            <option value="kitchenItems">Kitchen items</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
        </li>

        <Link href="./kitchen-items">
          <li>About us</li>
        </Link>
        <Link href="#">
          <li>Sign in</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar1;
