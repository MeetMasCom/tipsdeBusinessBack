import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, ObjectId, Schema, Types, model } from "mongoose";
import { AnswerI, ModuleI, TestI } from "../../interfaces/modules.interface";
import { moduleModelMongo, testModelMongo, answerModelMongo} from "./model";
import { UserI } from "../../interfaces/user.interface";
import { userModelMongo } from "../user/model";
import { count } from "console";

export class ModuleRepository {
  async saveModule(data: ModuleI) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await moduleModelMongo(cnxMongo);
      const response = await postModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as unknown as ModuleI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getModuleByIdCourse(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await moduleModelMongo(cnxMongo);
      const response = await postModel
        .find({ course_id: id })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as ModuleI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getModuleById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await moduleModelMongo(cnxMongo);
      const response = await postModel
        .find({ _id: id })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as ModuleI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getModulesAndTopic(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const postModel = await moduleModelMongo(cnxMongo);
      const response = await postModel.
      aggregate([
        {
          $match: { course_id: objectId },
        },
        {
          $lookup: {
            from: "topic",
            localField: "_id",
            foreignField: "module_id",
            as: "topic",
          },
        },
        {
          $lookup: {
            from: "course",
            localField: "course_id",
            foreignField: "_id",
            as: "course",
          },
        },
        {
          $lookup: {
            from: "test",
            localField: "_id",
            foreignField: "module_id",
            as: "test",
          },
        }
      ])
        .sort({ createdAt: 1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as ModuleI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
 

  async saveTest(data: TestI) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await testModelMongo(cnxMongo);
      const response = await postModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as unknown as TestI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getTestByIdModule(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const postModel = await testModelMongo(cnxMongo);
      const response = await postModel.find({module_id:objectId})
    
        .sort({ createdAt: 1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as TestI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  async getTestById(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const postModel = await testModelMongo(cnxMongo);
      const response = await postModel.
      aggregate([        
        {
          $lookup: {
            from: "module",
            localField: "module_id",
            foreignField: "_id",
            as: "module",
          },
        },
        {
          $match: { _id: objectId },
        },
      ])
        .sort({ createdAt: 1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as TestI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
 

  async saveAnswer(data: AnswerI) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await answerModelMongo(cnxMongo);
      const response = await postModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as unknown as AnswerI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateModule(id: string, data: ModuleI) {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await moduleModelMongo(cnxMongo);

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
