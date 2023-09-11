import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model } from "mongoose";
import { FeedBackI } from "../../interfaces/feedback.interface";
import { feedbackModelMongo } from "./model";
import { profile } from "console";



export class FeedBackRepository {
  async save(data: FeedBackI) {
    try {

      const cnxMongo = await connectionMongo();
      const feedbackModel = await feedbackModelMongo(cnxMongo);
      const response = await feedbackModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as FeedBackI;
    } catch (error) {
      throw new Error(error as string);
    }
  }



  async getFeedBack() {
    try {
      const cnxMongo = await connectionMongo();
      const feedbackModel = await feedbackModelMongo(cnxMongo);

      const response = await feedbackModel.aggregate([
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
      return response as FeedBackI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

 

}

