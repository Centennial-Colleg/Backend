import express from "express";
import {
  addReference,
  getAllReferences,
  getReferenceById,
  updateReference,
  deleteReference,
} from "../controllers/referencesController.js";

const router = express.Router();

router.get("/", getAllReferences);
router.get("/:id", getReferenceById);
router.post("/", addReference);
router.put("/:id", updateReference);
router.delete("/:id", deleteReference);

export default router;