import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RoomI } from "../../interfaces/room.interface";
import { LikeService } from "./service";
import { LikeI } from "../../interfaces/like.interface";

 export const createLikeController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as LikeI;
    const likeService = new LikeService();
    return serviceResponse({
      data: await likeService.save(payload),
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

export const getByIdLikeController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const likeService = new LikeService();
    return serviceResponse({
      data: await likeService.getByIdLike(id),
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

export const getUserLikeController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const likeService = new LikeService();
    return serviceResponse({
      data: await likeService.getUserLike(id),
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

export const updateLikeController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const likeService = new LikeService();
    return serviceResponse({
      data: await likeService.updateLike(id),
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


export const getMyLikesController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const likeService = new LikeService();
    return serviceResponse({
      data: await likeService.getMyLikes(id),
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

export const verificarLikeController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const idL=req.params.idL;
    console.log("id",id);
    console.log("id",idL);
    const likeService = new LikeService();
    return serviceResponse({
      data: await likeService.verificarLike(id,idL),
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



