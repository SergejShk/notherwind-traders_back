import { NextFunction, Request } from "express";
import { CustomError } from "./errors";

export const errorHandler = (err: Error, _req: Request, res: any) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json(err.message);
  }

  res.status(500).json({ message: err.message });
};

export const asyncWrapper = (controller: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res).catch(next);
  };
};
