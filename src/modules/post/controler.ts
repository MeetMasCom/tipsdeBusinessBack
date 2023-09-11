import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { PostI } from "../../interfaces/post.interface";
import { PostService } from "./service";
import { postModelMongo } from "./model";
import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, Schema, Types,model } from "mongoose";
import { UserI } from "../../interfaces/user.interface";

export const createPostUserController = async (req: Request, resp: Response) => {
  try {

    const newPost=req.body as PostI
    const userService = new PostService();
    return serviceResponse({
      data: await userService.savePost(newPost),
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

export const getPostByIdUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getPostByIdUser(id),
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

export const getPostUserandProfileController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getPostUserProfile(id),
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


export const getPostByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getPostById(id),
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


export const getPostByTypeController = async (req: Request, resp: Response) => {
  try {
    const { id } = req.params;
   
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getPostByType(id),
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

export const getPostProfileUserController = async (req: Request, resp: Response) => {
  try {
    const id = req.query.id as string;
    const profile=req.query.profile as string;
    
    const userService = new PostService();
    return serviceResponse({
      data: await userService.getPostProfileUserId(id,profile),
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


export const updateProfileController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;    
    
    const payload = req.body as UserI;
    
    const postService = new PostService();
    return serviceResponse({
      data: await postService.updateProfile(id,payload),
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

export const getCountPostUserProfileController = async (req: Request, resp: Response) => {
  try {

    const id = req.params.id;
    const profile = req.query.profile as string;
   
    const postService = new PostService();
    return serviceResponse({
      data: await postService.getCountPost(id,profile),
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


export const deletePostController = async (req: Request, resp: Response) => {
  try {

    const id = req.params.id;   
    const postService = new PostService();
    return serviceResponse({
      data: await postService.deletePost(id),
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


