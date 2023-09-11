import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model } from "mongoose";
import { PackageI } from "../../interfaces/package.interface";
import { packageModelMongo } from "./model";



export class PackageRepository {
  async save(data: PackageI) {
    try {

      const cnxMongo = await connectionMongo();
      const packageModel = await packageModelMongo(cnxMongo);
      const response = await packageModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as PackageI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {

      const cnxMongo = await connectionMongo();
      const packageModel = await packageModelMongo(cnxMongo);

      const response = await packageModel.find()
        .sort({ created_at: -1 })
        .exec();
      await cnxMongo.close();
      return response as PackageI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const packageModel = await packageModelMongo(cnxMongo);
      const response = await packageModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as PackageI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getActivos() {
    try {
      const cnxMongo = await connectionMongo();
      const packageModel = await packageModelMongo(cnxMongo);

      const response = await packageModel.find({ state: 0 }).exec();
      await cnxMongo.close();
      return response as PackageI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async updatePackage(id: string, data: PackageI) {
    try {
      const cnxMongo = await connectionMongo();
      const packageModel = await packageModelMongo(cnxMongo);

      const response = await packageModel
        .updateOne({ _id: id }, { $set: data })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo cambiar el estado");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateState(id: string, data: PackageI) {
    try {
      const cnxMongo = await connectionMongo();
      const packageModel = await packageModelMongo(cnxMongo);

      const response = await packageModel
        .updateOne({ _id: id }, { $set: data })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo cambiar el estado");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

}

