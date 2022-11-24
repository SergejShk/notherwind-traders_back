import { AppDataSource } from "../db/dbSourse";
import { Orders } from "../models/ordersModel";

const ordersRepository = AppDataSource.getRepository(Orders);

export const getAllOrders = async (skip: number, take: number) => {
  const [data, total] = await ordersRepository.findAndCount({
    skip,
    take,
  });

  return { total, data };
};
