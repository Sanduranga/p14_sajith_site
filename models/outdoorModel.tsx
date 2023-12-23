import mongoose, { Schema } from "mongoose";

const outdoorUploads = new Schema(
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

const outdoorUploadsModel =
  mongoose.models.outdoor_oasis ||
  mongoose.model("outdoor_oasis", outdoorUploads);
export default outdoorUploadsModel;
