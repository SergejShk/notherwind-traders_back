import { AppDataSource } from "../db/dbSourse";
import { Orders } from "../models/ordersModel";

const ordersRepository = AppDataSource.getRepository(Orders);

export const getAllOrdersTest = async (skip: number, take: number) => {
  const [data, total] = await ordersRepository.findAndCount({
    skip,
    take,
    relations: {
      orderDetails: true,
    },
  });

  return { total, data };
};
