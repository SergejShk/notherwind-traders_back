import { AppDataSource } from "db/dbSourse";
import { Suppliers } from "models/suppliersModel";

const suppliersRepository = AppDataSource.getRepository(Suppliers);

export const getAllSuppliers = async (skip: number, take: number) => {
  const [data, total] = await suppliersRepository.findAndCount({
    skip,
    take,
  });

  return { total, data };
};
