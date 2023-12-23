import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import entryfoyerUploadModel from "@/models/entryfoyerModel";
import kitchenUploadsModel from "@/models/kitchenModel";
import livinguploadsModel from "@/models/livingModel";
import diningUploadsModel from "@/models/diningModel";
import bedroomUploadsModel from "@/models/bedroomModel";
import officeUploadsModel from "@/models/officeModel";
import outdoorUploadsModel from "@/models/outdoorModel";
import bathroomUploadsModel from "@/models/bathroomModel";

export async function POST(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");
  const {
    section,
    image1,
    image2,
    image3,
    image4,
    image5,
    price,
    description,
  } = await request.json();
  await connectMongoDB();

  if (category === "kitchen") {
    await kitchenUploadsModel.create({
      section,
      image1,
      image2,
      image3,
      image4,
      image5,
      price,
      description,
    });
  } else if (category === "entryFoyer") {
    await entryfoyerUploadModel.create({
      section,
      image1,
      image2,
      image3,
      image4,
      image5,
      price,
      description,
    });
  } else if (category === "living") {
    await livinguploadsModel.create({
      section,
      image1,
      image2,
      image3,
      image4,
      image5,
      price,
      description,
    });
  } else if (category === "dining") {
    await diningUploadsModel.create({
      section,
      image1,
      image2,
      image3,
      image4,
      image5,
      price,
      description,
    });
  } else if (category === "bedroom") {
    await bedroomUploadsModel.create({
      section,
      image1,
      image2,
      image3,
      image4,
      image5,
      price,
      description,
    });
  } else if (category === "office") {
    await officeUploadsModel.create({
      section,
      image1,
      image2,
      image3,
      image4,
      image5,
      price,
      description,
    });
  } else if (category === "bathroom") {
    await bathroomUploadsModel.create({
      section,
      image1,
      image2,
      image3,
      image4,
      image5,
      price,
      description,
    });
  } else if (category === "outdoor") {
    await outdoorUploadsModel.create({
      section,
      image1,
      image2,
      image3,
      image4,
      image5,
      price,
      description,
    });
  }

  return NextResponse.json({ message: "Item Uploaded" }, { status: 201 });
}

//************************  GET API *********************************************************

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  if (category === "entryFoyer") {
    const items = await entryfoyerUploadModel.find();
    return NextResponse.json({ items }, { status: 200 });
  } else if (category === "kitchen") {
    const items = await kitchenUploadsModel.find();
    return NextResponse.json({ items }, { status: 200 });
  } else if (category === "living") {
    const items = await livinguploadsModel.find();
    return NextResponse.json({ items }, { status: 200 });
  } else if (category === "dining") {
    const items = await diningUploadsModel.find();
    return NextResponse.json({ items }, { status: 200 });
  } else if (category === "bedroom") {
    const items = await bedroomUploadsModel.find();
    return NextResponse.json({ items }, { status: 200 });
  } else if (category === "office") {
    const items = await officeUploadsModel.find();
    return NextResponse.json({ items }, { status: 200 });
  } else if (category === "bathroom") {
    const items = await bathroomUploadsModel.find();
    return NextResponse.json({ items }, { status: 200 });
  } else if (category === "outdoor") {
    const items = await outdoorUploadsModel.find();
    return NextResponse.json({ items }, { status: 200 });
  }
}

//************************** DELETE API *************************************************

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const category = request.nextUrl.searchParams.get("category");
  await connectMongoDB();
  if (category === "entryFoyer") {
    await entryfoyerUploadModel.findByIdAndDelete(id);
  } else if (category === "kitchen") {
    await kitchenUploadsModel.findByIdAndDelete(id);
  } else if (category === "living") {
    await livinguploadsModel.findByIdAndDelete(id);
  } else if (category === "dining") {
    await diningUploadsModel.findByIdAndDelete(id);
  } else if (category === "bedroom") {
    await bedroomUploadsModel.findByIdAndDelete(id);
  } else if (category === "office") {
    await officeUploadsModel.findByIdAndDelete(id);
  } else if (category === "bathroom") {
    await bedroomUploadsModel.findByIdAndDelete(id);
  } else if (category === "outdoor") {
    await outdoorUploadsModel.findByIdAndDelete(id);
  }
  return NextResponse.json({ message: "Item Deleted" }, { status: 200 });
}
