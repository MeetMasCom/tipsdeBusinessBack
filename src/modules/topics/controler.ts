import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { TopicI } from "../../interfaces/topic.interface";
import { TopicService } from "./service";
import { topicModelMongo } from "./model";
import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, Schema, Types,model } from "mongoose";
import { UserI } from "../../interfaces/user.interface";

export const createTopicController = async (req: Request, resp: Response) => {
  try {

    const payload = req.body as TopicI;
    const userService = new TopicService();
    return serviceResponse({
      data: await userService.saveTopic(payload),
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

export const getTopicByIdModuleController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new TopicService();
    return serviceResponse({
      data: await userService.getTopicByIdModule(id),
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

export const getTopicByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new TopicService();
    return serviceResponse({
      data: await userService.getTopicById(id),
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

