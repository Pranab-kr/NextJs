import monmgoose from "mongoose";

declare global {
  var mongoose: {
    conn: typeof monmgoose | null;
    promise: Promise<typeof monmgoose> | null;
  };
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    console.log("✅ Using cached database connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = monmgoose.connect(MONGODB_URI!).then((mongoose) => {
      console.log("✅ MongoDB connected successfully");
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
  return cached.conn;
}
