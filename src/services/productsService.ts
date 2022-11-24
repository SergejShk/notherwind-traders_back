import { AppDataSource } from "../db/dbSourse";
import { Products } from "../models/productsModel";

const productsRepository = AppDataSource.getRepository(Products);

export const getAllProducts = async (skip: number, take: number) => {
  const [data, total] = await productsRepository.findAndCount({
    skip,
    take,
  });

  return { total, data };
};
