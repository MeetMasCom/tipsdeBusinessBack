import { connectionMongo } from "../../database/conection";
import mongoose, { Connection, ObjectId, Schema, Types, model } from "mongoose";
import { PostI } from "../../interfaces/post.interface";
import { postModelMongo } from "./model";
import { UserI } from "../../interfaces/user.interface";
import { userModelMongo } from "../user/model";
import { count } from "console";

export class PostRepository {
  async savePost(data: PostI) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await postModelMongo(cnxMongo);
      const response = await postModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as unknown as PostI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getPostByIdUser(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await postModelMongo(cnxMongo);
      const response = await postModel
        .find({ user_id: id })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as PostI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getPostUserProfile(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await postModelMongo(cnxMongo);
      const response = await postModel
        .find({ $and: [{ user_id: id }] })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as PostI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getPostById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await postModelMongo(cnxMongo);
      const response = await postModel
        .find({ _id: id })
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as PostI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  //   async getPostByType(id:string) {
  //     try {
  //       const cnxMongo = await connectionMongo();
  //       const postModel = await postModelMongo(cnxMongo);
  //       const response = await postModel.find({ type: id })

  //       .sort({createdAt:-1}).exec();
  //       await cnxMongo.close();
  //       return response as unknown as PostI[];
  //     } catch (error) {
  //       console.log(error)
  //       throw new Error(error as string);
  //     }
  //   }
  // }

  async getPostByType(id: string) {
    try {
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const postModel = await postModelMongo(cnxMongo);
      const resultado = await postModel
        .aggregate([
          {
            $match: { profile_id: objectId },
          },
          {
            $lookup: {
              from: "users",
              localField: "user_id",
              foreignField: "_id",
              as: "user",
            },
          },
        ])
        .sort({ createdAt: -1 }).limit(10)
        .exec();
      return resultado;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async getPostProfileUserId(id: string, profile: string) {
    try {
      const IdUser = new Types.ObjectId(id);
      const IdProfile = new Types.ObjectId(profile);
      
      const cnxMongo = await connectionMongo();
      const postModel = await postModelMongo(cnxMongo);
      const resultado = await postModel
        .aggregate([
          {
            $lookup: {
              from: "users",
              localField: "user_id",
              foreignField: "_id",
              as: "user",
            },
          },
          {
            $lookup: {
              from: "profile",
              localField: "profile_id",
              foreignField: "_id",
              as: "profile",
            },
          },
          {
            $match: {
              $and: [{ "user._id": IdUser }, {  profile_id: IdProfile  }],
            },
          },
        ])
        .sort({ createdAt: -1 }).limit(10)
        .exec();
      return resultado;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async updateProfile(id: string, data: UserI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .updateOne({ _id: id }, { $set: data })
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar el perfil");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getCountPost(id: string, data: string) {
    try {
      const val:number=0;
      const IdProfile = new Types.ObjectId(data);
      const cnxMongo = await connectionMongo();
      const postModel = await postModelMongo(cnxMongo);
      const response = await postModel.countDocuments({
        user_id: id,
        profile_id: data
      }).exec();
      await cnxMongo.close();
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async deletePost(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await postModelMongo(cnxMongo);
      const response = await postModel.deleteOne({_id: id}).exec();
      await cnxMongo.close();
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
