import express from "express";
import { getProductsController } from "../controllers/productsController";

const router = express.Router();

router.get("/", getProductsController);

export default router;
