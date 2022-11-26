"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
// import { Customers } from "./../models/customersModel";
// import { Employees } from "./../models/employeesModel";
// import { OrderDetails } from "./../models/orderDetailsModel";
// import { Orders } from "./../models/ordersModel";
// import { Products } from "./../models/productsModel";
// import { Suppliers } from "./../models/suppliersModel";
const categoriesModel_1 = require("./../models/categoriesModel");
const employeesTerritoriesModel_1 = require("../models/employeesTerritoriesModel");
const regionsModel_1 = require("./../models/regionsModel");
const shippersModel_1 = require("./../models/shippersModel");
const territoriesModel_1 = require("./../models/territoriesModel");
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    // host: process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    url: process.env.DATABASE_URL,
    synchronize: true,
    // entities: [Suppliers, Products, Orders, OrderDetails, Employees, Customers],
    entities: [categoriesModel_1.Categories, employeesTerritoriesModel_1.EmployeeTerritories, regionsModel_1.Regions, shippersModel_1.Shippers, territoriesModel_1.Territories],
    ssl: {
        rejectUnauthorized: false,
    },
});
//# sourceMappingURL=dbSourse.js.map