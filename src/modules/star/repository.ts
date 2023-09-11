import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { StarI } from "../../interfaces/star.interface";
import { starModelMongo } from "./model";



export class StarRepository {
  async save(data: StarI) {
    try {
      const cnxMongo = await connectionMongo();
      const starModel = await starModelMongo(cnxMongo);
      const response = await starModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as StarI;
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getByIdUser(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const starModel = await starModelMongo(cnxMongo);
      
      const response = await starModel.find({ user_id: id }).exec();
      await cnxMongo.close();
      return response as StarI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdFadAll(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const starModel = await starModelMongo(cnxMongo);
      
      const response = await starModel.find({ fad_id: id }).exec();
      await cnxMongo.close();
      return response as StarI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdAll(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const starModel = await starModelMongo(cnxMongo);
      
      const response = await starModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as StarI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      console.log("verificar estrella",id);
      const cnxMongo = await connectionMongo();
      const starModel = await starModelMongo(cnxMongo);
      
      const response = await starModel.find({ _id: id }).exec();
      console.log(response);
      await cnxMongo.close();
      return response as StarI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getStarUserFadId(user: object,fad:object) {
    try {
      console.log(user);
      const cnxMongo = await connectionMongo();
      const starModel = await starModelMongo(cnxMongo);
      
      const response = await starModel.aggregate([       
        {
          $match:  {
            $and: [{
                user_id: user,
                fad_id: fad
            }]
        }
        },
      ]).exec();
      await cnxMongo.close();
      return response as StarI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async update(id: string, data: StarI) {
    try {
      const cnxMongo = await connectionMongo();
      const starModel = await starModelMongo(cnxMongo);
      console.log("id actualizar",id);
      console.log("calificacion",data);
      const response = await starModel
        .updateOne({ _id: id }, { $set: {qualification:data.qualification}} )
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo verificar la información del las estrellas");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}