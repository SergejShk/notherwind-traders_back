import { getPreparedAllOrders } from "./../helpers/prepareDataOrders";
import { Orders } from "../models/ordersModel";
import { getPreparedDataOrder } from "../helpers/prepareDataOrders";
import { NotFoundError } from "../helpers/errors";

export const getAllOrders = async (skip: number, take: number) => {
  const builder = Orders.createQueryBuilder("orders");

  const date = new Date().toISOString();
  const start = process.hrtime();

  const total = await builder.getCount();
  const data = await builder
    .leftJoinAndSelect("orders.orderDetails", "orderDetails")
    .take(take)
    .skip(skip)
    .getMany();
  const sql = builder.getSql();

  const end = process.hrtime(start);
  const duration = `${(end[0] * 1000000000 + end[1]) / 1000000} ms`;

  const preparedData = getPreparedAllOrders(data);

  return {
    metrics: {
      resultCount: data.length,
      type: ["selectWithJoin"],
    },
    stats: { date, duration, sql },
    total,
    data: preparedData,
  };
};

export const getOrderById = async (id: string) => {
  const builder = Orders.createQueryBuilder("orders");

  const date = new Date().toISOString();
  const start = process.hrtime();

  const data = await builder
    .leftJoinAndSelect("orders.orderDetails", "orderDetails")
    .leftJoinAndSelect("orderDetails.Product", "Product")
    .leftJoinAndSelect("orders.shippers", "shippers")
    .where("orders.OrderID = :OrderID", { OrderID: id })
    .getOne();
  const sql = builder.getSql();

  const end = process.hrtime(start);
  const duration = `${(end[0] * 1000000000 + end[1]) / 1000000} ms`;

  if (!data) {
    throw new NotFoundError("Not found");
  }

  const order = getPreparedDataOrder(data);

  return {
    metrics: {
      resultCount: 1,
      type: ["selectWithJoin"],
    },
    stats: { date, duration, sql },
    data: order,
  };
};
