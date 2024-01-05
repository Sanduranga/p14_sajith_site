"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Navbar2 from "./Navbar2";

const Navbar1 = () => {
  const routor = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "kitchen") {
      routor.push("/cooking-hub");
    }
    if (value === "living") {
      routor.push("/family-hub");
    }
    if (value === "bedroom") {
      routor.push("/sleep-sanctuary");
    }
    if (value === "dining") {
      routor.push("/dining-domain");
    }
    if (value === "bathroom") {
      routor.push("/refresh-zone");
    }
    if (value === "entryFoyer") {
      routor.push("/entry-foyer");
    }
    if (value === "outdoor") {
      routor.push("/outdoor-oasis");
    }
    if (value === "office") {
      routor.push("/office-nook");
    }
  };

  return (
    <nav className="flex fixed w-full top-0 left-1/2 transform -translate-x-1/2 justify-between items-center p-10 h-10 bg-themeCol z-40 text-white">
      <Link href="/">
        {/* <Image src={""} alt="logo" /> */}
        <div className="font-bold text-3xl">AyuboCeylon</div>
      </Link>
      <div className="flex gap-5">
        {/* <div>
          <select name="" id="" onChange={handleChange}>
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
        </div> */}

        <Link href="">About us</Link>
        <Link href="#">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar1;
