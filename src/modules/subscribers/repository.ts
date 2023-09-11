import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model,Mongoose } from "mongoose";
import { SubscribersI } from "../../interfaces/subscribers.interface";
import { subscribersModelMongo } from "./model";


export class CommentRepository {
  async save(data: SubscribersI) {
    try {
      const cnxMongo = await connectionMongo();
      const commentModel = await subscribersModelMongo(cnxMongo);
      const response = await commentModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as SubscribersI;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async getByIdFad(id: Object) {
    try {
      const cnxMongo = await connectionMongo();
      const commentModel = await subscribersModelMongo(cnxMongo);
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
      return response as SubscribersI[];
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

   
  async getSubscribeStudent(id: string,student:number) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await subscribersModelMongo(cnxMongo);
      const response = await postModel
        .find({
          $and: [
            { course_id: id },
            { user_id: student }
          ]
        })
        
        .sort({ createdAt: -1 })
        .exec();
      await cnxMongo.close();
      return response as unknown as SubscribersI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

