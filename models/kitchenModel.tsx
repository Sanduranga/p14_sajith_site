import mongoose, { Schema } from "mongoose";

export const kitchenUploads = new Schema(
  {
    section: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    price: Number,
    length: String,
    width: String,
    height: String,
    material: String,
    color: String,
    size: String,
    likes: Number,
    description: String,
  },
  { timestamps: true }
);

const kitchenUploadsModel =
  mongoose.models.cooking_hub || mongoose.model("cooking_hub", kitchenUploads);

export default kitchenUploadsModel;
