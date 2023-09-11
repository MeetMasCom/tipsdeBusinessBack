import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { ChatService } from "./service";
import { ChatI } from "../../interfaces/chat.interface";

export const getMessaguesController = async (req: Request, resp: Response) => {
    try {
        const userTo = req.query.userTo as string;
        const userFrom = req.query.userFrom as string;
        const chatService = new ChatService();
        return serviceResponse({
            data: await chatService.getMessagues(userTo, userFrom),
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

export const getAllUsersMessaguesController = async (req: Request, resp: Response) => {
    try {
        const userId = req.query.id as string;
        const chatService = new ChatService();
        return serviceResponse({
            data: await chatService.getAllUsersMessagues(userId),
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

export const saveMessaguesController = async (req: Request, resp: Response) => {
    try {
        const chatService = new ChatService();
        const data = req.body as ChatI;
        return serviceResponse({
            data: await chatService.saveMessagues(data),
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
