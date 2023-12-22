import mongoose, { Schema } from "mongoose";

const uploads = new Schema(
  {
    image: String,
    price: Number,
    description: String,
  },
  {
    timestamps: true,
  }
);

const UploadItems =
  mongoose.models.UploadItems || mongoose.model("UploadItems", uploads);

export default UploadItems;
