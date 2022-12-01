import { Suppliers } from "../models/suppliersModel";

export const getAllSuppliers = async (skip: number, take: number) => {
  const builder = Suppliers.createQueryBuilder("suppliers");

  const total = await builder.getCount();
  const data = await builder.take(take).skip(skip).getMany();
  const sql = builder.getSql();

  return { stats: { sql }, total, data };
};

export const getSupplierById = async (id: string) => {
  const builder = Suppliers.createQueryBuilder("suppliers");

  const data = await builder
    .where("suppliers.SupplierID = :SupplierID", { SupplierID: id })
    .getOne();
  const sql = builder.getSql();

  return { stats: { sql }, data };
};
