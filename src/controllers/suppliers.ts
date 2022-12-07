import { Request } from "express";
import { getAllSuppliers, getSupplierById } from "../services/suppliers";

export const getAllSuppliersController = async (req: Request, res: any) => {
  let page = req.query.page ? Number(req.query.page) : 1;
  const take = 20;
  let skip = page * take - take;
  const data = await getAllSuppliers(skip, take);

  return res.status(200).json(data);
};

export const getSupplierByIdController = async (req: Request, res: any) => {
  const id = req.params.id;
  const supplier = await getSupplierById(id);

  return res.status(200).json(supplier);
};
