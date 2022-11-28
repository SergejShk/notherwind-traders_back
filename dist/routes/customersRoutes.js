"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customersController_1 = require("./../controllers/customersController");
const router = express_1.default.Router();
router.get("/", customersController_1.getAllCustomersController);
router.get("/:id", customersController_1.getCustomerByIdController);
exports.default = router;
//# sourceMappingURL=customersRoutes.js.map