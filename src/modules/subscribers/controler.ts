import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { SubscribersI } from "../../interfaces/subscribers.interface";
import { SubscribersService } from "./service";
import { Connection, Schema,model,Mongoose,Types} from "mongoose";
var mongoose = require('mongoose');

export const createSubscribersController = async (req: Request, resp: Response) => {
  try {

    const payload=req.body as SubscribersI;
    console.log(payload);
    const commentService = new SubscribersService();
    return serviceResponse({
      data: await commentService.save(payload),
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

export const getByIdCourseSuscriptorsController = async (req: Request, resp: Response) => {
  try {
    var id = new mongoose.Types.ObjectId(req.query.fad);
    const commentService = new SubscribersService();
    return serviceResponse({
      data: await commentService.getByIdFad(id),
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

export const getSubscribeStudentController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const student = req.query.student;
    const userService = new SubscribersService();
    return serviceResponse({
      data: await userService.getSubcribeStudent(id,student),
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