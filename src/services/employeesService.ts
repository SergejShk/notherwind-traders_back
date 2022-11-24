import { AppDataSource } from "../db/dbSourse";
import { Employees } from "../models/employeesModel";

const employeesRepository = AppDataSource.getRepository(Employees);

export const getAllEmployees = async (skip: number, take: number) => {
  const [data, total] = await employeesRepository.findAndCount({
    skip,
    take,
  });

  return { total, data };
};
