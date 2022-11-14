import { Request, Response } from "express";

export const customersController = (req: Request, res: Response) => {
  console.log(req);
  return res.status(200).json("Customers");
};
