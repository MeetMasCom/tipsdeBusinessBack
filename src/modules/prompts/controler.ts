import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { RoomI } from "../../interfaces/room.interface";
import { PromptsService } from "./service";
import { PromptsI } from "../../interfaces/prompts.interface";

 export const createPromptsController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as PromptsI;
    const likeService = new PromptsService();
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

export const getMyPromptsController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const likeService = new PromptsService();
    return serviceResponse({
      data: await likeService.getMyPrompts(id),
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


export const getPromptsByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const likeService = new PromptsService();
    return serviceResponse({
      data: await likeService.getPromptsById(id),
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

export const getAllPromptsController = async (req: Request, resp: Response) => {
  try {
    const likeService = new PromptsService();
    return serviceResponse({
      data: await likeService.getAllPrompts(),
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


export const updatePromptController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const payload = req.body as PromptsI;
    const userService = new PromptsService();
    return serviceResponse({
      data: await userService.updatePrompt(id, payload),
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


