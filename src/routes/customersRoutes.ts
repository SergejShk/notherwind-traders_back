import express from "express";
import {
  getAllCustomersController,
  getCustomerByIdController,
} from "./../controllers/customersController";

const router = express.Router();

router.get("/", getAllCustomersController);

router.get("/:id", getCustomerByIdController);

export default router;
