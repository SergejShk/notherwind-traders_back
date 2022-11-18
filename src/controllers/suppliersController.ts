import { Request, NextFunction } from "express";
import { getAllSuppliers } from "services/suppliersService";

export const getAllSuppliersController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  let { page } = req.body;
  page = page || 1;
  const take = 20;
  let skip = page * take - take;

  try {
    const data = await getAllSuppliers(skip, take);

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
