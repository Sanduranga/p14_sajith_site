import mongoose, { Schema } from "mongoose";

const users = new Schema(
  {
    userName: { type: String, require: true },
    userEmail: { type: String, require: true },
    userImage: { type: String, require: true },
    likedItemsIds: Array,
  },
  { timestamps: true }
);

const userModel = mongoose.models.users || mongoose.model("users", users);

export default userModel;
