import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { StarI} from "../../interfaces/star.interface";
import { StarService } from "./service";
var mongoose = require('mongoose');

 export const createStartController = async (req: Request, resp: Response) => {
  try {
  
    const newStart = {
      user_id: req.body.user_id,
      fad_id: req.body.fad_id,
      qualification: req.body.qualification
  } as unknown as StarI;

    
    const startService = new StarService();
    return serviceResponse({
      data: await startService.save(newStart),
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

//estrellas por usuario
export const getByIdUserStartController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const starService = new StarService();
    return serviceResponse({
      data: await starService.getByIdUser(id),
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

//todas las estrellas por publicacion
export const getAllByIdFadStartController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const startService = new StarService();
    return serviceResponse({
      data: await startService.getByIdAll(id),
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


//estrellas por usuario y publicacion
export const getStarUserFadId = async (req: Request, resp: Response) => {
  try {
    var user = new mongoose.Types.ObjectId(req.query.user);
    var fad =new mongoose.Types.ObjectId(req.query.fad)
    const startService = new StarService();
    return serviceResponse({
      data: await startService.getStarUserFadId(user,fad),
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

export const getByIdStarController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const starService = new StarService();
    return serviceResponse({
      data: await starService.getById(id),
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

export const UpdateStar = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body as StarI;
    console.log("id",id);
    console.log("nueva estrella",payload);
    const starService = new StarService();
    return serviceResponse({
      data: await starService.update(id, payload),
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
