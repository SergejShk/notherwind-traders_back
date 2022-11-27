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

export const getProductById = async (id: string) => {
  const data = await Products.createQueryBuilder("products")
    .leftJoinAndSelect("products.suppliers", "suppliers")
    .where("products.ProductID = :ProductID", { ProductID: id })
    .getOne();

  const result = Object.entries(data || []).reduce((acc: any, [key, value]) => {
    if (key === "SupplierID") {
      acc.Supplier = data?.suppliers.CompanyName;
    } else if (key === "suppliers") {
    } else if (key === "UnitPrice") {
      acc[key] = `$${value}`;
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});

  return result;
};
