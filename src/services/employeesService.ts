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

export const getEmployeeById = async (id: string) => {
  const data = await Employees.createQueryBuilder("employees")
    .leftJoinAndSelect("employees.reportsTo", "reportsTo")
    .where("employees.EmployeeID = :EmployeeID", { EmployeeID: id })
    .getOne();

  const employee = {
    EmployeeID: data?.EmployeeID,
    Name: data?.FirstName + " " + data?.LastName,
    Title: data?.Title,
    TitleOfCourtesy: data?.TitleOfCourtesy,
    BirthDate: data?.BirthDate,
    HireDate: data?.HireDate,
    Address: data?.Address,
    City: data?.City,
    Region: data?.Region,
    PostalCode: data?.PostalCode,
    Country: data?.Country,
    HomePhone: data?.HomePhone,
    Extension: data?.Extension,
    Notes: data?.Notes,
    ReportsToID: data?.ReportsTo,
    ReportsTo: data?.reportsTo?.FirstName + " " + data?.reportsTo?.LastName,
  };

  return employee;
};
