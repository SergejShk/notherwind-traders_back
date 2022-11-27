import { Request, NextFunction } from "express";
import { getAllSuppliers, getSupplierById } from "../services/suppliersService";

export const getAllSuppliersController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  let page = req.query.page ? Number(req.query.page) : 1;

  const take = 20;
  let skip = page * take - take;

  try {
    const data = await getAllSuppliers(skip, take);

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getSupplierByIdController = async (
  req: Request,
  res: any,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const supplier = await getSupplierById(id);

    return res.status(200).json(supplier);
  } catch (error) {
    next(error);
  }
};
