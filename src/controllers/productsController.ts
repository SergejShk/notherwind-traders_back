import { NextFunction, Request } from "express";
import { getAllProducts, getProductById } from "../services/productsService";

export const getAllProductsController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  let page = req.query.page ? Number(req.query.page) : 1;

  const take = 20;
  let skip = page * take - take;

  try {
    const data = await getAllProducts(skip, take);

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getProductByIdController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const product = await getProductById(id);

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
