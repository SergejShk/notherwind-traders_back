import express from "express";
import { getAllSuppliersController } from "./../controllers/suppliersController";

const router = express.Router();

router.get("/", getAllSuppliersController);

export default router;
