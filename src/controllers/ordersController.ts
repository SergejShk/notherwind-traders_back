import { NextFunction, Request } from "express";
import { getAllOrders, getOrderById } from "../services/ordersService";

export const getAllOrdersController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  let page = req.query.page ? Number(req.query.page) : 1;

  const take = 20;
  let skip = page * take - take;

  try {
    const data = await getAllOrders(skip, take);

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getOrderByIdController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const order = await getOrderById(id);

    return res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};
