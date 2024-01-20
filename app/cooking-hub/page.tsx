import Kitchen from "@/components/kitchen";
import React from "react";

const itemsData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/wood_hub?category=kitchen`,
      {
        cache: "no-cache",
      }
    );
    if (!res.ok) {
      alert("Faild to fetch Cooking Hub items");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function Kitchenitems() {
  const { items } = await itemsData();

  return <Kitchen items={items} />;
}

export default Kitchenitems;
