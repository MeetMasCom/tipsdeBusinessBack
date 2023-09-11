import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { SpamI } from "../../interfaces/spam.interface";
import { spamModelMongo } from "./model";



export class SpamRepository {
  async save(data: SpamI) {
    try {      
      
      const cnxMongo = await connectionMongo();
      const spamModel = await spamModelMongo(cnxMongo);
      const response = await spamModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as SpamI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAllSpam() {
    try {
            const cnxMongo = await connectionMongo();
      const spamModel = await spamModelMongo(cnxMongo);
      
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
      return response as SpamI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdSpam(id: string) {
    try {
      
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const spamModel = await spamModelMongo(cnxMongo);
      
      const response = await spamModel.aggregate([
        {
          $match: { user_id: objectId },
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
      return response as SpamI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getDetailSpam(id: string) {
    try {
      console.log("repo", id);
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const spamModel = await spamModelMongo(cnxMongo);
      
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
      return response as SpamI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getUserSpam(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const spamModel = await spamModelMongo(cnxMongo);
      
      const response = await spamModel.aggregate([
        {
          $match: { user_spam: objectId },
        },
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "userSpam",
          },
        }
        ,
        {
          $lookup: {
            from: "users",
            localField: "user_spam",
            foreignField: "_id",
            as: "userD",
          },
        }
      ])
      .sort({ created_at: -1 })
      .exec();
      await cnxMongo.close();
      return response as SpamI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  


  async updateSpam(id: string, payload:SpamI) {
    try {
      const cnxMongo = await connectionMongo();
      const spamModel = await spamModelMongo(cnxMongo);

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



}

