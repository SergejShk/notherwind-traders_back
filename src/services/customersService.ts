import { NotFoundError } from "../helpers/errors";
import { Customers } from "../models/customersModel";

export const getAllCustomers = async (skip: number, take: number) => {
  const builder = Customers.createQueryBuilder("customers");

  const date = new Date().toISOString();
  const start = process.hrtime();

  const total = await builder.getCount();
  const data = await builder.take(take).skip(skip).getMany();
  const sql = builder.getSql();

  const end = process.hrtime(start);
  const duration = `${(end[0] * 1000000000 + end[1]) / 1000000} ms`;

  return {
    metrics: {
      resultCount: data.length,
      type: ["select"],
    },
    stats: { date, duration, sql },
    total,
    data,
  };
};

export const getCustomerById = async (id: string) => {
  const builder = Customers.createQueryBuilder("customers");

  const date = new Date().toISOString();
  const start = process.hrtime();

  const data = await builder
    .where("customers.CustomerID = :CustomerID", { CustomerID: id })
    .getOne();
  const sql = builder.getSql();

  const end = process.hrtime(start);
  const duration = `${(end[0] * 1000000000 + end[1]) / 1000000} ms`;

  if (!data) {
    throw new NotFoundError("Not found");
  }

  return {
    metrics: {
      resultCount: 1,
      type: ["selectWhere"],
    },
    stats: { date, duration, sql },
    data,
  };
};

export const getCustomersBySearch = async (query: any) => {
  const builder = Customers.createQueryBuilder("customers");

  const date = new Date().toISOString();
  const start = process.hrtime();

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

  const end = process.hrtime(start);
  const duration = `${(end[0] * 1000000000 + end[1]) / 1000000} ms`;

  if (!dataCustomers || dataCustomers.length === 0) {
    throw new NotFoundError("Not found");
  }

  const data = dataCustomers.map((customer) => {
    return {
      CustomerID: customer.CustomerID,
      CompanyName: customer.CompanyName,
      ContactName: customer.ContactName,
      ContactTitle: customer.ContactTitle,
      Phone: customer.Phone,
    };
  });

  return {
    metrics: {
      resultCount: data.length,
      type: ["selectWhere"],
    },
    stats: { date, duration, sql },
    data,
  };
};
