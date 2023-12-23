import mongoose, { Schema } from "mongoose";

const livinguploads = new Schema(
  {
    section: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    price: Number,
    description: String,
  },
  { timestamps: true }
);

const livinguploadsModel =
  mongoose.models.family_hub || mongoose.model("family_hub", livinguploads);

export default livinguploadsModel;
