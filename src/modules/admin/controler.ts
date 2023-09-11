import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { AdminI,LoginAdminI } from "../../interfaces/admin.interface";
import { AdminService } from "./service";
import {
  UserValidOtpI,
} from "../../interfaces/user.interface";
import { UserService } from "../user/service";

export const createAdminController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as AdminI;
    const adminService = new AdminService();
    return serviceResponse({
      data: await adminService.save(payload),
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


export const loginController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as LoginAdminI;
    const adminService = new AdminService();
    return serviceResponse({
      data: await adminService.login(payload),
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

export const otpController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as UserValidOtpI;
    const adminService = new AdminService();
    return serviceResponse({
      data: await adminService.validOpt(payload),
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


export const getAllAdminController = async (req: Request, resp: Response) => {
  try {
    const adminService = new AdminService();
    return serviceResponse({
      data: await adminService.getAll(),
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

export const getByIdAdminController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const adminService = new AdminService();
    return serviceResponse({
      data: await adminService.getById(id),
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

export const getAdminByRolController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const adminService = new AdminService();
    return serviceResponse({
      data: await adminService.getByRol(id),
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

export const updateAdminController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload=req.body as unknown as AdminI;
    const adminService = new AdminService();
    return serviceResponse({
      data: await adminService.updateAdmin(id,payload),
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

export const updateStateController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload=req.body as unknown as AdminI;
    const adminService = new AdminService();
    return serviceResponse({
      data: await adminService.updateState(id,payload),
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


export const getVerifyTeacher = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.query.typeUser as string;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getVerifyTeacher(id),
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