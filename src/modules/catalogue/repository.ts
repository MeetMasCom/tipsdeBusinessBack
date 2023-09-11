import { Types } from "mongoose";
import { connectionMongo } from "../../database/conection";
import { CatalogueI } from "../../interfaces/catalogue.interface";
import { catalogueModelMongo } from "./model";

export class CatalogueRepository {
  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const catalogueModel = await catalogueModelMongo(cnxMongo);
      const response = await catalogueModel.find().exec();
      await cnxMongo.close();
      return response as CatalogueI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByOptions(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const catalogueModel = await catalogueModelMongo(cnxMongo);
      const response = await catalogueModel
        .find({ parentCatalogueId: id })
        .exec();
      await cnxMongo.close();
      return response as CatalogueI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const catalogueModel = await catalogueModelMongo(cnxMongo);
      const response = await catalogueModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as CatalogueI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByCode(code: string) {
    try {
      const cnxMongo = await connectionMongo();
      const catalogueModel = await catalogueModelMongo(cnxMongo);
      const response = await catalogueModel.findOne({ code }).exec();
      await cnxMongo.close();
      return response as CatalogueI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async save(data: CatalogueI) {
    try {
      const cnxMongo = await connectionMongo();
      const catalogueModel = await catalogueModelMongo(cnxMongo);
      const response = await catalogueModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as CatalogueI;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
