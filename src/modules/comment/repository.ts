import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model,Mongoose } from "mongoose";
import { CommentI } from "../../interfaces/comment.interface";
import { commentModelMongo } from "./model";


export class CommentRepository {
  async save(data: CommentI) {
    try {
      const cnxMongo = await connectionMongo();
      const commentModel = await commentModelMongo(cnxMongo);
      const response = await commentModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as CommentI;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async getByIdFad(id: Object) {
    try {
      const cnxMongo = await connectionMongo();
      const commentModel = await commentModelMongo(cnxMongo);
      const response = await commentModel.aggregate([       
        {
          $match: {
            course_id: id
          }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'user_id',
            foreignField: '_id',
            as: 'user'
          },
        },
      ]).exec();
      await cnxMongo.close();
      return response as CommentI[];
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
}

