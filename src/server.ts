import "reflect-metadata";
import dotenv from "dotenv";
import { app } from "./app";
import { AppDataSource } from "db/dbSourse";

dotenv.config();
const PORT = process.env.PORT;

const serverStart = async () => {
  try {
    await AppDataSource.initialize();

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};

serverStart();
