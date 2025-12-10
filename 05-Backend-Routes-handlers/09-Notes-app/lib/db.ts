import mongoose from "mongoose";

const MONGODB_URI = process.env.DB_URL as string;
let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("✅ Already connected to MongoDB");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connection.readyState === 1;

    console.log("✅ Connected to MongoDB", db.connection?.host);
  } catch (error) {
    console.error(" ❌ Error connecting to MongoDB:", error);
    throw error;
  }
};
