import express from "express";
import {
  getAllSuppliersController,
  getSupplierByIdController,
} from "./../controllers/suppliersController";

const router = express.Router();

router.get("/", getAllSuppliersController);

router.get("/:id", getSupplierByIdController);

export default router;
