import { connectionMongo } from "../../database/conection";
import { CountryI } from "../../interfaces/country.interface copy";
import { countryModelMongo } from "./model";

export class CountryRepository {
  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const countryModel = await countryModelMongo(cnxMongo);
      const response = await countryModel.find().exec();
      await cnxMongo.close();
      return response as CountryI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const countryModel = await countryModelMongo(cnxMongo);
      const response = await countryModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as CountryI;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
