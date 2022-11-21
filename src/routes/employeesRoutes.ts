import express from "express";
import { getEmployeesController } from "./../controllers/employeesController";

const router = express.Router();

router.get("/", getEmployeesController);

export default router;
