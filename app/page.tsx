import Welcome from "@/components/Welcome";

const getItems = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/wood_hub?category=collection`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  } catch (error) {
    console.log("all items error ******************", error);
  }
};

export default async function Home() {
  const combinedData = await getItems();
  const kitchen = combinedData.kitchen;
  const entryFoyer = combinedData.entryFoyer;
  const allItemArray = [...kitchen, ...entryFoyer];
  return (
    <>
      <Welcome allItems={allItemArray} />
    </>
  );
}
