import express from "express";
import {
  addUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", protect, updateUser);
router.delete("/:id", protect, deleteUser);

export default router;