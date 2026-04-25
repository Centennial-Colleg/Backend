import express from "express";
import {
  addReference,
  getAllReferences,
  getReferenceById,
  updateReference,
  deleteReference,
} from "../controllers/referencesController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllReferences);
router.get("/:id", getReferenceById);
router.post("/", protect, addReference);
router.put("/:id", protect, updateReference);
router.delete("/:id", protect, deleteReference);

export default router;