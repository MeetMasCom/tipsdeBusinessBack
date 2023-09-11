import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RoomI } from "../../interfaces/room.interface";
import { ColaboradorService } from "./service";
import {ColaboradorI } from "../../interfaces/colaborador.interface";

 export const createColaboradorController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as ColaboradorI;
    console.log(payload);
    const spamService = new ColaboradorService();
    return serviceResponse({
      data: await spamService.save(payload),
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

export const getAllSpamController = async (req: Request, resp: Response) => {
  try {
    const spamService = new ColaboradorService();
    return serviceResponse({
      data: await spamService.getAllSpam(),
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

export const getByIdSpamController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const spamService = new ColaboradorService();
    return serviceResponse({
      data: await spamService.getByIdSpam(id),
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

export const getDetailSpamController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const spamService = new ColaboradorService();
    return serviceResponse({
      data: await spamService.getDetailSpam(id),
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

export const getUserSpamController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const spamService = new ColaboradorService();
    return serviceResponse({
      data: await spamService.getUserSpam(id),
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

export const updateSpamController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload=req.body as unknown as ColaboradorI;
    console.log(id);
    console.log(payload);
    const spamService = new ColaboradorService();
    return serviceResponse({
      data: await spamService.updateSpam(id,payload),
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



