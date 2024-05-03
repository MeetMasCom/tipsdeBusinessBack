import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, ObjectId, Schema, Types, model } from "mongoose";
import { audiolibroModelMongo } from "./model";
import { AudioLibroI } from "../../interfaces/audiolibro.interface";
import { userModelMongo } from "../user/model";
import { count } from "console";

export class AudioLibroRepository {
  async saveAudioLibro(data: AudioLibroI) {
    try {
      console.log(data);
      const cnxMongo = await connectionMongo();
      const audiolibroModel = await audiolibroModelMongo(cnxMongo);
      const response = await audiolibroModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as unknown as AudioLibroI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAudioLibroByIdUser(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const audiolibroModel = await audiolibroModelMongo(cnxMongo);
      const response = await audiolibroModel
        .find({ user_id: id })
        .sort({ createdAt: 1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as AudioLibroI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAudioLibroById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const audiolibroModel = await audiolibroModelMongo(cnxMongo);
      const response = await audiolibroModel
        .find({_id: id })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as AudioLibroI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  
  async getAllAudioLibro() {
    try {
      const cnxMongo = await connectionMongo();
      const audiolibroModel = await audiolibroModelMongo(cnxMongo);
      const response = await audiolibroModel
        .find({state: 1 })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as AudioLibroI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  async updateAudioLibro(id: string, data: AudioLibroI) {
    try {
      const cnxMongo = await connectionMongo();
      const audiolibroModel = await audiolibroModelMongo(cnxMongo);
      const response = await audiolibroModel
        .updateOne({ _id: id }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo verificar la información del audio libro");

      await cnxMongo.close();
      return response.modifiedCount;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
