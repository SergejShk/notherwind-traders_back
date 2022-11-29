import { AppDataSource } from "../db/dbSourse";
import { Orders } from "../models/ordersModel";
import { getPreparedDataOrder } from "../helpers/prepareDataOrders";

const ordersRepository = AppDataSource.getRepository(Orders);

export const getAllOrders = async (skip: number, take: number) => {
  const [data, total] = await ordersRepository.findAndCount({
    skip,
    take,
  });

  return { total, data };
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
