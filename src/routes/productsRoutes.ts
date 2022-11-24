import express from "express";
import { getAllProductsController } from "./../controllers/productsController";

const router = express.Router();

router.get("/", getAllProductsController);

export default router;
