"use client";
import { useRouter } from "next/navigation";
import { FaBed } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdLunchDining } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";
import { PiToiletDuotone } from "react-icons/pi";
import { BiChair } from "react-icons/bi";

export default function Navbar2() {
  const router = useRouter();

  const handleNavElement = (value: string) => {
    if (value === "kitchen") {
      router.push("/cooking-hub");
    }
    if (value === "living") {
      router.push("/family-hub");
    }
    if (value === "bedroom") {
      router.push("/sleep-sanctuary");
    }
    if (value === "dining") {
      router.push("/dining-domain");
    }
    if (value === "bathroom") {
      router.push("/refresh-zone");
    }
    if (value === "entryFoyer") {
      router.push("/entry-foyer");
    }
    if (value === "outdoor") {
      router.push("/outdoor-oasis");
    }
    if (value === "office") {
      router.push("/office-nook");
    }
  };
  return (
    <nav className=" bg-themeCol fixed top-28 text-white font-[500] w-[230px] px-8 pt-12 rounded-md h-[70dvh]">
      <div className="container flex w-fit flex-col gap-3">
        <h2
          className="cursor-pointer flex gap-2 items-center"
          onClick={() => handleNavElement("entryFoyer")}
        >
          Entry Foyer
          <span className="text-xl text-yellow-500">
            <BiChair />
          </span>
        </h2>
        <h2
          className="cursor-pointer flex gap-2 items-center"
          onClick={() => handleNavElement("living")}
        >
          Family Hub
          <span className="text-xl text-yellow-500">
            <MdFamilyRestroom />
          </span>
        </h2>
        <h2
          className="cursor-pointer flex gap-2 items-center"
          onClick={() => handleNavElement("bedroom")}
        >
          Sleep Sanctuary
          <span className="text-xl text-yellow-500">
            <FaBed />
          </span>
        </h2>
        <h2
          className="cursor-pointer flex gap-2 items-center"
          onClick={() => handleNavElement("kitchen")}
        >
          Cooking Hub
          <span className="text-xl text-yellow-500">
            <MdSoupKitchen />
          </span>
        </h2>
        <h2
          className="cursor-pointer flex gap-2 items-center"
          onClick={() => handleNavElement("dining")}
        >
          Dining Domain
          <span className="text-xl text-yellow-500">
            <MdLunchDining />
          </span>
        </h2>
        <h2
          className="cursor-pointer flex gap-2 items-center"
          onClick={() => handleNavElement("bathroom")}
        >
          Refresh Zone
          <span className="text-xl text-yellow-500">
            <PiToiletDuotone />
          </span>
        </h2>
        <h2
          className="cursor-pointer flex gap-2 items-center"
          onClick={() => handleNavElement("outdoor")}
        >
          Outdoor Oasis
          <span className="text-xl text-yellow-500">
            <GiPalmTree />
          </span>
        </h2>
        <h2
          className="cursor-pointer flex gap-2 items-center"
          onClick={() => handleNavElement("office")}
        >
          Office Nook
          <span className="text-xl text-yellow-500">
            <HiOutlineBuildingOffice2 />
          </span>
        </h2>
      </div>
    </nav>
  );
}
