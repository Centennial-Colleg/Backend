import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import createError from "http-errors";
import dotenv from "dotenv";

import referenceRoutes from "./routes/referencesRoutes.js";
import projectRoutes from "./routes/projectsRoutes.js";
import serviceRoutes from "./routes/servicesRoutes.js";
import userRoutes from "./routes/usersRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/references", referenceRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/users", userRoutes);

//Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 404 handler
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

// DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
  });