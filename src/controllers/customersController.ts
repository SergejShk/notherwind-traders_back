import { Request, NextFunction } from "express";
import {
  getAllCustomers,
  getCustomerById,
  getCustomersBySearch,
} from "../services/customersService";

export const getAllCustomersController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  let page = req.query.page ? Number(req.query.page) : 1;

  const take = 20;
  let skip = page * take - take;

  try {
    const data = await getAllCustomers(skip, take);

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getCustomerByIdController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const product = await getCustomerById(id);

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const getCustomersBySearchController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  const { query } = req.params;

  try {
    const data = await getCustomersBySearch(query);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
