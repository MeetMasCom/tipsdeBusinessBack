import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model } from "mongoose";
import { PromptsI } from "../../interfaces/prompts.interface";
import { promptsModelMongo } from "./model";



export class PromptsRepository {
  async save(data: PromptsI) {
    try {

      const cnxMongo = await connectionMongo();
      const likeModel = await promptsModelMongo(cnxMongo);
      const response = await likeModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as PromptsI;
    } catch (error) {
      throw new Error(error as string);
    }
  }



  async getMyPrompts(id: string) {
    try {

      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const likeModel = await promptsModelMongo(cnxMongo);

      const response = await likeModel.find({user_id:id})
        .exec();
      await cnxMongo.close();
      return response as PromptsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getPromptsById(id: string) {
    try {

      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const likeModel = await promptsModelMongo(cnxMongo);

      const response = await likeModel.find({_id:id})
        .exec();
      await cnxMongo.close();
      return response as PromptsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAllPrompts() {
    try {

      const cnxMongo = await connectionMongo();
      const likeModel = await promptsModelMongo(cnxMongo);

      const response = await likeModel.find()
        .exec();
      await cnxMongo.close();
      return response as PromptsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
 
  async updatePrompt(id: string, data: PromptsI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await promptsModelMongo(cnxMongo);

      const response = await userModel
        .updateOne({ _id: id }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del prompt");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

}

