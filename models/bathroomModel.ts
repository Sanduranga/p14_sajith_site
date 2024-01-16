import mongoose, { Schema } from "mongoose";

const bathroomUploads = new Schema(
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

const bathroomUploadsModel =
  mongoose.models.refresh_zone ||
  mongoose.model("refresh_zone", bathroomUploads);
export default bathroomUploadsModel;
