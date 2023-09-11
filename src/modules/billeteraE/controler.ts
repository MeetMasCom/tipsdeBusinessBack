import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { BilleteraI } from "../../interfaces/billeteraE.interface";
import { BilleteraService } from "./service";

export const createBilleteraController = async (req: Request, resp: Response) => {
  try {

    const newBilletera = req.body as unknown as BilleteraI;
    const billeteraService = new BilleteraService();
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

export const getAllBilleteraController = async (req: Request, resp: Response) => {
  try {
    const billeteraService = new BilleteraService();
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

export const getByIdBilleteraController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const billeteraService = new BilleteraService();
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


export const getByIdUserBilleteraController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const billeteraService = new BilleteraService();
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


export const updateBilleteraEmpresaEstado = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body as BilleteraI;
    const billeteraService = new BilleteraService();
    return serviceResponse({
      data: await billeteraService.update(id, payload),
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


