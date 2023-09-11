import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RecordsTransactionService } from "./service";


export const getAllController = async (req: Request, resp: Response) => {
  try {
    const recordsTransactionService = new RecordsTransactionService();
    return serviceResponse({
      data: await recordsTransactionService.getAll(),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};

export const getAllByUserController = async (req: Request, resp: Response) => {
  try {
    const walletId = req.query.walletId as string;
    const userId = req.query.userId as string;
    const recordsTransactionService = new RecordsTransactionService();
    return serviceResponse({
      data: await recordsTransactionService.getByUserId(userId, walletId),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};
