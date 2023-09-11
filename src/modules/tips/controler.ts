import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { TopicI } from "../../interfaces/topic.interface";
import { TipsService } from "./service";
import { tipsModelMongo } from "./model";
import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, Schema, Types,model } from "mongoose";
import { TipsI } from "../../interfaces/tips.interface";

export const createTipsController = async (req: Request, resp: Response) => {
  try {

    const payload = req.body as TipsI;
   // const newTopic={user_id,title,description,userCourse,imagen,dateView,video} as TipsI;

    const userService = new TipsService();
    return serviceResponse({
      data: await userService.saveTips(payload),
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

export const getTipsByIdUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new TipsService();
    return serviceResponse({
      data: await userService.getTipsByIdUser(id),
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

export const getTipsByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new TipsService();
    return serviceResponse({
      data: await userService.getTipsById(id),
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

export const getAllTipsController = async (req: Request, resp: Response) => {
  try {
    const userService = new TipsService();
    return serviceResponse({
      data: await userService.getAllTips(),
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

export const updateTipsController = async (req: Request, resp: Response) => {
  try {
    const { user_id,title,description,userCourse,imagen,dateView } = req.body;
    const newTopic={user_id,title,description,userCourse,imagen,dateView,video: req.file?.path} as TipsI;
    //const userService = new TipsService();
    //const updateBilletera = req.body as unknown as TipsI;
    const id = req.params.id;
    const billeteraService = new TipsService();
    return serviceResponse({
      data: await billeteraService.updateTips(id, newTopic),
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

