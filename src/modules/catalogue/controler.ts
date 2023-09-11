import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { CatalogueI } from "../../interfaces/catalogue.interface";
import { CatalogueService } from "./service";

export const getAllCatalogueController = async (
  req: Request,
  resp: Response
) => {
  try {
    const catalogueService = new CatalogueService();
    return serviceResponse({
      data: await catalogueService.getAll(),
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

export const getOptionsCatalogueController = async (
  req: Request,
  resp: Response
) => {
  try {
    const code = req.query.code as string;    
    const catalogueService = new CatalogueService();
    return serviceResponse({
      data: await catalogueService.getByOptions(code),
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

export const addCatalogueController = async (req: Request, resp: Response) => {
  try {
    const data = req.body as CatalogueI;
    const catalogueService = new CatalogueService();
    return serviceResponse({
      data: await catalogueService.create(data),
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
