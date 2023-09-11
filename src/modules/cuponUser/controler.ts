import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RoomI } from "../../interfaces/room.interface";
import { CuponUserService } from "./service";
import { CuponUserI } from "../../interfaces/cuponUser.interface";

 export const createCuponUserController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as CuponUserI;
    const spamService = new CuponUserService();
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

export const getAllCuponController = async (req: Request, resp: Response) => {
  try {
    const spamService = new CuponUserService();
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

export const getByIdAdminCuponController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const spamService = new CuponUserService();
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



export const getUserCuponController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const spamService = new CuponUserService();
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

export const updateCuponController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload=req.body as unknown as CuponUserI;
    console.log(id);
    console.log(payload);
    const spamService = new CuponUserService();
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

export const updateStateController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload=req.body as unknown as CuponUserI;
    const adminService = new CuponUserService();
    return serviceResponse({
      data: await adminService.updateState(id,payload),
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


export const deleteCupoUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    console.log(id);
    const adminService = new CuponUserService();
    return serviceResponse({
      data: await adminService.deleteCupoUser(id),
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




