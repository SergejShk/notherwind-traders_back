import { Employees } from "../models/employeesModel";

export const getAllEmployees = async (skip: number, take: number) => {
  const builder = Employees.createQueryBuilder("employees");

  const date = new Date().toISOString();
  const start = process.hrtime();

  const total = await builder.getCount();
  const data = await builder.take(take).skip(skip).getMany();
  const sql = builder.getSql();

  const end = process.hrtime(start);
  const duration = `${(end[0] * 1000000000 + end[1]) / 1000000} ms`;

  return {
    metrics: {
      resultCount: data.length,
      type: ["select"],
    },
    stats: { date, duration, sql },
    total,
    data,
  };
};

export const getEmployeeById = async (id: string) => {
  const builder = Employees.createQueryBuilder("employees");

  const date = new Date().toISOString();
  const start = process.hrtime();

  const data = await builder
    .leftJoinAndSelect("employees.reportsTo", "reportsTo")
    .where("employees.EmployeeID = :EmployeeID", { EmployeeID: id })
    .getOne();
  const sql = builder.getSql();

  const end = process.hrtime(start);
  const duration = `${(end[0] * 1000000000 + end[1]) / 1000000} ms`;

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

  return {
    metrics: {
      resultCount: 1,
      type: ["selectWithJoin"],
    },
    stats: { date, duration, sql },
    data: employee,
  };
};
