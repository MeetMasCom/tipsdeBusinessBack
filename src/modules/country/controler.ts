import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { CountryService } from "./service";

export const getAllCountryController = async (req: Request, resp: Response) => {
  try {
    const countryService = new CountryService();

    return serviceResponse({
      data: await countryService.getAll(),
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
