import mongoose, { Schema } from "mongoose";

const officeUploads = new Schema(
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

const officeUploadsModel =
  mongoose.models.office_nook || mongoose.model("office_nook", officeUploads);
export default officeUploadsModel;
