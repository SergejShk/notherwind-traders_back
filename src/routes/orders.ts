import express from "express";
import {
  getAllOrdersController,
  getOrderByIdController,
} from "../controllers/orders";
import { asyncWrapper } from "../utils/errorHandlers";

const router = express.Router();

router.get("/", asyncWrapper(getAllOrdersController));

router.get("/:id", asyncWrapper(getOrderByIdController));

export default router;
