import express from "express";
import {
  getAllProductsController,
  getProductByIdController,
  getProductsBySearchController,
} from "../controllers/products";
import { asyncWrapper } from "../utils/errorHandlers";

const router = express.Router();

router.get("/", asyncWrapper(getAllProductsController));

router.get("/:id", asyncWrapper(getProductByIdController));

router.get("/search/:query", asyncWrapper(getProductsBySearchController));

export default router;
