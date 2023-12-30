import mongoose, { Schema } from "mongoose";

export const entryFoyerUploads = new Schema(
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
    description: String,
  },
  {
    timestamps: true,
  }
);

const entryfoyerUploadModel =
  mongoose.models.entry_foyer ||
  mongoose.model("entry_foyer", entryFoyerUploads);

export default entryfoyerUploadModel;
