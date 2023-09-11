import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { AnswerI, ModuleI,TestI } from "../../interfaces/modules.interface";
import { ModuleService } from "./service";
import { moduleModelMongo } from "./model";
import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, Schema, Types,model } from "mongoose";
import { UserI } from "../../interfaces/user.interface";

export const createModuleController = async (req: Request, resp: Response) => {
  try {

    const newPost=req.body as ModuleI
    const userService = new ModuleService();
    return serviceResponse({
      data: await userService.saveModule(newPost),
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

export const getModuleByIdCourseController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new ModuleService();
    return serviceResponse({
      data: await userService.getModuleByIdCourse(id),
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

export const getModuleByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new ModuleService();
    return serviceResponse({
      data: await userService.getModuleById(id),
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

export const getModulesAnTopicController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new ModuleService();
    return serviceResponse({
      data: await userService.getModulesAndTopic(id),
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



//TEST

export const createTestController = async (req: Request, resp: Response) => {
  try {

    const newPost=req.body as TestI
    const userService = new ModuleService();
    return serviceResponse({
      data: await userService.saveTest(newPost),
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


export const getTestByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    console.log(id);
    const userService = new ModuleService();
    return serviceResponse({
      data: await userService.getTestById(id),
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


export const getTestByIdModuleController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    console.log(id);
    const userService = new ModuleService();
    return serviceResponse({
      data: await userService.getTestByIdModule(id),
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
//answer
export const createAnswerController = async (req: Request, resp: Response) => {
  try {

    const newPost=req.body as AnswerI
    console.log(newPost);
    const userService = new ModuleService();
    return serviceResponse({
      data: await userService.saveAnswer(newPost),
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