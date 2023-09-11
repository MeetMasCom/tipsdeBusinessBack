import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RoomI } from "../../interfaces/room.interface";
import { NotificationService } from "./service";
import { NotificationI } from "../../interfaces/notificacion.inteface";

 export const createNotificationController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as NotificationI;
    const notificacionService = new NotificationService();
    return serviceResponse({
      data: await notificacionService.save(payload),
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

export const getByIdUserNotificationController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const notificacionService = new NotificationService();
    return serviceResponse({
      data: await notificacionService.getByIdUser(id),
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

export const getUserLikeController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const notificacionService = new NotificationService();
    return serviceResponse({
      data: await notificacionService.getUserLike(id),
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

export const updateSateController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const notificacionService = new NotificationService();
    return serviceResponse({
      data: await notificacionService.updateState(id),
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



