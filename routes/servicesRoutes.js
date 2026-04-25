import express from "express";
import {
  addService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/servicesController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.post("/", protect, addService);
router.put("/:id", protect, updateService);
router.delete("/:id", protect, deleteService);

export default router;