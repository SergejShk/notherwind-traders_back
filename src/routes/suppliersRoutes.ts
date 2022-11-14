import express from "express";
import { getSuppliersController } from "./../controllers/suppliersController";

const router = express.Router();

router.get("/", getSuppliersController);

export default router;
