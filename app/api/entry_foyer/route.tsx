import connectMongoDB from "@/libs/mongodb";
import UploadItems from "@/models/uploadItems";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { image, price, description } = await request.json();
  await connectMongoDB();
  await UploadItems.create({ image, price, description });
  return NextResponse.json({ message: "items Uploaded" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const items = await UploadItems.find();
  return NextResponse.json({ items });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await UploadItems.findByIdAndDelete(id);
  return NextResponse.json({ message: "item Deleted" }, { status: 200 });
}
