import { Request } from "express";
import {
  getAllProducts,
  getProductById,
  getProductsBySearch,
} from "../services/products";

export const getAllProductsController = async (req: Request, res: any) => {
  let page = req.query.page ? Number(req.query.page) : 1;
  const take = 20;
  let skip = page * take - take;
  const data = await getAllProducts(skip, take);

  return res.status(200).json(data);
};

export const getProductByIdController = async (req: Request, res: any) => {
  const id = req.params.id;
  const product = await getProductById(id);

  return res.status(200).json(product);
};

export const getProductsBySearchController = async (req: Request, res: any) => {
  const { query } = req.params;
  const data = await getProductsBySearch(query);

  res.status(200).json(data);
};
