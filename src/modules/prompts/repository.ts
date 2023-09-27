import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model } from "mongoose";
import { PromptsI,PromptsPriceI,PromptsUserI } from "../../interfaces/prompts.interface";
import { promptsModelMongo, promptsPriceModelMongo,promptsUserModelMongo} from "./model";



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

  async savePrice(data: PromptsPriceI) {
    try {

      const cnxMongo = await connectionMongo();
      const likeModel = await promptsPriceModelMongo(cnxMongo);
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
  async getPricePrompts() {
    try {

      const cnxMongo = await connectionMongo();
      const likeModel = await promptsPriceModelMongo(cnxMongo);
      const response = await likeModel.find()
        .exec();
      await cnxMongo.close();
      return response as PromptsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
   async updatePricePrompt(id: string, data: PromptsI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await promptsPriceModelMongo(cnxMongo);

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

  async buyPromptsUser(data: PromptsUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipUserModel = await promptsUserModelMongo(cnxMongo);
      const response = await membershipUserModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as PromptsUserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getPromptsByUser(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const likeModel = await promptsUserModelMongo(cnxMongo);

      const response = await likeModel.find({userId:objectId})
        .exec();
      await cnxMongo.close();
      return response as PromptsUserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

}

