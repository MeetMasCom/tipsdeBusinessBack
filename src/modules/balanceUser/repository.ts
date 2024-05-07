import { connectionMongo } from "../../database/conection";
import { Types } from "mongoose";
import { balanceUserModelMongo, rechargeUserModelMongo, retreatUserModelMongo } from "./model";
import { BalanceUserI, RechargeI, RetreatI, ReviewRechargeI, ReviewRetreatI } from "../../interfaces/balanceUser";
import { log } from "console";


export class BalanceUserRepository {
  async save(data: BalanceUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const balanceUserModel = await balanceUserModelMongo(cnxMongo);
      const response = await balanceUserModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as BalanceUserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const balanceUserModel = await balanceUserModelMongo(cnxMongo);
      const response = await balanceUserModel.find().exec();
      await cnxMongo.close();
      return response as BalanceUserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const balanceUserModel = await balanceUserModelMongo(cnxMongo);
      const response = await balanceUserModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as BalanceUserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByUserId(id: string, walletId: string) {
    try {
      const cnxMongo = await connectionMongo();
      const balanceUserModel = await balanceUserModelMongo(cnxMongo);
      const response = await balanceUserModel.findOne({ userId: id, walletId }).exec();
      await cnxMongo.close();
      return response as BalanceUserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAllByUserId(id: string,) {
    try {
      const cnxMongo = await connectionMongo();
      const balanceUserModel = await balanceUserModelMongo(cnxMongo);
      const response = await balanceUserModel.findOne({ userId: id }).exec();
      await cnxMongo.close();
      return response as BalanceUserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async update(id: string, data: BalanceUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const balanceUserModel = await balanceUserModelMongo(cnxMongo);

      const response = await balanceUserModel
        .updateOne({ _id: id }, { $set: { ...data } }, { upsert: true })
        .exec();

      if (response.modifiedCount == 0 && response.upsertedCount == 0)
        throw new Error("No se pudo actualizar la información balance usuario");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }



  async updateBalance(id: string, data: BalanceUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const balanceUserModel = await balanceUserModelMongo(cnxMongo);

      const response = await balanceUserModel
        .updateOne({ _id: id }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información balance usuario");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getRechargeById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const rechargeUserModel = await rechargeUserModelMongo(cnxMongo);
      const response = await rechargeUserModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as RechargeI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async createRecharge(data: RechargeI) {
    try {
      const cnxMongo = await connectionMongo();
      const rechargeUserModel = await rechargeUserModelMongo(cnxMongo);
      const response = await rechargeUserModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as RechargeI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async reviewRecharge(data: ReviewRechargeI) {
    try {
      const cnxMongo = await connectionMongo();
      const rechargeUserModel = await rechargeUserModelMongo(cnxMongo);
      const response = await rechargeUserModel
        .updateOne({ _id: data.id }, { $set: { amount: data.value, status: data.status, remark: data.remark } })
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información recarga");
      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async reviewRetreat(data: ReviewRetreatI) {
    try {
      const cnxMongo = await connectionMongo();
      const retreatUserModel = await retreatUserModelMongo(cnxMongo);
      const response = await retreatUserModel
        .updateOne({ _id: data.id }, { $set: { amount: data.value, status: data.status, remark: data.remark, file: data.file } })
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información recarga");
      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getAllRechargByUserId(id: string,) {
    try {
      const cnxMongo = await connectionMongo();
      const rechargeUserModel = await rechargeUserModelMongo(cnxMongo);
      const response = await rechargeUserModel.find({ userId: id }).sort({ updatedAt: -1 }).exec();
      await cnxMongo.close();
      return response as RechargeI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async createRetreat(data: RetreatI) {
    try {
      const cnxMongo = await connectionMongo();
      const retreatUserModel = await retreatUserModelMongo(cnxMongo);
      const response = await retreatUserModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as RetreatI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAllRetreatByUser(userId: string) {
    try {
      const cnxMongo = await connectionMongo();
      const retreatUserModel = await retreatUserModelMongo(cnxMongo);
      const response = await retreatUserModel.find({ userId }).sort({ updatedAt: -1 }).exec();
      await cnxMongo.close();
      return response as RetreatI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getRetreatById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const retreatUserModel = await retreatUserModelMongo(cnxMongo);
      const response = await retreatUserModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as RetreatI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAllRetreat() {
    try {
      const cnxMongo = await connectionMongo();
      const retreatUserModel = await retreatUserModelMongo(cnxMongo);
      const response = await retreatUserModel.find({ status: 0 }).sort({ updatedAt: -1 }).exec();
      await cnxMongo.close();
      return response as RetreatI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


}
