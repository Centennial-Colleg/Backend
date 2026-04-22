import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  position: String,
  company: String,
});

export default mongoose.model("Service", serviceSchema);