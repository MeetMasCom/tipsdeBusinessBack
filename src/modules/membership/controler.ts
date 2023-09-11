import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { MembershipService } from "./service";
import { MembershipI, MembershipUserI } from "../../interfaces/membership";


export const getMembershipController = async (req: Request, resp: Response) => {
  try {
    const membershipService = new MembershipService();
    return serviceResponse({
      data: await membershipService.getAllMembership(),
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


export const getMembershipByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const membershipService = new MembershipService();
    return serviceResponse({
      data: await membershipService.getById(id),
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

export const createMembershipController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as MembershipI;
    const membershipService = new MembershipService();
    return serviceResponse({
      data: await membershipService.save(payload),
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

export const updateMembershipController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const payload = req.body as MembershipI;
    const membershipService = new MembershipService();
    return serviceResponse({
      data: await membershipService.update(id, payload),
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


export const getMembershipUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const membershipService = new MembershipService();
    return serviceResponse({
      data: await membershipService.getMembershipUserById(id),
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

export const createMembershipUserController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as MembershipUserI;
    const membershipService = new MembershipService();
    return serviceResponse({
      data: await membershipService.saveMembershipUser(payload),
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

export const deleteMembershipUserController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const membershipService = new MembershipService();
    return serviceResponse({
      data: await membershipService.deleteMembershipUser(id),
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