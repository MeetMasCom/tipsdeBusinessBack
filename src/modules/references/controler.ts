import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { ReferencesI,ReferencesTipsI } from "../../interfaces/references.interface";
import { Referenceservice } from "./service";
import { Connection, Schema,model,Mongoose,Types} from "mongoose";
var mongoose = require('mongoose');

export const createReferenceController = async (req: Request, resp: Response) => {
  try {

    const payload=req.body as ReferencesI;
    console.log(payload);
    const commentService = new Referenceservice();
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


export const getAllReferencesController = async (req: Request, resp: Response) => {
  try {
    var id = new mongoose.Types.ObjectId(req.query.id);
    const commentService = new Referenceservice();
    return serviceResponse({
      data: await commentService.getAllReferences(),
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

export const getMyReferencesController = async (req: Request, resp: Response) => {
  try {
    var id = new mongoose.Types.ObjectId(req.query.id);
    const commentService = new Referenceservice();
    return serviceResponse({
      data: await commentService.getMyReferences(id),
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


export const getByIdCourseReferencesController = async (req: Request, resp: Response) => {
  try {
    var id = new mongoose.Types.ObjectId(req.query.id);
    const commentService = new Referenceservice();
    return serviceResponse({
      data: await commentService.getByIdCourse(id),
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

export const createReferenceTipsController = async (req: Request, resp: Response) => {
  try {

    const payload=req.body as ReferencesTipsI;
    console.log(payload);
    const commentService = new Referenceservice();
    return serviceResponse({
      data: await commentService.saveReferencesTips(payload),
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

export const getByIdTipReferencesController = async (req: Request, resp: Response) => {
  try {
    var id = new mongoose.Types.ObjectId(req.query.id);
    const commentService = new Referenceservice();
    return serviceResponse({
      data: await commentService.getByIdTips(id),
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