import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { QuestionI } from "../../interfaces/question.interface";
import { QuestionService } from "./service";
import { questionModelMongo } from "./model";
import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, Schema, Types,model } from "mongoose";
import { UserI } from "../../interfaces/user.interface";

export const createQuestionController = async (req: Request, resp: Response) => {
  try {

    const payload= req.body;
    const userService = new QuestionService();
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

export const getQuestionByIdSubPromptsController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new QuestionService();
    return serviceResponse({
      data: await userService.getQuestionByIdSubPrompts(id),
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

export const getQuestionByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new QuestionService();
    return serviceResponse({
      data: await userService.getQuestionById(id),
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

