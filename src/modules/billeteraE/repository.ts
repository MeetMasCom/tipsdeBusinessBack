import { connectionMongo } from "../../database/conection";
import { Types } from "mongoose";
import { BilleteraI } from "../../interfaces/billeteraE.interface";
import { billeteraModelMongo } from "./model";



export class BilleteraRepository {
  async save(data: BilleteraI) {
    try {
      const cnxMongo = await connectionMongo();
      const billeteraModel = await billeteraModelMongo(cnxMongo);
      const response = await billeteraModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as BilleteraI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const billeteraModel = await billeteraModelMongo(cnxMongo);
      const response = await billeteraModel.find().exec();
      await cnxMongo.close();
      return response as BilleteraI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const billeteraModel = await billeteraModelMongo(cnxMongo);
      const response = await billeteraModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as BilleteraI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdUser(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const billeteraModel = await billeteraModelMongo(cnxMongo);
      const response = await billeteraModel.find({ user_id: id }).exec();
      await cnxMongo.close();
      return response as BilleteraI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async update(id: string, data: BilleteraI) {
    try {
      const cnxMongo = await connectionMongo();
      const billeteraModel = await billeteraModelMongo(cnxMongo);
      const response = await billeteraModel
        .updateOne({ _id: id }, { $set: data })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo verificar la información de la billetera");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

}

