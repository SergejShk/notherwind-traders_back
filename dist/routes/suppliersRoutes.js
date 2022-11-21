"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const suppliersController_1 = require("./../controllers/suppliersController");
const router = express_1.default.Router();
router.get("/", suppliersController_1.getAllSuppliersController);
exports.default = router;
//# sourceMappingURL=suppliersRoutes.js.map