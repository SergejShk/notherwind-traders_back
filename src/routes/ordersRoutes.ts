import express from "express";
import { getAllOrdersController } from "./../controllers/ordersController";

const router = express.Router();

router.get("/", getAllOrdersController);

export default router;
