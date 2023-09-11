import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { TypeRoomI } from "../../interfaces/typeRoom.interface";
import { TypeRoomService } from "./service";

 export const createTypeRoomController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as TypeRoomI;
    console.log(payload);
    const typeService = new TypeRoomService();
    return serviceResponse({
      data: await typeService.save(payload),
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

export const getAllTypeController = async (req: Request, resp: Response) => {
  try {
    const typeService = new TypeRoomService();
    return serviceResponse({
      data: await typeService.getAll(),
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

export const getByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const typeService = new TypeRoomService();
    return serviceResponse({
      data: await typeService.getById(id),
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
    const typeService = new TypeRoomService();
    return serviceResponse({
      data: await typeService.getByIdHotel(id),
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
