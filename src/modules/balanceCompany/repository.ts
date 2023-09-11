import { connectionMongo } from "../../database/conection";
import { Types } from "mongoose";
import { BalanceCompanyI } from "../../interfaces/balanceCompany";
import { balanceCompanyModelMongo } from "./model";
import { rechargeUserModelMongo } from "../balanceUser/model";
import { RechargeI } from "../../interfaces/balanceUser";


export class BalanceCompanyRepository {
  async save(data: BalanceCompanyI) {
    try {
      const cnxMongo = await connectionMongo();
      const balanceCompanyModel = await balanceCompanyModelMongo(cnxMongo);
      const response = await balanceCompanyModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as BalanceCompanyI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const balanceCompanyModel = await balanceCompanyModelMongo(cnxMongo);
      const response = await balanceCompanyModel.find().exec();
      await cnxMongo.close();
      return response as BalanceCompanyI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const balanceCompanyModel = await balanceCompanyModelMongo(cnxMongo);
      const response = await balanceCompanyModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as BalanceCompanyI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByBalanceCompany() {
    try {
      const cnxMongo = await connectionMongo();
      const balanceCompanyModel = await balanceCompanyModelMongo(cnxMongo);
      const response = await balanceCompanyModel.find().exec();
      await cnxMongo.close();
      return response as BalanceCompanyI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async update(id: string, data: BalanceCompanyI) {
    try {
      const cnxMongo = await connectionMongo();
      const balanceCompanyModel = await balanceCompanyModelMongo(cnxMongo);

      const response = await balanceCompanyModel
        .updateOne({ _id: id }, { $set: { ...data } }, { upsert: true })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información de balance empresa");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getAllRechargs() {
    try {
      const cnxMongo = await connectionMongo();
      const rechargeUserModel = await rechargeUserModelMongo(cnxMongo);
      const response = await rechargeUserModel.find({ status: 0 }).exec();
      await cnxMongo.close();
      return response as RechargeI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

}
