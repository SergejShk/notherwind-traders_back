import { Request } from "express";
import { getAllEmployees, getEmployeeById } from "../services/employees";

export const getAllEmployeesController = async (req: Request, res: any) => {
  let page = req.query.page ? Number(req.query.page) : 1;
  const take = 20;
  let skip = page * take - take;
  const data = await getAllEmployees(skip, take);

  return res.status(200).json(data);
};

export const getEmployeeByIdController = async (req: Request, res: any) => {
  const id = req.params.id;
  const employee = await getEmployeeById(id);

  return res.status(200).json(employee);
};
