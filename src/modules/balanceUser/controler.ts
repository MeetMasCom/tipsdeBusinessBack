import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { BalanceUserService } from "./service";
import { BalanceUserI, RechargeI, RetreatI, ReviewRechargeI, ReviewRetreatI } from "../../interfaces/balanceUser";


export const getAllController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const balanceUserService = new BalanceUserService();
    return serviceResponse({
      data: await balanceUserService.getAll(id),
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

export const getBalanceUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const balanceUserService = new BalanceUserService();
    return serviceResponse({
      data: await balanceUserService.getBalanceUser(id),
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

export const rechargeController = async (req: Request, resp: Response) => {
  try {
    const data = req.body as RechargeI;
    const balanceUserService = new BalanceUserService();
    return serviceResponse({
      data: await balanceUserService.recharge(data),
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

export const reviewRechargeController = async (req: Request, resp: Response) => {
  try {
    const data = req.body as ReviewRechargeI;
    const balanceUserService = new BalanceUserService();
    return serviceResponse({
      data: await balanceUserService.reviewRecharge(data),
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

export const reviewRetreatController = async (req: Request, resp: Response) => {
  try {
    const data = req.body as ReviewRetreatI;
    const balanceUserService = new BalanceUserService();
    return serviceResponse({
      data: await balanceUserService.reviewRetreat(data),
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

export const retreatController = async (req: Request, resp: Response) => {
  try {
    const data = req.body as RetreatI;
    const balanceUserService = new BalanceUserService();
    return serviceResponse({
      data: await balanceUserService.retreat(data),
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

export const getAllRetreatUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const balanceUserService = new BalanceUserService();
    return serviceResponse({
      data: await balanceUserService.getAllRetreatByUser(id),
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

export const getAllRetreatController = async (req: Request, resp: Response) => {
  try {
    const balanceUserService = new BalanceUserService();
    return serviceResponse({
      data: await balanceUserService.getAllRetreat(),
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

export const updateBalance = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    console.log(id);
 
    const payload=req.body as BalanceUserI;
    console.log(payload);
    const balanceUserService = new BalanceUserService();
    return serviceResponse({
      data: await balanceUserService.updateBalance(id,payload),
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
