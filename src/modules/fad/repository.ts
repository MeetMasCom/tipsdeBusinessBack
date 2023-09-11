import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { FadI } from "../../interfaces/fad.interface";
import { fadModelMongo } from "./model";



export class FadRepository {
  async save(data: FadI) {
    try {      
      const cnxMongo = await connectionMongo();
      const fadModel = await fadModelMongo(cnxMongo);
      const response = await fadModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as FadI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const fadModel = await fadModelMongo(cnxMongo);
      const response = await fadModel.find().exec();
      await cnxMongo.close();
      return response as FadI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const fadModel = await fadModelMongo(cnxMongo);
      
      const response = await fadModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as FadI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdUser(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const fadModel = await fadModelMongo(cnxMongo);
      
      const response = await fadModel.find({ user_id: id }).exec();
      await cnxMongo.close();
      return response as FadI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

