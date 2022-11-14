import express from "express";
import { customersController } from "./../controllers/customersController";

const router = express.Router();

router.get("/", customersController);

export default router;
