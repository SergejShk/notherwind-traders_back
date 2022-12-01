import { Employees } from "../models/employeesModel";

export const getAllEmployees = async (skip: number, take: number) => {
  const builder = Employees.createQueryBuilder("employees");

  const total = await builder.getCount();
  const data = await builder.take(take).skip(skip).getMany();
  const sql = builder.getSql();

  return { stats: { sql }, total, data };
};

export const getEmployeeById = async (id: string) => {
  const builder = Employees.createQueryBuilder("employees");

  const data = await builder
    .leftJoinAndSelect("employees.reportsTo", "reportsTo")
    .where("employees.EmployeeID = :EmployeeID", { EmployeeID: id })
    .getOne();
  const sql = builder.getSql();

  const employee = {
    EmployeeID: data?.EmployeeID,
    Name: data?.FirstName + " " + data?.LastName,
    Title: data?.Title,
    TitleOfCourtesy: data?.TitleOfCourtesy,
    BirthDate: data?.BirthDate,
    HireDate: data?.HireDate,
    Address: data?.Address,
    City: data?.City,
    PostalCode: data?.PostalCode,
    Country: data?.Country,
    HomePhone: data?.HomePhone,
    Extension: data?.Extension,
    Notes: data?.Notes,
    ReportsToID: data?.ReportsTo ? data?.ReportsTo : "",
    ReportsTo: data?.ReportsTo
      ? data?.reportsTo?.FirstName + " " + data?.reportsTo?.LastName
      : "",
  };

  return { stats: { sql }, data: employee };
};
