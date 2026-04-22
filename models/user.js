import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  position: String,
  company: String,
});

export default mongoose.model("User", userSchema);