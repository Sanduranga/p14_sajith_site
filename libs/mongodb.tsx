import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("connected to the database!!");
  } catch (error) {
    console.log("*************Can't connect to the database", error);
  }
};

export default connectMongoDB;
