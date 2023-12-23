import mongoose, { Schema } from "mongoose";

const diningUploads = new Schema(
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

const diningUploadsModel =
  mongoose.models.dining_domain ||
  mongoose.model("dining_domain", diningUploads);
export default diningUploadsModel;
