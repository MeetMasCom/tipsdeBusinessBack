import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RoomI } from "../../interfaces/room.interface";
import { CuponService } from "./service";
import { CuponI } from "../../interfaces/cupon.interface";

 export const createCuponController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as CuponI;
    const spamService = new CuponService();
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
    const spamService = new CuponService();
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

export const getByIdCuponController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const spamService = new CuponService();
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
    const spamService = new CuponService();
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
    const payload=req.body as unknown as CuponI;
    console.log(id);
    console.log(payload);
    const spamService = new CuponService();
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
    const payload=req.body as unknown as CuponI;
    const adminService = new CuponService();
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


export const getCuponActivoUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const spamService = new CuponService();
    return serviceResponse({
      data: await spamService.getCuponActivoUser(id),
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

export const restarCuponController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload=req.body as unknown as CuponI;
    const spamService = new CuponService();
    return serviceResponse({
      data: await spamService.restarCupon(id,payload),
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

export const getCuponCodigoController = async (req: Request, resp: Response) => {
  try {
    const codigo = req.params.codigo as unknown as number;
    console.log(codigo);
    const spamService = new CuponService();
    return serviceResponse({
      data: await spamService.getByCodigo(codigo),
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
