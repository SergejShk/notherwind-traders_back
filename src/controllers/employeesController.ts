import { Request, Response } from "express";

export const getEmployeesController = (req: Request, res: Response) => {
  console.log(req);
  return res.status(200).json("Employees");
};
