import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { CuponUserI } from "../../interfaces/cuponUser.interface";
import { cuponUserModelMongo } from "./model";



export class CuponUserRepository {
  async save(data: CuponUserI) {
    try {      
      
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponUserModelMongo(cnxMongo);
      const response = await spamModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as CuponUserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAllSpam() {
    try {
            const cnxMongo = await connectionMongo();
      const spamModel = await cuponUserModelMongo(cnxMongo);
      
      const response = await spamModel.aggregate([
        {
$match:{state:0}
        },
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "userD",
          },
        }
        ,
        {
          $lookup: {
            from: "users",
            localField: "user_spam",
            foreignField: "_id",
            as: "userSpam",
          },
        }
      ])
      .sort({ created_at: -1 })
      .exec();
      await cnxMongo.close();
      return response as CuponUserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdSpam(id: string) {
    try {
      
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponUserModelMongo(cnxMongo);
      
      const response = await spamModel.aggregate([
        {
          $match: { user_id: objectId },
        },
        {
          $lookup: {
            from: "users",
            localField: "user_cupon",
            foreignField: "_id",
            as: "userCupon",
          },
        },
        {
          $lookup: {
            from: "cupon",
            localField: "cupon_id",
            foreignField: "_id",
            as: "cupon",
          },
        }
      ])
      .sort({ created_at: -1 })
      .exec();
      await cnxMongo.close();
      return response as CuponUserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getDetailSpam(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponUserModelMongo(cnxMongo);
      
      const response = await spamModel.aggregate([
        {
          $match: { _id: objectId },
        },
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "userD",
          },
        }
        ,
        {
          $lookup: {
            from: "users",
            localField: "user_spam",
            foreignField: "_id",
            as: "userSpam",
          },
        }
      ])
      .sort({ created_at: -1 })
      .exec();
      await cnxMongo.close();
      return response as CuponUserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getUserSpam(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponUserModelMongo(cnxMongo);
      
      const response = await spamModel.aggregate([
        {
          $match: { user_cupon: objectId },
        },
        {
          $lookup: {
            from: "cupon",
            localField: "cupon_id",
            foreignField: "_id",
            as: "cupon",
          },
        }
      ])
      
      .sort({ created_at: -1 })
      .exec();
      await cnxMongo.close();
      return response as CuponUserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  


  async updateSpam(id: string, payload:CuponUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponUserModelMongo(cnxMongo);

      const response = await spamModel
        .updateOne({ _id: id }, { $set: payload })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar el spam");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateState(id: string, data: CuponUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await cuponUserModelMongo(cnxMongo);

      const response = await adminModel
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

  async deleteCupoUser(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await cuponUserModelMongo(cnxMongo);

      const response = await adminModel
        .deleteOne({ _id: id })
        .exec();

      if (response.deletedCount == 0)
        throw new Error("No se pudo eliminar el cupo");

      await cnxMongo.close();
      return response.deletedCount;
    } catch (error) {
      throw new Error(error as string);
    }
  }

}

