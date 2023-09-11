import { connectionMongo } from "../../database/conection";
import { Types } from "mongoose";
import { AdsI, ReviewAdsI, VisitAdsI } from "../../interfaces/ads.interface";
import { adsModelMongo, visitAdsModelMongo } from "./model";
import { log } from "console";

export class AdsRepository {
  async save(data: AdsI) {
    try {
      const cnxMongo = await connectionMongo();
      const adsModel = await adsModelMongo(cnxMongo);
      const response = await adsModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as AdsI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const adsModel = await adsModelMongo(cnxMongo);
      const response = await adsModel.find({ state: 1 }).sort({ updated_at: -1 }).exec();
      return response as AdsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAdsById(adsId: string) {
    try {
      const cnxMongo = await connectionMongo();
      const adsModel = await adsModelMongo(cnxMongo);
      const response = await adsModel.findOne({ _id: adsId }).sort({ updated_at: -1 }).exec();
      return response as AdsI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByUserId(userId: string) {
    try {
      const cnxMongo = await connectionMongo();
      const adsModel = await adsModelMongo(cnxMongo);
      const response = await adsModel.find({ userId }).sort({ updated_at: -1 }).exec();
      await cnxMongo.close();
      return response as AdsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async deleteById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const adsModel = await adsModelMongo(cnxMongo);
      const response = await adsModel
        .updateOne({ _id: id }, { $set: { state: 3 } })
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del AdsI");
      await cnxMongo.close();
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateStateAds(id: string, data: ReviewAdsI) {
    try {
      const cnxMongo = await connectionMongo();
      const adsModel = await adsModelMongo(cnxMongo);

      const response = await adsModel
        .updateOne({ _id: id }, { $set: { state: data.state, comentary: data.comentary } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del anuncio");

      await cnxMongo.close();
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateAds(id: string, data: AdsI) {
    try {
      const cnxMongo = await connectionMongo();
      const adsModel = await adsModelMongo(cnxMongo);

      const response = await adsModel
        .updateOne({ _id: id }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del anuncio");

      await cnxMongo.close();
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async visitAds(data: VisitAdsI) {
    try {
      const cnxMongo = await connectionMongo();
      const visitAdsModel = await visitAdsModelMongo(cnxMongo);
      const response = await visitAdsModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as VisitAdsI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async countVisitAds(adsId: string) {
    try {
      const cnxMongo = await connectionMongo();
      const visitAdsModel = await visitAdsModelMongo(cnxMongo);
      const response = await visitAdsModel.find({
        adsId
      });
      await cnxMongo.close();
      return response as VisitAdsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  // logica de los usuarios
  async getByIdAds(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const adsModel = await adsModelMongo(cnxMongo);
      const response = await adsModel.find({ userId: { $ne: id }, state: 0, stop: false })
        .sort({ updated_at: -1 }).
        exec()
      await cnxMongo.close();
      return response as AdsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
