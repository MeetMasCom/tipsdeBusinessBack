import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, ObjectId, Schema, Types, model } from "mongoose";
import { QuestionI } from "../../interfaces/question.interface";
import { questionModelMongo } from "./model";
import { UserI } from "../../interfaces/user.interface";
import { userModelMongo } from "../user/model";
import { count } from "console";

export class QuestionRepository {
  async saveTopic(data: QuestionI) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await questionModelMongo(cnxMongo);
      const response = await postModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as unknown as QuestionI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getQuestionByIdSubPrompts(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await questionModelMongo(cnxMongo);
      const response = await postModel
        .find({ subprompts_id: id })
        .sort({ createdAt: 1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as QuestionI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getQuestionById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await questionModelMongo(cnxMongo);
      const response = await postModel
        .find({_id: id })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as QuestionI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

 
}
