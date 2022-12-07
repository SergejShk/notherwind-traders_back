import fs from "fs";
import csvtojson from "csvtojson";
import { AppDataSource } from "../db/dbSourse";

export const getFiles = async () => {
  try {
    const files = await fs.promises.readdir("data");

    return files;
  } catch (err) {
    throw err;
  }
};

const uploadFile = async (fileName: string) => {
  const dataByJSON = await csvtojson().fromFile(`data/${fileName}`);

  const tableName = getTableName(fileName);

  // tableName === "Orders" && console.log(dataByJSON);

  try {
    await AppDataSource.initialize();
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(tableName)
      .values(dataByJSON)
      .execute();
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
