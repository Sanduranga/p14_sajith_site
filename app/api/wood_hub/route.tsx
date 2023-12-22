import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import entryfoyerUploadModel from "@/models/entryfoyerModel";
import kitchenUploadsModel from "@/models/kitchenModel";

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
  }
  if (category === "entryFoyer") {
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
  }
  if (category === "living") {
  }
  if (category === "dining") {
  }
  if (category === "bedroom") {
  }
  if (category === "office") {
  }
  if (category === "bathroom") {
  }
  if (category === "ourdoor") {
  }
  return NextResponse.json({ message: "Item Uploaded" }, { status: 201 });
}

// GET API ***********************************************************************

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  if (category === "entryFoyer") {
    const items = await entryfoyerUploadModel.find();
    return NextResponse.json({ items }, { status: 200 });
  }
  if (category === "kitchen") {
    const items = await kitchenUploadsModel.find();
    return NextResponse.json({ items }, { status: 200 });
  }
  if (category === "living") {
  }
  if (category === "dining") {
  }
  if (category === "bedroom") {
  }
  if (category === "office") {
  }
  if (category === "bathroom") {
  }
  if (category === "ourdoor") {
  }
}

// DELETE API ***********************************************************************

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const category = request.nextUrl.searchParams.get("category");
  await connectMongoDB();
  if (category === "entryFoyer") {
    await entryfoyerUploadModel.findByIdAndDelete(id);
  }
  if (category === "kitchen") {
    await kitchenUploadsModel.findByIdAndDelete(id);
  }
  if (category === "living") {
  }
  if (category === "dining") {
  }
  if (category === "bedroom") {
  }
  if (category === "office") {
  }
  if (category === "bathroom") {
  }
  if (category === "ourdoor") {
  }
  return NextResponse.json({ message: "Item Deleted" }, { status: 200 });
}
