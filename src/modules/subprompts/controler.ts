import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RoomI } from "../../interfaces/room.interface";
import { SubPromptSService } from "./service";
import { SubpromptsI } from "../../interfaces/subprompts.interface";

 export const createSubPromptsController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as SubpromptsI;
    const likeService = new SubPromptSService();
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


export const getSubPromptsByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const likeService = new SubPromptSService();
    return serviceResponse({
      data: await likeService.getSubPromptsById(id),
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


