import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { TypeRoomI } from "../../interfaces/typeRoom.interface";
import { typeRoomModelMongo} from "./model";



export class TypeRoomRepository {

  async save(data: TypeRoomI) {
    try {    
      console.log("repository",data);  
      const cnxMongo = await connectionMongo();
      const typeModel = await typeRoomModelMongo(cnxMongo);
      const response = await typeModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as TypeRoomI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const typeModel = await typeRoomModelMongo(cnxMongo);
      const response = await typeModel.find().exec();
      await cnxMongo.close();
      return response as TypeRoomI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const typeModel = await typeRoomModelMongo(cnxMongo);
      
      const response = await typeModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as TypeRoomI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdHotel(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const typeModel = await typeRoomModelMongo(cnxMongo);
      
      const response = await typeModel.find({ hotel_id: id }).exec();
      await cnxMongo.close();
      return response as TypeRoomI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

}

