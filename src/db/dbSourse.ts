import { Customers } from "./../models/customersModel";
import { Employees } from "./../models/employeesModel";
import { OrderDetails } from "./../models/orderDetailsModel";
import { Orders } from "./../models/ordersModel";
import { Products } from "./../models/productsModel";
import { Suppliers } from "./../models/suppliersModel";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [Suppliers, Products, Orders, OrderDetails, Employees, Customers],
});
