import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RoomI } from "../../interfaces/room.interface";
import { RoomService } from "./service";

 export const createRoomController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as RoomI;
    console.log("payload",payload);
    const roomService = new RoomService();
    return serviceResponse({
      data: await roomService.save(payload),
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

export const getByIdHotelRoomController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const roomService = new RoomService();
    return serviceResponse({
      data: await roomService.getByIdHotelRoom(id),
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

export const getRoomByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const roomService = new RoomService();
    return serviceResponse({
      data: await roomService.getRoomById(id),
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


export const createImageRoomController = async (req: Request, resp: Response) => {
  try {
    const image=req.file?.path;   
   
    return serviceResponse({
      data: image,
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

export const AddPriceRoomController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const payload = req.body as RoomI;
    const roomService = new RoomService();
    return serviceResponse({
      data: await roomService.addPriceRoom(id, payload),
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

export const UpdatePriceRoomController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    console.log("id room",id);
    const payload = req.body as RoomI;
    const roomService = new RoomService();
    console.log(payload);
    return serviceResponse({
      data: await roomService.updatePriceRoom(id, payload),
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