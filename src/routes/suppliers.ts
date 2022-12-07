import express from "express";
import {
  getAllSuppliersController,
  getSupplierByIdController,
} from "../controllers/suppliers";
import { asyncWrapper } from "../utils/errorHandlers";

const router = express.Router();

router.get("/", asyncWrapper(getAllSuppliersController));

router.get("/:id", asyncWrapper(getSupplierByIdController));

export default router;
