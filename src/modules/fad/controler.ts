import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { FadI } from "../../interfaces/fad.interface";
import { FadService } from "./service";

 export const createFadController = async (req: Request, resp: Response) => {
  try {
    const { user_id,name, description } = req.body;
    const newFad={user_id,name,description,picture: req.file?.path} as FadI;
    const fadService = new FadService();
    return serviceResponse({
      data: await fadService.save(newFad),
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

export const getAllFadController = async (req: Request, resp: Response) => {
  try {
    const fadService = new FadService();
    return serviceResponse({
      data: await fadService.getAll(),
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

export const getByIdFadController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const fadService = new FadService();
    return serviceResponse({
      data: await fadService.getById(id),
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

export const getByIdUserFadController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const fadService = new FadService();
    return serviceResponse({
      data: await fadService.getByIdUser(id),
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