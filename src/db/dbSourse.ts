import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Suppliers } from "../models/suppliersModel";
import { Products } from "../models/productsModel";
import { Orders } from "../models/ordersModel";
import { Employees } from "../models/employeesModel";
import { Customers } from "../models/customersModel";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [Suppliers, Products, Orders, Employees, Customers],
});
