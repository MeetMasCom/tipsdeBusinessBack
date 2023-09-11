import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, ObjectId, Schema, Types, model } from "mongoose";
import { TipsI } from "../../interfaces/tips.interface";
import { tipsModelMongo } from "./model";
import { UserI } from "../../interfaces/user.interface";
import { userModelMongo } from "../user/model";
import { count } from "console";

export class TipsRepository {
  async saveTips(data: TipsI) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await tipsModelMongo(cnxMongo);
      const response = await postModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as unknown as TipsI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getTipsByIdUser(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await tipsModelMongo(cnxMongo);
      const response = await postModel
        .find({ user_id: id })
        .sort({ createdAt: 1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as TipsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getTipsById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await tipsModelMongo(cnxMongo);
      const response = await postModel
        .find({_id: id })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as TipsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  
  async getAllTips() {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await tipsModelMongo(cnxMongo);
      const response = await postModel
        .find({state: 1 })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as TipsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  async updateTips(id: string, data: TipsI) {
    try {
      const cnxMongo = await connectionMongo();
      const tipsModel = await tipsModelMongo(cnxMongo);
      const response = await tipsModel
        .updateOne({ _id: id }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo verificar la información del tips");

      await cnxMongo.close();
      return response.modifiedCount;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
