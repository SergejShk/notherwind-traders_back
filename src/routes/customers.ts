import express from "express";
import {
  getAllCustomersController,
  getCustomerByIdController,
  getCustomersBySearchController,
} from "../controllers/customers";
import { asyncWrapper } from "../utils/errorHandlers";

const router = express.Router();

router.get("/", asyncWrapper(getAllCustomersController));

router.get("/:id", asyncWrapper(getCustomerByIdController));

router.get("/search/:query", asyncWrapper(getCustomersBySearchController));

export default router;
