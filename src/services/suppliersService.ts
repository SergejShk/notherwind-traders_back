import { AppDataSource } from "../db/dbSourse";
import { Suppliers } from "../models/suppliersModel";

const suppliersRepository = AppDataSource.getRepository(Suppliers);

export const getAllSuppliers = async (skip: number, take: number) => {
  const [data, total] = await suppliersRepository.findAndCount({
    skip,
    take,
  });

  return { total, data };
};

export const getSupplierById = async (id: string) => {
  const data = await Suppliers.createQueryBuilder("suppliers")
    .where("suppliers.SupplierID = :SupplierID", { SupplierID: id })
    .getOne();

  return data;
};
