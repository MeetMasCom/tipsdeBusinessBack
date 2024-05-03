import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, ObjectId, Schema, Types, model } from "mongoose";
import { TopicI } from "../../interfaces/topic.interface";
import { topicModelMongo } from "./model";
import { UserI } from "../../interfaces/user.interface";
import { userModelMongo } from "../user/model";
import { count } from "console";

export class TopicRepository {
  async saveTopic(data: TopicI) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await topicModelMongo(cnxMongo);
      const response = await postModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as unknown as TopicI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getTopicByIdModule(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await topicModelMongo(cnxMongo);
      const response = await postModel
        .find({ module_id: id })
        .sort({ createdAt: 1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as TopicI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getTopicById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await topicModelMongo(cnxMongo);
      const response = await postModel
        .find({_id: id })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as TopicI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateTopic(id: string, data: TopicI) {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await topicModelMongo(cnxMongo);

      const response = await adminModel
        .updateOne({ _id: id }, { $set: data })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo modificar el tema");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

}
