import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RoomI } from "../../interfaces/room.interface";
import { PackageService } from "./service";
import { PackageI } from "../../interfaces/package.interface";

 export const createPackageController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as PackageI;
    const paqueteService = new PackageService();
    return serviceResponse({
      data: await paqueteService.save(payload),
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

export const getAllPackageController = async (req: Request, resp: Response) => {
  try {
    const paqueteService = new PackageService();
    return serviceResponse({
      data: await paqueteService.getAll(),
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

export const getByIdPackageController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const paqueteService = new PackageService();
    return serviceResponse({
      data: await paqueteService.getById(id),
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

export const getPackageActivosController = async (req: Request, resp: Response) => {
  try {
    const paqueteService = new PackageService();
    return serviceResponse({
      data: await paqueteService.getActivos(),
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


export const updatePackageController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload=req.body as unknown as PackageI;
    const paqueteService = new PackageService();
    return serviceResponse({
      data: await paqueteService.updatePackage(id,payload),
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

export const updateStateController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload=req.body as unknown as PackageI;
    const paqueteService = new PackageService();
    return serviceResponse({
      data: await paqueteService.updateState(id,payload),
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



