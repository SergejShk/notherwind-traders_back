"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const suppliersRoutes_1 = __importDefault(require("./routes/suppliersRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const ordersRoutes_1 = __importDefault(require("./routes/ordersRoutes"));
const employeesRoutes_1 = __importDefault(require("./routes/employeesRoutes"));
const customersRoutes_1 = __importDefault(require("./routes/customersRoutes"));
const errorHandlers_1 = require("./helpers/errorHandlers");
exports.app = (0, express_1.default)();
const formatsLogger = exports.app.get("env") === "development" ? "dev" : "short";
exports.app.use((0, morgan_1.default)(formatsLogger));
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.get("/", (_req, res, _next) => {
    res.status(200).json("Server conected seccessfully");
});
exports.app.use("/api/suppliers", suppliersRoutes_1.default);
exports.app.use("/api/products", productsRoutes_1.default);
exports.app.use("/api/orders", ordersRoutes_1.default);
exports.app.use("/api/employees", employeesRoutes_1.default);
exports.app.use("/api/customers", customersRoutes_1.default);
exports.app.use((_, res) => {
    res.status(404).json({ message: "Not Found" });
});
exports.app.use(errorHandlers_1.errorHandler);
//# sourceMappingURL=app.js.map