import EntryFoyer from "@/components/EntryFoyer";
import React from "react";

const itemsData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/wood_hub?category=entryFoyer`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      alert("Faild to fetch Entry Foyer items");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function EntryFoyerItems() {
  const { items } = await itemsData();
  return <EntryFoyer items={items} />;
}

export default EntryFoyerItems;
