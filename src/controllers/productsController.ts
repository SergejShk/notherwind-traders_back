import { Request, Response } from "express";

export const getProductsController = (req: Request, res: Response) => {
  console.log(req);
  return res.status(200).json("Products");
};
