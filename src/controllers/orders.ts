import { Request } from "express";
import { getAllOrders, getOrderById } from "../services/orders";

export const getAllOrdersController = async (req: Request, res: any) => {
  let page = req.query.page ? Number(req.query.page) : 1;
  const take = 20;
  let skip = page * take - take;
  const data = await getAllOrders(skip, take);

  return res.status(200).json(data);
};

export const getOrderByIdController = async (req: Request, res: any) => {
  const id = req.params.id;
  const order = await getOrderById(id);

  return res.status(200).json(order);
};
