import express from "express";
import { getAllCustomersController } from "./../controllers/customersController";

const router = express.Router();

router.get("/", getAllCustomersController);

export default router;
