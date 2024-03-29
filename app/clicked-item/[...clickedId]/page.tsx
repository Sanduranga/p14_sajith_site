import ClickedPage from "@/components/ClickedPage";

const getItemById = async (id: string, category: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/wood_hub/${id}?category=${category}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("+++++++++++++++++++++++Edit item fetching faild");
    }

    return res.json();
  } catch (error) {
    console.log(
      "clicked-page error********************************** =",
      error
    );
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
    _id,
    section,
    image1,
    image2,
    image3,
    image4,
    image5,
    price,
    length,
    width,
    height,
    material,
    color,
    size,
    likes,
    marks,
    description,
  } = item;

  return (
    <ClickedPage
      _id={_id}
      section={section}
      image1={image1}
      image2={image2}
      image3={image3}
      image4={image4}
      image5={image5}
      price={price}
      length={length}
      width={width}
      height={height}
      material={material}
      color={color}
      size={size}
      likes={likes}
      marks={marks}
      description={description}
    />
  );
}
