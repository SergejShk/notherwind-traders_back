import express from "express";
import logger from "morgan";
import cors from "cors";
// import supplierRouter from "./routes/suppliersRoutes";
// import productsRouter from "./routes/productsRoutes";
// import ordersRouter from "./routes/ordersRoutes";
// import employeesRouter from "./routes/employeesRoutes";
// import customersRouter from "./routes/customersRoutes";
import { errorHandler } from "./helpers/errorHandlers";

export const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get("/", (_req, res, _next) => {
  res.status(200).json("Seccessfully");
});

// app.use("/api/suppliers", supplierRouter);
// app.use("/api/products", productsRouter);
// app.use("/api/orders", ordersRouter);
// app.use("/api/employees", employeesRouter);
// app.use("/api/customers", customersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use(errorHandler);
