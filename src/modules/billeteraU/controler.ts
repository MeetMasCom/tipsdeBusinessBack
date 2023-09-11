import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { BilleteraUserI, ValidateOtpI } from "../../interfaces/billeteraU.interface";
import { BilleteraUService } from "./service";

export const createBilleteraUserController = async (req: Request, resp: Response) => {
  try {

    const newBilletera = req.body as unknown as BilleteraUserI;
    const billeteraService = new BilleteraUService();
    return serviceResponse({
      data: await billeteraService.save(newBilletera),
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

export const updateBilleteraUserController = async (req: Request, resp: Response) => {
  try {
    const updateBilletera = req.body as unknown as BilleteraUserI;
    const id = req.params.id;
    const billeteraService = new BilleteraUService();
    return serviceResponse({
      data: await billeteraService.update(id, updateBilletera),
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

export const getAllBilleterasUserController = async (req: Request, resp: Response) => {
  try {
    const billeteraService = new BilleteraUService();
    return serviceResponse({
      data: await billeteraService.getAll(),
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
}

export const getByIdBilleteraUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const billeteraService = new BilleteraUService();
    return serviceResponse({
      data: await billeteraService.getById(id),
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
}


export const getByIdUserBilleteraUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;

    const billeteraService = new BilleteraUService();
    return serviceResponse({
      data: await billeteraService.getByIdUser(id),
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
}

export const validateOtpController = async (req: Request, resp: Response) => {
  try {
    const newBilletera = req.body as unknown as ValidateOtpI;
    const billeteraService = new BilleteraUService();
    return serviceResponse({
      data: await billeteraService.validOpt(newBilletera),
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

export const createOtpController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const billeteraService = new BilleteraUService();
    return serviceResponse({
      data: await billeteraService.createOtp(id),
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

