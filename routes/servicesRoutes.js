import express from "express";
import {
  addService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/servicesController.js";

const router = express.Router();

router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.post("/", addService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;