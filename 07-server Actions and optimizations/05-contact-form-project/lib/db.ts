import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log(" 😀 MongoDB is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DB_URL!);

    isConnected = db.connection.readyState === 1;

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error(" ❌ Error connecting to MongoDB:", error);
    throw error;
  }
};
