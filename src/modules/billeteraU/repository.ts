import { connectionMongo } from "../../database/conection";
import { Types } from "mongoose";
import { billeteraUModelMongo } from "./model";
import { BilleteraUserI } from "../../interfaces/billeteraU.interface";



export class BilleteraURepository {
  async save(data: BilleteraUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const billeteraModel = await billeteraUModelMongo(cnxMongo);
      const response = await billeteraModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as BilleteraUserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const billeteraModel = await billeteraUModelMongo(cnxMongo);
      const response = await billeteraModel.find().exec();
      await cnxMongo.close();
      return response as BilleteraUserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const billeteraModel = await billeteraUModelMongo(cnxMongo);
      const response = await billeteraModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as BilleteraUserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdUser(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const billeteraModel = await billeteraUModelMongo(cnxMongo);
      const response = await billeteraModel.find({ userId: id }).exec();
      await cnxMongo.close();
      return response as BilleteraUserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async update(id: string, data: BilleteraUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const billeteraModel = await billeteraUModelMongo(cnxMongo);
      const response = await billeteraModel
        .updateOne({ _id: id }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo verificar la información de la billetera");

      await cnxMongo.close();
      return response.modifiedCount;
    } catch (error) {
      throw new Error(error as string);
    }
  }

}

