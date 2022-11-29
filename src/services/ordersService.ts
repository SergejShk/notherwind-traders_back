import { getPreparedAllOrders } from "./../helpers/prepareDataOrders";
import { Orders } from "../models/ordersModel";
import { getPreparedDataOrder } from "../helpers/prepareDataOrders";

export const getAllOrders = async (skip: number, take: number) => {
  const ordersQueryBuilder = Orders.createQueryBuilder("orders");

  const total = await ordersQueryBuilder.getCount();

  const data = await ordersQueryBuilder
    .leftJoinAndSelect("orders.orderDetails", "orderDetails")
    .take(take)
    .skip(skip)
    .getMany();

  const preparedData = getPreparedAllOrders(data);

  return { total, data: preparedData };
};

export const getOrderById = async (id: string) => {
  const data = await Orders.createQueryBuilder("orders")
    .leftJoinAndSelect("orders.orderDetails", "orderDetails")
    .leftJoinAndSelect("orderDetails.Product", "Product")
    .leftJoinAndSelect("orders.shippers", "shippers")
    .where("orders.OrderID = :OrderID", { OrderID: id })
    .getOne();

  const order = getPreparedDataOrder(data);

  return order;
};
