import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model } from "mongoose";
import { LikePostI } from "../../interfaces/likePost.interface";
import { likePostModelMongo } from "./model";

export class LikePostRepository {
  async save(data: LikePostI) {
    try {
      const cnxMongo = await connectionMongo();
      const likeModel = await likePostModelMongo(cnxMongo);
      const response = await likeModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as LikePostI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async validateLike(id: string, idLike: string) {
    try {
      const Id = new Types.ObjectId(id);
      const IdLike = new Types.ObjectId(idLike);
      const cnxMongo = await connectionMongo();
      const likeModel = await likePostModelMongo(cnxMongo);
      const response = await likeModel
        .findOne({
          $and: [{ post_id: id }, { userlike: idLike }],
        })
        .exec();
      await cnxMongo.close();
      return response as LikePostI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

 
  async likePostUser(id: string, idL: string) {
    try {
      const idP = new Types.ObjectId(id);
      const id_userLike = new Types.ObjectId(idL);
      const cnxMongo = await connectionMongo();
      const likeModel = await likePostModelMongo(cnxMongo);

      const response = await likeModel.find({ post_id: idP }, { userlike: id_userLike })
              .sort({ created_at: -1 })
        .exec();
      await cnxMongo.close();
      return response as LikePostI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async deleteLikePost(idU: string, idUL: string) {
    try {
      const idP = new Types.ObjectId(idU);
      const id_userLike = new Types.ObjectId(idUL);
      const cnxMongo = await connectionMongo();
      const likeModel = await likePostModelMongo(cnxMongo);

      const response = await likeModel.deleteOne({ post_id: idP }, { userlike: id_userLike })
        .exec();
      await cnxMongo.close();
      return response as any;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async countLikePost(id: string) {
    try {
      const idP = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const likeModel = await likePostModelMongo(cnxMongo);

      const response = await likeModel.count({ post_id: idP })
        .exec();
      await cnxMongo.close();
      return response as any;
    } catch (error) {
      throw new Error(error as string);
    }
  }


}
