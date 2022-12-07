import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Customers } from "../entities/customers";
import { Employees } from "../entities/employees";
import { OrderDetails } from "../entities/orderDetails";
import { Orders } from "../entities/orders";
import { Products } from "../entities/products";
import { Suppliers } from "../entities/suppliers";
import { Categories } from "../entities/categories";
import { EmployeeTerritories } from "../entities/employeesTerritories";
import { Regions } from "../entities/regions";
import { Shippers } from "../entities/shippers";
import { Territories } from "../entities/territories";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  // host: process.env.DB_HOST,
  // port: Number(process.env.DB_PORT),
  // username: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  url: process.env.DATABASE_URL,

  synchronize: false,
  entities: [
    Suppliers,
    Products,
    Orders,
    OrderDetails,
    Employees,
    Customers,
    Categories,
    EmployeeTerritories,
    Regions,
    Shippers,
    Territories,
  ],

  ssl: {
    rejectUnauthorized: false,
  },
});
