import connectMongoDB from "@/libs/mongodb";
import UploadItems from "@/models/uploadItems";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;
  const {
    newImage: image,
    newPrice: price,
    newDescription: description,
  } = await request.json();
  await connectMongoDB();
  await UploadItems.findByIdAndUpdate(id, { image, price, description });
  return NextResponse.json({ message: "Item updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const item = await UploadItems.findOne({ _id: id });
  return NextResponse.json({ item }, { status: 200 });
}
