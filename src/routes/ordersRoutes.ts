import express from "express";
import {
  getAllOrdersController,
  getOrderByIdController,
} from "./../controllers/ordersController";

const router = express.Router();

router.get("/", getAllOrdersController);

router.get("/:id", getOrderByIdController);

export default router;
