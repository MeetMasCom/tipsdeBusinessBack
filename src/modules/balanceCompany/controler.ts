import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { BalanceCompanyService } from "./service";


export const getAllController = async (req: Request, resp: Response) => {
  try {
    const balanceCompanyService = new BalanceCompanyService();
    return serviceResponse({
      data: await balanceCompanyService.getAll(),
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

export const getAllRechargsController = async (req: Request, resp: Response) => {
  try {
    const balanceCompanyService = new BalanceCompanyService();
    return serviceResponse({
      data: await balanceCompanyService.getAllRechargs(),
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
