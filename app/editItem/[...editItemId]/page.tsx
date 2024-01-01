import EditForm from "@/components/EditForm";

const getItemById = async (id: string, category: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_URL}/api/wood_hub/${id}?category=${category}`,
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

export default async function EditItem({
  params,
}: {
  params: { editItemId: string[] };
}) {
  const id = params.editItemId[0];
  const category = params.editItemId[1];

  const { item } = await getItemById(id, category);
  const {
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
    description,
  } = item;

  return (
    <EditForm
      _id={id}
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
      description={description}
    />
  );
}
