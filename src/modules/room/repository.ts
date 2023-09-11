import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { RoomI } from "../../interfaces/room.interface";
import { roomModelMongo } from "./model";



export class RoomRepository {
  async save(data: RoomI) {
    try {      
      
      const cnxMongo = await connectionMongo();
      const roomModel = await roomModelMongo(cnxMongo);
      const response = await roomModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as RoomI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdHotelRoom(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const roomModel = await roomModelMongo(cnxMongo);
      
      const response = await roomModel.find({ hotel_id: id }).exec();
      await cnxMongo.close();
      return response as RoomI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getRoomById(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const roomModel = await roomModelMongo(cnxMongo);
      
      const response = await roomModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as RoomI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  
  async addPrice(id: string, data: RoomI) {
    try {
      const cnxMongo = await connectionMongo();
      const roomModel = await roomModelMongo(cnxMongo);

      const response = await roomModel
        .updateOne({ _id: id }, { $push: {price:data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo registrar el precio");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updatePrice(id: string, data: RoomI) {
    try {
      console.log(data);
      const cnxMongo = await connectionMongo();
      const roomModel = await roomModelMongo(cnxMongo);

      const response = await roomModel
        .updateOne({ _id: id }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo registrar el precio");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }



}

