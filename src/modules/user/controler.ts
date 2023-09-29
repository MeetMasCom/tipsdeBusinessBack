import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import {
  LoginUserI,
  ResetPasswordI,
  UserExtraI,
  UserI,
  UserValidOtpI,
} from "../../interfaces/user.interface";
import { UserService } from "./service";
import { PostI } from "../../interfaces/post.interface";
import { SearchUsers } from "../../interfaces/user.interface";

export const getUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getById(id),
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

export const getCountUserController = async (req: Request, resp: Response) => {
  try {
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getCountUser(),
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

export const getUserValidateController = async (
  req: Request,
  resp: Response
) => {
  try {
    const search = req.params.search;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getUserValidate(search),
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

export const createUserController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as UserI;
    console.log(payload);
    const userService = new UserService();
    return serviceResponse({
      data: await userService.save(payload),
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
    const payload = req.body as unknown as LoginUserI;
    console.log(payload);
    const userService = new UserService();
    return serviceResponse({
      data: await userService.login(payload),
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
    const userService = new UserService();
    return serviceResponse({
      data: await userService.validOpt(payload),
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

export const updateUserBasicController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const payload = req.body as UserExtraI;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.updateBasic(id, payload),
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

export const updateUserAddressController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const payload = req.body as UserExtraI;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.updateAddress(id, payload),
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

export const updateUserMatchController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const payload = req.body as UserExtraI;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.updateMatch(id, payload),
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

export const logoutController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.logout(id),
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

export const recoverUsernameController = async (
  req: Request,
  resp: Response
) => {
  try {
    const mail = req.body.mail;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.recoverUsername(mail),
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

export const recoverPasswordController = async (
  req: Request,
  resp: Response
) => {
  try {
    const username = req.body.username;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.recoverPassword(username),
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

export const resetPasswordController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as ResetPasswordI;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.resetPassword(payload),
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

export const getByIdUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getByIdUser(id),
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

export const getAllUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getAllUser(),
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

export const getAllUserGenderController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getUserGender(id),
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

export const updateSocialsNController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const payload = req.body as UserExtraI;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.updateMatch(id, payload),
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

export const searchUsersController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as SearchUsers;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getAllUserSearch(payload),
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

export const getUserOnlineController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getUserOnline(id),
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

export const getUserActiveController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getUserActive(id),
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


export const updateTypeUserController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const payload = req.body as UserExtraI;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.updateTypeUser(id, payload),
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


export const updateAgreementsController = async (

  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const agreements = req.body.agreements;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.updateAgreements(id, agreements),
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

export const updateCupoController = async (
  req: Request,
  resp: Response
) => {
  try {
    const payload = req.body as UserExtraI;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.updateCupo(payload),
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

export const getCupoLimiteController = async (
  req: Request,
  resp: Response
) => {
  try {
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getCupoLimite(),
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

export const getUsersincupo = async (
  req: Request,
  resp: Response
) => {
  try {
    const userService = new UserService();
    return serviceResponse({
      data: await userService.usersincupo(),
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



export const getReferUserController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const userService = new UserService();
    return serviceResponse({
      data: await userService.getReferUser(id),
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
