import express from "express";
import {
  getAllProductsController,
  getProductByIdController,
  getProductsBySearchController,
} from "./../controllers/productsController";

const router = express.Router();

router.get("/", getAllProductsController);

router.get("/:id", getProductByIdController);

router.get("/search/:query", getProductsBySearchController);

export default router;
