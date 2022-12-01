import { getPreparedAllOrders } from "./../helpers/prepareDataOrders";
import { Orders } from "../models/ordersModel";
import { getPreparedDataOrder } from "../helpers/prepareDataOrders";

export const getAllOrders = async (skip: number, take: number) => {
  const builder = Orders.createQueryBuilder("orders");

  const total = await builder.getCount();
  const data = await builder
    .leftJoinAndSelect("orders.orderDetails", "orderDetails")
    .take(take)
    .skip(skip)
    .getMany();
  const sql = builder.getSql();

  const preparedData = getPreparedAllOrders(data);

  return { stats: { sql }, total, data: preparedData };
};

export const getOrderById = async (id: string) => {
  const builder = Orders.createQueryBuilder("orders");

  const data = await builder
    .leftJoinAndSelect("orders.orderDetails", "orderDetails")
    .leftJoinAndSelect("orderDetails.Product", "Product")
    .leftJoinAndSelect("orders.shippers", "shippers")
    .where("orders.OrderID = :OrderID", { OrderID: id })
    .getOne();
  const sql = builder.getSql();

  const order = getPreparedDataOrder(data);

  return { stats: { sql }, data: order };
};
