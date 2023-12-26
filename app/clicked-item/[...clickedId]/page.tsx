import ClickedPage from "@/components/ClickedPage";
import EditForm from "@/components/EditForm";

const getItemById = async (id: string, category: string) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/wood_hub/${id}?category=${category}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Edit item fetching faild");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function ClickedItem({
  params,
}: {
  params: { clickedId: string[] };
}) {
  const id = params.clickedId[0];
  const category = params.clickedId[1];

  const { item } = await getItemById(id, category);
  const {
    section,
    image1,
    image2,
    image3,
    image4,
    image5,
    price,
    description,
  } = item;

  return (
    <ClickedPage
      _id={id}
      section={section}
      image1={image1}
      image2={image2}
      image3={image3}
      image4={image4}
      image5={image5}
      price={price}
      description={description}
    />
  );
}
