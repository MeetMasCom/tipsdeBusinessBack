import { connectionMongo } from "../../database/conection";
import { Types } from "mongoose";
import { recordsTransactionsModelMongo } from "./model";
import { RecordsTransactionI } from "../../interfaces/recordsTransactions";

export class RecordsTransactionRepository {
  async save(data: RecordsTransactionI) {
    try {
      const cnxMongo = await connectionMongo();
      const recordsTransactionsModel = await recordsTransactionsModelMongo(cnxMongo);
      const response = await recordsTransactionsModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as RecordsTransactionI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const recordsTransactionsModel = await recordsTransactionsModelMongo(cnxMongo);
      const response = await recordsTransactionsModel.find().exec();
      await cnxMongo.close();
      return response as RecordsTransactionI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByUserId(userId: string, walletId: string) {
    try {
      const cnxMongo = await connectionMongo();
      const recordsTransactionsModel = await recordsTransactionsModelMongo(cnxMongo);
      const response = await recordsTransactionsModel.find({ userId, walletId }).exec();
      await cnxMongo.close();
      return response as RecordsTransactionI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const recordsTransactionsModel = await recordsTransactionsModelMongo(cnxMongo);
      const response = await recordsTransactionsModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as RecordsTransactionI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async update(id: string, data: RecordsTransactionI) {
    try {
      const cnxMongo = await connectionMongo();
      const recordsTransactionsModel = await recordsTransactionsModelMongo(cnxMongo);

      const response = await recordsTransactionsModel
        .updateOne({ _id: id }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información de balance empresa");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
