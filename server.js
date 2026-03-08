import dotenv from "dotenv";
dotenv.config(); // Ensure this is at the VERY top
import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

// Use a more robust connection method
const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log(" Connected to the database!");
  } catch (err) {
    console.error(`Unable to connect to database: ${config.mongoUri}`);
    console.error(err.message);
    process.exit(1); // Stop the server if DB fails
  }
};

connectDB();

// Remove the old mongoose.connection.on("error") that was throwing the crash