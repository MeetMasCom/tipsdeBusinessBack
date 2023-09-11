import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model } from "mongoose";
import { SubpromptsI } from "../../interfaces/subprompts.interface";
import { subpromptsModelMongo } from "./model";



export class SubPromptsRepository {
  async save(data: SubpromptsI) {
    try {

      const cnxMongo = await connectionMongo();
      const likeModel = await subpromptsModelMongo(cnxMongo);
      const response = await likeModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as SubpromptsI;
    } catch (error) {
      throw new Error(error as string);
    }
  }



  async getSubPromptsById(id: string) {
    try {

      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const likeModel = await subpromptsModelMongo(cnxMongo);

      const response = await likeModel.find({prompts_id:id})
        .exec();
      await cnxMongo.close();
      return response as SubpromptsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
 
}

