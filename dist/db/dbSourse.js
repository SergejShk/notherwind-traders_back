"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const customersModel_1 = require("./../models/customersModel");
const employeesModel_1 = require("./../models/employeesModel");
const orderDetailsModel_1 = require("./../models/orderDetailsModel");
const ordersModel_1 = require("./../models/ordersModel");
const productsModel_1 = require("./../models/productsModel");
const suppliersModel_1 = require("./../models/suppliersModel");
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    // host: process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    url: process.env.DATABASE_URL,
    synchronize: false,
    entities: [suppliersModel_1.Suppliers, productsModel_1.Products, ordersModel_1.Orders, orderDetailsModel_1.OrderDetails, employeesModel_1.Employees, customersModel_1.Customers],
    ssl: {
        rejectUnauthorized: false,
    },
});
//# sourceMappingURL=dbSourse.js.map