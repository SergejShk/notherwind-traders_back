import express from "express";
import logger from "morgan";
import cors from "cors";
import supplierRouter from "./routes/suppliersRoutes";
import productsRouter from "./routes/productsRoutes";
import ordersRouter from "./routes/ordersRoutes";
import employeesRouter from "./routes/employeesRoutes";
import customersRouter from "./routes/customersRoutes";
import { errorHandler } from "./helpers/errorHandlers";
// import { getAllOrdersTest } from "./services/testService";
// import { NextFunction, Request } from "express";

export const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get("/", (_req, res, _next) => {
  res.status(200).json("Server conected seccessfully");
});

// app.get("/test", async (req: Request, res: any, next: NextFunction) => {
//   try {
//     let page = req.query.page ? Number(req.query.page) : 1;

//     const take = 20;
//     let skip = page * take - take;

//     const testData = await getAllOrdersTest(skip, take);
//     res.status(200).json(testData);
//   } catch (error) {
//     next(error);
//   }
// });

app.use("/api/suppliers", supplierRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/employees", employeesRouter);
app.use("/api/customers", customersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use(errorHandler);
