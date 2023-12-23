import connectMongoDB from "@/libs/mongodb";
import bathroomUploadsModel from "@/models/bathroomModel";
import bedroomUploadsModel from "@/models/bedroomModel";
import diningUploadsModel from "@/models/diningModel";
import entryfoyerUploadModel from "@/models/entryfoyerModel";
import kitchenUploadsModel from "@/models/kitchenModel";
import livinguploadsModel from "@/models/livingModel";
import officeUploadsModel from "@/models/officeModel";
import outdoorUploadsModel from "@/models/outdoorModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;
  const category = request.nextUrl.searchParams.get("category");
  const {
    newSection: section,
    newImage1: image1,
    newImage2: image2,
    newImage3: image3,
    newImage4: image4,
    newImage5: image5,
    newPrice: price,
    newDescription: description,
  } = await request.json();
  await connectMongoDB();
  if (category === "kitchen") {
    await kitchenUploadsModel.findByIdAndUpdate(id, {
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
    await livinguploadsModel.findByIdAndUpdate(id, {
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
  if (category === "bedroom") {
    await bedroomUploadsModel.findByIdAndUpdate(id, {
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
  if (category === "dining") {
    await diningUploadsModel.findByIdAndUpdate(id, {
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
  if (category === "outdoor") {
    await outdoorUploadsModel.findByIdAndUpdate(id, {
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
  if (category === "office") {
    await officeUploadsModel.findByIdAndUpdate(id, {
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
    await entryfoyerUploadModel.findByIdAndUpdate(id, {
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
  if (category === "bathroom") {
    await bathroomUploadsModel.findByIdAndUpdate(id, {
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
  return NextResponse.json({ message: "Item Updated" }, { status: 200 });
}

//***********************  GET ONE ***************************************************

export async function GET(request: NextRequest, { params }: any) {
  const category = request.nextUrl.searchParams.get("category");
  const { id } = params;
  await connectMongoDB();
  if (category === "entryFoyer") {
    const item = entryfoyerUploadModel.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
  }
  if (category === "kitchen") {
    const item = await kitchenUploadsModel.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
  }
  if (category === "living") {
    const item = await livinguploadsModel.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
  }
  if (category === "dining") {
    const item = await diningUploadsModel.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
  }
  if (category === "bedroom") {
    const item = await bedroomUploadsModel.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
  }
  if (category === "office") {
    const item = await officeUploadsModel.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
  }
  if (category === "bathroom") {
    const item = await bathroomUploadsModel.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
  }
  if (category === "ourdoor") {
    const item = await outdoorUploadsModel.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
  }
}
