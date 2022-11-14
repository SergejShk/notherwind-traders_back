import express from "express";
import { getOrdersController } from "./../controllers/ordersController";

const router = express.Router();

router.get("/", getOrdersController);

export default router;
