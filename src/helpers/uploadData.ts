import fs from "fs/promises";
import csvtojson from "csvtojson";
// import { AppDataSource } from "../db/dbSourse";
import { Customers } from "../models/customersModel";
import { Employees } from "../models/employeesModel";
import { Orders } from "../models/ordersModel";
import { Products } from "../models/productsModel";
import { Suppliers } from "../models/suppliersModel";

interface ModelsType {
  [key: string]: any;
}

const Models: ModelsType = {
  Suppliers: new Suppliers(),
  Products: new Products(),
  Orders: new Orders(),
  Employees: new Employees(),
  Customers: new Customers(),
};

export const getFiles = async () => {
  try {
    const files = await fs.readdir("data");

    return files;
  } catch (err) {
    throw err;
  }
};

const uploadFile = async (fileName: string) => {
  const parsedFile = await csvtojson().fromFile(`data/${fileName}`);
  const table = Models[getTableName(fileName)];

  //   const newTable = getTableName(fileName);

  console.log(parsedFile);
  console.log(table);

  try {
    // await AppDataSource.createQueryBuilder()
    //   .insert()
    //   .into(table)
    //   .values(parsedFile)
    //   .execute();
    //====================================================================//
    // await AppDataSource.createQueryBuilder()
    //   .insert()
    //   .into(newTable)
    //   .values(parsedFile)
    //   .execute();
  } catch (err) {
    console.log(err);
  }
};

const getTableName = (fileName: string): string => {
  return fileName.split(".").at(0)!;
};

const generateDataToDB = async () => {
  const files = getFiles();

  await Promise.all(
    (
      await files
    )?.map((file) => {
      uploadFile(file);
    })
  );

  return "Files uploaded";
};

generateDataToDB();
