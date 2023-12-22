import connectMongoDB from "@/libs/mongodb";
import entryfoyerUploadModel from "@/models/entryfoyerModel";
import kitchenUploadsModel from "@/models/kitchenModel";
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
  if (category === "bedroom") {
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
  if (category === "dining") {
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
  if (category === "outdoor") {
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
  if (category === "office") {
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
  return NextResponse.json({ message: "Item Updated" }, { status: 200 });
}

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
  // if (category === "living") {
  // }
  // if (category === "dining") {
  // }
  // if (category === "bedroom") {
  // }
  // if (category === "office") {
  // }
  // if (category === "bathroom") {
  // }
  // if (category === "ourdoor") {
  // }
}
