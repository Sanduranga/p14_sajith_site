import mongoose, { Schema } from "mongoose";

const bedroomUploads = new Schema(
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

const bedroomUploadsModel =
  mongoose.models.sleep_sanctuary ||
  mongoose.model("sleep_sanctuary", bedroomUploads);
export default bedroomUploadsModel;
