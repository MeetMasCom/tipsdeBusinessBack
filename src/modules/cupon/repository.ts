import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { CuponI } from "../../interfaces/cupon.interface";
import { cuponModelMongo } from "./model";



export class CuponRepository {
  async save(data: CuponI) {
    try {      
      
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponModelMongo(cnxMongo);
      const response = await spamModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as CuponI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAllSpam() {
    try {
            const cnxMongo = await connectionMongo();
      const spamModel = await cuponModelMongo(cnxMongo);
      
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
      return response as CuponI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdSpam(id: string) {
    try {
      
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponModelMongo(cnxMongo);
      
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
      return response as CuponI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getDetailSpam(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponModelMongo(cnxMongo);
      
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
      return response as CuponI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getUserSpam(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponModelMongo(cnxMongo);
      
      const response = await spamModel.find({user_id:id})
      .sort({ created_at: -1 })
      .exec();
      await cnxMongo.close();
      return response as CuponI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  


  async updateSpam(id: string, payload:CuponI) {
    try {
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponModelMongo(cnxMongo);

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

  async updateState(id: string, data: CuponI) {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await cuponModelMongo(cnxMongo);

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


  async getCuponActivoUser(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const spamModel = await cuponModelMongo(cnxMongo);
      
      const response = await spamModel. find({
        user_id:id,
        state: 0
      })
      .exec();
      await cnxMongo.close();
      return response as CuponI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async restarCupon(id: string, data: CuponI) {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await cuponModelMongo(cnxMongo);

      const response = await adminModel
      .updateOne({ _id: id },{ $inc: { cantidad: -1 } } )
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se restar el cupo");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }
  async getByCodigo(codigo: number) {
    try {
      console.log(codigo);
      const cnxMongo = await connectionMongo();
      const cuponModel = await cuponModelMongo(cnxMongo);
      
      const response = await cuponModel.find({
        codigo:codigo,
      })
      .sort({ created_at: -1 })
      .exec();
      await cnxMongo.close();
      return response as CuponI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

