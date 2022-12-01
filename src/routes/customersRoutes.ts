import express from "express";
import {
  getAllCustomersController,
  getCustomerByIdController,
  getCustomersBySearchController,
} from "./../controllers/customersController";

const router = express.Router();

router.get("/", getAllCustomersController);

router.get("/:id", getCustomerByIdController);

router.get("/search/:query", getCustomersBySearchController);

export default router;
