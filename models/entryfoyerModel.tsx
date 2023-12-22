import mongoose, { Schema } from "mongoose";

const entryFoyerUploads = new Schema(
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
  {
    timestamps: true,
  }
);

const entryfoyerUploadModel =
  mongoose.models.entry_foyer ||
  mongoose.model("entry_foyer", entryFoyerUploads);

export default entryfoyerUploadModel;
