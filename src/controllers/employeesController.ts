import { Request, NextFunction } from "express";
import { getAllEmployees } from "../services/employeesService";

export const getAllEmployeesController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  let page = req.query.page ? Number(req.query.page) : 1;

  const take = 20;
  let skip = page * take - take;

  try {
    const data = await getAllEmployees(skip, take);

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
