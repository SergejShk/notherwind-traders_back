import express from "express";
import { getAllEmployeesController } from "./../controllers/employeesController";

const router = express.Router();

router.get("/", getAllEmployeesController);

export default router;
