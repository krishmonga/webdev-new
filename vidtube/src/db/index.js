import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // Check if MONGODB_URI is defined
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in the environment variables.");
    }

    // Connect to MongoDB
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false, // Added to disable the use of deprecated 'findAndModify' method
        useCreateIndex: true,    // Added to disable the use of deprecated 'ensureIndex' method
      }
    );

    console.log(`MongoDB connected successfully. Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;
