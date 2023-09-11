import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { CourseI,CourseUserI } from "../../interfaces/courses.interface";
import { PostService } from "./service";
import { courseModelMongo } from "./model";
import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, Schema, Types,model } from "mongoose";
import { UserI } from "../../interfaces/user.interface";

export const createCourseController = async (req: Request, resp: Response) => {
  try {

    const newPost=req.body as CourseI
    const userService = new PostService();
    return serviceResponse({
      data: await userService.saveCourse(newPost),
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

export const getCourseByIdUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const tipo = req.query.tipo;
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getCourseByIdUser(id,tipo),
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

export const getCourseByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getCourseById(id),
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

export const getAllCoursesController = async (req: Request, resp: Response) => {
  try {
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getAllCourses(),
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

export const getAllInLiveController = async (req: Request, resp: Response) => {
  try {
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getAllInLive(),
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

export const getCourseByCategoriaController = async (req: Request, resp: Response) => {
  try {
    const cat = req.query.cat;
    const tipo = req.query.tipo;
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getCourseByCategoria(cat,tipo),
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

export const getCourseByUserController = async (req: Request, resp: Response) => {
  try {
    const cat = req.query.cat;
    const tipo = req.query.tipo;
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getCourseByUser(cat,tipo),
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

export const getCourseByUserStudent = async (req: Request, resp: Response) => {
  try {
    const user = req.query.user as string;
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getCourseByUserStudent(user),
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


export const getTopCoursesController = async (req: Request, resp: Response) => {
  try {
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getTopCourses(),
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


export const buyCourseUserController = async (req: Request, resp: Response) => {
  try {
    const payload = req.body as unknown as CourseUserI;
    console.log(payload);
    const membershipService = new PostService();
    return serviceResponse({
      data: await membershipService.saveBuyCourse(payload),
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

export const verifyCourseUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const idC=req.query.idC as string;
    const membershipService = new PostService();
    return serviceResponse({
      data: await membershipService.verifyCourseUser(id,idC),
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


export const updateStateController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload=req.body as unknown as CourseI;
    const adminService = new PostService();
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


 