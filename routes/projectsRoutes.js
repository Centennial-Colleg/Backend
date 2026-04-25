import express from "express";
import {
  addProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/projectsController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", protect, addProject);
router.put("/:id", protect, updateProject);
router.delete("/:id", protect, deleteProject);

export default router;