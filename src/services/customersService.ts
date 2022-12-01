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

export const getCustomersBySearch = async (query: any) => {
  const builder = Customers.createQueryBuilder("customers");
  builder
    .where("LOWER(customers.CompanyName) LIKE LOWER(:query)", {
      query: `%${query}%`,
    })
    .orWhere("LOWER(customers.ContactName) LIKE LOWER(:query)", {
      query: `%${query}%`,
    })
    .orWhere("LOWER(customers.ContactTitle) LIKE LOWER(:query)", {
      query: `%${query}%`,
    })
    .limit(50);
  const dataCustomers = await builder.getMany();
  const sql = builder.getSql();

  const data = dataCustomers.map((customer) => {
    return {
      CustomerID: customer.CustomerID,
      CompanyName: customer.CompanyName,
      ContactName: customer.ContactName,
      ContactTitle: customer.ContactTitle,
      Phone: customer.Phone,
    };
  });

  return { dataLog: { sql }, data };
};
