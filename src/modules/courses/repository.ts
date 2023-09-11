import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, ObjectId, Schema, Types, model } from "mongoose";
import { CourseI, CourseUserI } from "../../interfaces/courses.interface";
import { courseModelMongo, courseUserModelMongo } from "./model";
import { UserI } from "../../interfaces/user.interface";
import { userModelMongo } from "../user/model";
import { count } from "console";

export class PostRepository {
  async saveCourse(data: CourseI) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await courseModelMongo(cnxMongo);
      const response = await postModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as unknown as CourseI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getCourseByIdUser(id: string,tipo:number) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await courseModelMongo(cnxMongo);
      const response = await postModel
        .find({
          $and: [
            { user_id: id },
            { type: tipo }
          ]
        })
        
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as CourseI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getCourseById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await courseModelMongo(cnxMongo);
      const response = await postModel
        .find({_id: id })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as CourseI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  
  async getAllCourses() {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await courseModelMongo(cnxMongo);
      const response = await postModel
        .find({
          type: 1,
          state: 1
        })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as CourseI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAllInLive() {
    try {
      const fecha= new Date();
      const cnxMongo = await connectionMongo();
      const postModel = await courseModelMongo(cnxMongo);
      const response = await postModel
      .find({
        $and: [
          { type: 2 },
          { fecha: { $gte: fecha } },
        ]
      })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as CourseI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getCourseByCategoria(cat: number,tipo:number) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await courseModelMongo(cnxMongo);
      const response = await postModel
        .find({
          $and: [
            { categoria: cat },
            { type: tipo }
          ]
        })
        
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as CourseI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getCourseByUser(cat: number,tipo:number) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await courseModelMongo(cnxMongo);
      const response = await postModel
        .find({
          $and: [
            { categoria: cat },
            { type: tipo }
          ]
        })
        
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as CourseI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getCourseByUserStudent(user: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await courseModelMongo(cnxMongo);
      const response = await postModel.aggregate([
        {
          $match: { user_id: user },
        },
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "user",
          },
        }
      ])
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as CourseI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getTopCourses() {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await courseModelMongo(cnxMongo);
      const response = await postModel
        .find({type:1})
        .sort({ createdAt: -1 }).limit(15)
        .exec();
      await cnxMongo.close();
      return response as unknown as CourseI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipModel = await courseModelMongo(cnxMongo);
      const response = await membershipModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as CourseI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async saveCourseUser(data: CourseUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipUserModel = await courseUserModelMongo(cnxMongo);
      const response = await membershipUserModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as CourseUserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async verifyCourseUser(id: string,idC:string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await courseUserModelMongo(cnxMongo);
      const response = await postModel
        .find({userId: id },{courseId:idC})
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as CourseUserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async updateState(id: string, data: CourseI) {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await courseModelMongo(cnxMongo);

      const response = await adminModel
        .updateOne({ _id: id }, { $set: data })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo cambiar el estado");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
