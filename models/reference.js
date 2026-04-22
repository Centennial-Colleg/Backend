import mongoose from "mongoose";

const referenceSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  position: String,
  company: String,
});

export default mongoose.model("Reference", referenceSchema);