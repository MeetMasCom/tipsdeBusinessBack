import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { AdsI, ReviewAdsI, VisitAdsI } from "../../interfaces/ads.interface";
import { AdsService } from "./service";

export const createAdsController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as AdsI;
    const userService = new AdsService();
    return serviceResponse({
      data: await userService.create(payload),
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

//AdsI no validados
export const getAllsAdsController = async (req: Request, resp: Response) => {
  try {
    const adsService = new AdsService();
    return serviceResponse({
      data: await adsService.getAll(),
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


export const getAdsController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id as string;
    const adsService = new AdsService();
    return serviceResponse({
      data: await adsService.getById(id),
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

export const updateStateAdsController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body as ReviewAdsI;
    const adsService = new AdsService();
    return serviceResponse({
      data: await adsService.updateStateAds(id, payload),
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

export const deleteAdsController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const adsService = new AdsService();
    return serviceResponse({
      data: await adsService.deleteById(id),
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

export const updateAdsByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id as string;
    const payload = req.body as AdsI;
    const adsService = new AdsService();
    return serviceResponse({
      data: await adsService.updateAdsById(id, payload),
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

export const toogleAdsByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id as string;
    const payload = req.body as AdsI;
    const adsService = new AdsService();
    return serviceResponse({
      data: await adsService.onOffAdsById(id, payload),
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


export const getAdsForUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id as string;
    const adsService = new AdsService();
    return serviceResponse({
      data: await adsService.getAdsForUser(id),
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

export const visitAdsController = async (req: Request, resp: Response) => {
  try {
    const data = req.body as VisitAdsI;
    const adsService = new AdsService();
    return serviceResponse({
      data: await adsService.visitAds(data),
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



