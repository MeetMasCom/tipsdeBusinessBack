import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { ServiceI } from "../../interfaces/service.interface";
import { ServiceService } from "./service";

 export const createServiceController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as ServiceI;
    const serviceService = new ServiceService();
    return serviceResponse({
      data: await serviceService.save(payload),
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

export const getAllServiceController = async (req: Request, resp: Response) => {
  try {
    const serviceService = new ServiceService();
    return serviceResponse({
      data: await serviceService.getAll(),
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

export const getByIdHotelController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const serviceService = new ServiceService();
    return serviceResponse({
      data: await serviceService.getByIdHotel(id),
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


export const getByIdServiceController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const serviceService = new ServiceService();
    return serviceResponse({
      data: await serviceService.getByIdService(id),
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
