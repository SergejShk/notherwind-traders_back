import { Products } from "../models/productsModel";

export const getAllProducts = async (skip: number, take: number) => {
  const builder = Products.createQueryBuilder("products");

  const total = await builder.getCount();
  const data = await builder.take(take).skip(skip).getMany();
  const sql = builder.getSql();

  return { stats: { sql }, total, data };
};

export const getProductById = async (id: string) => {
  const builder = Products.createQueryBuilder("products");

  const data = await builder
    .leftJoinAndSelect("products.suppliers", "suppliers")
    .where("products.ProductID = :ProductID", { ProductID: id })
    .getOne();
  const sql = builder.getSql();

  const result = Object.entries(data || []).reduce((acc: any, [key, value]) => {
    if (key === "SupplierID") {
      acc[key] = value;
      acc.Supplier = data?.suppliers.CompanyName;
    } else if (key === "suppliers") {
    } else if (key === "UnitPrice") {
      acc[key] = `$${value}`;
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});

  return { stats: { sql }, data: result };
};

export const getProductsBySearch = async (query: any) => {
  const builder = Products.createQueryBuilder("products");
  builder
    .where("LOWER(products.ProductName) LIKE LOWER(:query)", {
      query: `%${query}%`,
    })
    .limit(50);
  const dataProducts = await builder.getMany();
  const sql = builder.getSql();

  const data = dataProducts.map((product) => {
    return {
      ProductID: product.ProductID,
      ProductName: product.ProductName,
      QuantityPerUnit: product.QuantityPerUnit,
      UnitPrice: product.UnitPrice,
      UnitsInStock: product.UnitsInStock,
    };
  });

  return { stats: { sql }, data };
};
