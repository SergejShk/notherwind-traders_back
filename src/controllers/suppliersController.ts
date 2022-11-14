import { Request, Response } from "express";

export const getSuppliersController = (req: Request, res: Response) => {
  console.log(req);
  return res.status(200).json("Suppliers");
};
