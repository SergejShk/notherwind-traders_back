import { Customers } from "../models/customersModel";

export const getAllCustomers = async (skip: number, take: number) => {
  const builder = Customers.createQueryBuilder("customers");

  const total = await builder.getCount();
  const data = await builder.take(take).skip(skip).getMany();
  const sql = builder.getSql();

  return { stats: { sql }, total, data };
};

export const getCustomerById = async (id: string) => {
  const builder = Customers.createQueryBuilder("customers");
  const data = await builder
    .where("customers.CustomerID = :CustomerID", { CustomerID: id })
    .getOne();
  const sql = builder.getSql();

  return { stats: { sql }, data };
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

  return { stats: { sql }, data };
};
