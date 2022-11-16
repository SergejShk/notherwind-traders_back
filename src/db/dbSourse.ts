import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Customers, Employees, Orders, Products, Suppliers } from "models";

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
