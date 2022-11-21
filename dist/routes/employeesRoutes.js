"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeesController_1 = require("controllers/employeesController");
const router = express_1.default.Router();
router.get("/", employeesController_1.getEmployeesController);
exports.default = router;
//# sourceMappingURL=employeesRoutes.js.map