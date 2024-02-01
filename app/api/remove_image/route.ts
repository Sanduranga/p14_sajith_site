import cloudinary from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

// Configure Cloudinary with your cloud name and API key/secret
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  const { public_id } = await req.json();
  console.log("+++++++++++++++++++++++++ Cloudinary");

  try {
    await cloudinary.v2.uploader.destroy(public_id);
    return NextResponse.json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error deleting image" });
  }
}
