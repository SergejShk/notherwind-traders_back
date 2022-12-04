import { NotFoundError } from "../helpers/errors";
import { Products } from "../models/productsModel";

export const getAllProducts = async (skip: number, take: number) => {
  const builder = Products.createQueryBuilder("products");

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

export const getProductById = async (id: string) => {
  const builder = Products.createQueryBuilder("products");

  const date = new Date().toISOString();
  const start = process.hrtime();

  const data = await builder
    .leftJoinAndSelect("products.suppliers", "suppliers")
    .where("products.ProductID = :ProductID", { ProductID: id })
    .getOne();
  const sql = builder.getSql();

  const end = process.hrtime(start);
  const duration = `${(end[0] * 1000000000 + end[1]) / 1000000} ms`;

  if (!data) {
    throw new NotFoundError("Not found");
  }

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

  return {
    metrics: {
      resultCount: 1,
      type: ["selectWithJoin"],
    },
    stats: { date, duration, sql },
    data: result,
  };
};

export const getProductsBySearch = async (query: any) => {
  const builder = Products.createQueryBuilder("products");

  const date = new Date().toISOString();
  const start = process.hrtime();

  builder
    .where("LOWER(products.ProductName) LIKE LOWER(:query)", {
      query: `%${query}%`,
    })
    .limit(50);
  const dataProducts = await builder.getMany();
  const sql = builder.getSql();

  const end = process.hrtime(start);
  const duration = `${(end[0] * 1000000000 + end[1]) / 1000000} ms`;

  if (!dataProducts || dataProducts.length === 0) {
    throw new NotFoundError("Not found");
  }

  const data = dataProducts.map((product) => {
    return {
      ProductID: product.ProductID,
      ProductName: product.ProductName,
      QuantityPerUnit: product.QuantityPerUnit,
      UnitPrice: product.UnitPrice,
      UnitsInStock: product.UnitsInStock,
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
