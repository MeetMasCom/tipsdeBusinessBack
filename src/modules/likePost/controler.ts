import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RoomI } from "../../interfaces/room.interface";
import { LikePostService } from "./service";
import { LikePostI } from "../../interfaces/likePost.interface";

 export const createLikePostController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as LikePostI;
    const likeService = new LikePostService();
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


export const getLikePostandUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const idP=req.params.idP;
    const likeService = new LikePostService();
    return serviceResponse({
      data: await likeService.likePostUser(id,idP),
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

export const deleteLikePost = async (req: Request, resp: Response) => {
  try {
    const idP = req.params.id;
    const idUL=req.body.idUL;
    console.log("id publicacion",idP);
    console.log("id user like",idUL);
    const likeService = new LikePostService();
    return serviceResponse({
      data: await likeService.deleteLikePost(idP,idUL),
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

export const countLikePost = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const likeService = new LikePostService();
    return serviceResponse({
      data: await likeService.countLikePost(id),
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


