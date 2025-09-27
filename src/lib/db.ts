import mongoose from "mongoose";

const uri = process.env.Mongo_Url;
let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    const db = await mongoose.connect(uri || "");
    console.log("tester", );
    isConnected = db.connections[0].readyState === 1;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
