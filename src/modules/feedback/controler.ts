import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { FeedBackService } from "./service";
import { FeedBackI } from "../../interfaces/feedback.interface";

 export const createFeedBackController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as FeedBackI;
    console.log(payload);
    const feedbackService = new FeedBackService();
    return serviceResponse({
      data: await feedbackService.save(payload),
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

export const getFeedbackController = async (req: Request, resp: Response) => {
  try {
    const feedbackService = new FeedBackService();
    return serviceResponse({
      data: await feedbackService.getFeedBack(),
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




