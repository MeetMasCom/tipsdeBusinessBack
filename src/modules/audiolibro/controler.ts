import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { TopicI } from "../../interfaces/topic.interface";
import { AudioLibroService } from "./service";
import { audiolibroSchema } from "./model";
import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, Schema, Types,model } from "mongoose";
import { AudioLibroI } from "../../interfaces/audiolibro.interface";

export const createAudioLibroController = async (req: Request, resp: Response) => {
  try {

    const payload = req.body as AudioLibroI;
   // const newTopic={user_id,title,description,userCourse,imagen,dateView,video} as TipsI;
   console.log(payload);
    const userService = new AudioLibroService();
    return serviceResponse({
      data: await userService.saveAudioLibro(payload),
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

export const getAudioLibroByIdUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new AudioLibroService();
    return serviceResponse({
      data: await userService.getAudioLibroByIdUser(id),
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

export const getAudioLibroByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new AudioLibroService();
    return serviceResponse({
      data: await userService.getAudioLibroById(id),
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

export const getAllAudioLibroController = async (req: Request, resp: Response) => {
  try {
    const userService = new AudioLibroService();
    return serviceResponse({
      data: await userService.getAllAudioLibro(),
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

export const updateAudioLibroController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as AudioLibroI;
   // const newTopic={user_id,title,description,userCourse,imagen,dateView,video} as AudioLibroI;
    //const userService = new TipsService();
    //const updateBilletera = req.body as unknown as TipsI;
    //console.log(newTopic);
    const id = req.params.id;
    const billeteraService = new AudioLibroService();
    return serviceResponse({
      data: await billeteraService.updateAudioLibro(id, payload),
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

