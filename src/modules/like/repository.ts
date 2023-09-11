import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model } from "mongoose";
import { LikeI } from "../../interfaces/like.interface";
import { likeModelMongo } from "./model";



export class LikeRepository {
  async save(data: LikeI) {
    try {

      const cnxMongo = await connectionMongo();
      const likeModel = await likeModelMongo(cnxMongo);
      const response = await likeModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as LikeI;
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async validateLike(id: string,idLike:string) {
    try {
      const Id = new Types.ObjectId(id);
      const IdLike = new Types.ObjectId(idLike);
      const cnxMongo = await connectionMongo();
      const likeModel = await likeModelMongo(cnxMongo);      
      const response = await likeModel.findOne({
        $and: [
          { user_id: id },
          { userlike: idLike }
        ]
      }).exec();
      await cnxMongo.close();
      return response as LikeI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdLike(id: string) {
    try {

      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const likeModel = await likeModelMongo(cnxMongo);

      const response = await likeModel.aggregate([
        {
          $match: { userlike: objectId },
        },
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "user",
          },
        }
      ])
        .sort({ created_at: -1 }).limit(50)
        .exec();
      await cnxMongo.close();
      return response as LikeI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getUserLike(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const likeModel = await likeModelMongo(cnxMongo);

      const response = await likeModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as LikeI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }



  async updateLike(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const likeModel = await likeModelMongo(cnxMongo);

      const response = await likeModel
        .updateOne({ _id: id }, { $set: { state: 1 } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo cambiar el estado");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getMyLikes(id: string) {
    try {
      
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const likeModel = await likeModelMongo(cnxMongo);
      
      const response = await likeModel.aggregate([
        {
          $match: { user_id: objectId },
        },
        {
          $lookup: {
            from: "users",
            localField: "userlike",
            foreignField: "_id",
            as: "user",
          },
        }
      ])
      .sort({ created_at: -1 }).limit(50)
      .exec();
      await cnxMongo.close();
      return response as LikeI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getAllUserLike(id: string) {
    try {
      
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const likeModel = await likeModelMongo(cnxMongo);
      
      const response = await likeModel.aggregate([
        {
          $match: { user_id: objectId },
        },
        {
          $lookup: {
            from: "users",
            localField: "userlike",
            foreignField: "_id",
            as: "user",
          },
        }
      ])
      .sort({ created_at: -1 }).limit(50)
      .exec();
      await cnxMongo.close();
      return response as LikeI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async verificarLike(id: string,idL:string) {
    try {
      
      const id_user = new Types.ObjectId(id);
      const id_userLike= new Types.ObjectId(idL);
      const cnxMongo = await connectionMongo();
      const likeModel = await likeModelMongo(cnxMongo);
      
      const response = await likeModel.find({
        $and: [
          { user_id:id_user },
          { userlike:id_userLike },
        ]
      })
      .sort({ created_at: -1 }).limit(50)
      .exec();
      await cnxMongo.close();
      return response as LikeI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }



}

