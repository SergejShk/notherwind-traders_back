import express from "express";
import {
  getAllEmployeesController,
  getEmployeeByIdController,
} from "./../controllers/employeesController";

const router = express.Router();

router.get("/", getAllEmployeesController);

router.get("/:id", getEmployeeByIdController);

export default router;
