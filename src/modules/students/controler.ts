import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { StudentI } from "../../interfaces/student.interface";
import { StudentService } from "./service";

 export const createStudentCourseController = async (req: Request, resp: Response) => {
  try {
    
    const payload = req.body as unknown as StudentI;
    const likeService = new StudentService();
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

export const getStudentByIdCourseController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const likeService = new StudentService();
    return serviceResponse({
      data: await likeService.getByIdCourse(id),
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


export const getValidStudentController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const student = req.query.student;
    const userService = new StudentService();
    return serviceResponse({
      data: await userService.getValidStudent(id,student),
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
    const user = req.params.id;
    const userService = new StudentService();
    return serviceResponse({
      data: await userService.getCourseByUser(user),
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


export const getCourseByStudentController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new StudentService();
    return serviceResponse({
      data: await userService.getCourseByStudent(id),
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
    const cat = req.query.cat as string;
    const student = req.params.idS;
    const userService = new StudentService();
    return serviceResponse({
      data: await userService.getCourseByCategoria(student,cat),
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