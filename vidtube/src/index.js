import dotenv from "dotenv";
import { app } from './app.js';
import connectDB from "./db/index.js";

// Load environment variables from .env file
dotenv.config({ path: "./.env" });

const port = process.env.PORT || 7000;

// Connect to the database and start the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
