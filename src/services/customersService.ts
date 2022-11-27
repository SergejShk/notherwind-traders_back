import { AppDataSource } from "../db/dbSourse";
import { Customers } from "../models/customersModel";

const customersRepository = AppDataSource.getRepository(Customers);

export const getAllCustomers = async (skip: number, take: number) => {
  const [data, total] = await customersRepository.findAndCount({
    skip,
    take,
  });

  return { total, data };
};

export const getCustomerById = async (id: string) => {
  const data = await Customers.createQueryBuilder("customers")
    .where("customers.CustomerID = :CustomerID", { CustomerID: id })
    .getOne();

  return data;
};
