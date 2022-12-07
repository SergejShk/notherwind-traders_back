import { Request } from "express";
import {
  getAllCustomers,
  getCustomerById,
  getCustomersBySearch,
} from "../services/customers";

export const getAllCustomersController = async (req: Request, res: any) => {
  let page = req.query.page ? Number(req.query.page) : 1;
  const take = 20;
  let skip = page * take - take;
  const data = await getAllCustomers(skip, take);

  return res.status(200).json(data);
};

export const getCustomerByIdController = async (req: Request, res: any) => {
  const id = req.params.id;
  const product = await getCustomerById(id);

  return res.status(200).json(product);
};

export const getCustomersBySearchController = async (
  req: Request,
  res: any
) => {
  const { query } = req.params;
  const data = await getCustomersBySearch(query);

  res.status(200).json(data);
};
