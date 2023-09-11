import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { CommentI } from "../../interfaces/comment.interface";
import { CommentService } from "./service";
import { Connection, Schema,model,Mongoose,Types} from "mongoose";
var mongoose = require('mongoose');

export const createCommentController = async (req: Request, resp: Response) => {
  try {

    const payload=req.body as CommentI;
    console.log(payload);
    const commentService = new CommentService();
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

export const getByIdFadCommentController = async (req: Request, resp: Response) => {
  try {
    var id = new mongoose.Types.ObjectId(req.query.fad);
    const commentService = new CommentService();
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