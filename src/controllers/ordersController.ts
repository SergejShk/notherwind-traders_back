import { Request, Response } from "express";

export const getOrdersController = (req: Request, res: Response) => {
  console.log(req);
  return res.status(200).json("Orders");
};
