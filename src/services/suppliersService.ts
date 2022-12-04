import { NotFoundError } from "helpers/errors";
import { Suppliers } from "../models/suppliersModel";

export const getAllSuppliers = async (skip: number, take: number) => {
  const builder = Suppliers.createQueryBuilder("suppliers");

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

export const getSupplierById = async (id: string) => {
  const builder = Suppliers.createQueryBuilder("suppliers");

  const date = new Date().toISOString();
  const start = process.hrtime();

  const data = await builder
    .where("suppliers.SupplierID = :SupplierID", { SupplierID: id })
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
