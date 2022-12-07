import express from "express";
import {
  getAllEmployeesController,
  getEmployeeByIdController,
} from "../controllers/employees";
import { asyncWrapper } from "../utils/errorHandlers";

const router = express.Router();

router.get("/", asyncWrapper(getAllEmployeesController));

router.get("/:id", asyncWrapper(getEmployeeByIdController));

export default router;
