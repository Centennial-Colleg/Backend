import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  position: String,
  company: String,
});

export default mongoose.model("Project", projectSchema);