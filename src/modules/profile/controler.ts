import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { ProfileI } from "../../interfaces/profile.interface";
import { ProfileService } from "./service";
import { profileModelMongo } from "./model";
import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { UserI } from "../../interfaces/user.interface";

export const createProfileController = async (req: Request, resp: Response) => {
  try {

    const payload=req.body  as ProfileI;

    const profileService = new ProfileService();
    return serviceResponse({
      data: await profileService.saveProfile(payload),
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



export const getUserProfileIdController = async (req: Request, resp: Response) => {
  try {
    const id=req.params.id;
    const payload=req.body.profile;
    const profileService = new ProfileService();
    return serviceResponse({
      data: await profileService.getProfileId(id,payload),
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


export const getAllProfileController = async (req: Request, resp: Response) => {
  try {
    const profileService = new ProfileService();
    return serviceResponse({
      data: await profileService.getAllProfile(),
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


export const addProfileController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;       
    const payload = req.body as UserI;
    const postService = new ProfileService();
   
    return serviceResponse({
      data: await postService.addProfile(id,payload),
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

export const addSocialNController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;       
    const payload = req.body as UserI;
    const postService = new ProfileService();
    return serviceResponse({
      data: await postService.addSocialN(id,payload),
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

export const getProfileByIdController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;  
    const profileService = new ProfileService();
    return serviceResponse({
      data: await profileService.getProfileById(id),
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


export const addFollowersController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;       
    const payload = req.body as UserI;
    
    const postService = new ProfileService();
    return serviceResponse({
      data: await postService.addFollowers(id,payload),
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


export const addFollowingsController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;       
    const payload = req.body as UserI;
    
    const postService = new ProfileService();
    return serviceResponse({
      data: await postService.addFollowings(id,payload),
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


