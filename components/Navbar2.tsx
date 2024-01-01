"use client";
import { useRouter } from "next/navigation";

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
    <nav className=" bg-themeCol text-white font-semibold rounded-md h-[100dvh]">
      <div className="wrapper w-[20vw] px-4 pt-8 ">
        <div className="container flex w-fit mx-auto flex-col gap-3">
          <h2
            className="cursor-pointer"
            onClick={() => handleNavElement("entryFoyer")}
          >
            Entry Foyer
          </h2>
          <h2
            className="cursor-pointer"
            onClick={() => handleNavElement("living")}
          >
            Family Hub
          </h2>
          <h2
            className="cursor-pointer"
            onClick={() => handleNavElement("bedroom")}
          >
            Sleep Sanctuary
          </h2>
          <h2
            className="cursor-pointer"
            onClick={() => handleNavElement("kitchen")}
          >
            Cooking Hub
          </h2>
          <h2
            className="cursor-pointer"
            onClick={() => handleNavElement("dining")}
          >
            Dining Domain
          </h2>
          <h2
            className="cursor-pointer"
            onClick={() => handleNavElement("bathroom")}
          >
            Refresh Zone
          </h2>
          <h2
            className="cursor-pointer"
            onClick={() => handleNavElement("outdoor")}
          >
            Outdoor Oasis
          </h2>
          <h2
            className="cursor-pointer"
            onClick={() => handleNavElement("office")}
          >
            Office Nook
          </h2>
        </div>
      </div>
    </nav>
  );
}
