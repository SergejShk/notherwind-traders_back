import express from "express";
import {
  getAllProductsController,
  getProductByIdController,
} from "./../controllers/productsController";

const router = express.Router();

router.get("/", getAllProductsController);

router.get("/:id", getProductByIdController);

export default router;
