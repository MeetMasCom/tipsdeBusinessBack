import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { ServiceI } from "../../interfaces/service.interface";
import { serviceModelMongo } from "./model";



export class ServiceRepository {
  async save(data: ServiceI) {
    try {      
      const cnxMongo = await connectionMongo();
      const serviceModel = await serviceModelMongo(cnxMongo);
      const response = await serviceModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as ServiceI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const serviceModel = await serviceModelMongo(cnxMongo);
      const response = await serviceModel.find().exec();
      await cnxMongo.close();
      return response as ServiceI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdHotel(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const serviceModel = await serviceModelMongo(cnxMongo);
      
      const response = await serviceModel.find({ hotel_id: id }).exec();
      await cnxMongo.close();
      return response as ServiceI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdService(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const serviceModel = await serviceModelMongo(cnxMongo);      
      const response = await serviceModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as ServiceI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

