import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { NotificationI } from "../../interfaces/notificacion.inteface";
import { notificationModelMongo } from "./model";



export class NotificationRepository {
  async save(data: NotificationI) {
    try {      
      
      const cnxMongo = await connectionMongo();
      const notificationModel = await notificationModelMongo(cnxMongo);
      const response = await notificationModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as NotificationI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdLike(id: string) {
    try {
      
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const notificationModel = await notificationModelMongo(cnxMongo);
      
      const response = await notificationModel.aggregate([
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
      return response as NotificationI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdUser(id: string) {
    try {
      
      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const notificationModel = await notificationModelMongo(cnxMongo);
      
      const response = await notificationModel.aggregate([
        {
          $match: { user_notification: objectId },
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
      return response as NotificationI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getUserLike(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const notificationModel = await notificationModelMongo(cnxMongo);
      
      const response = await notificationModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as NotificationI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  


  async updateState(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const notificationModel = await notificationModelMongo(cnxMongo);

      const response = await notificationModel
        .updateOne({ _id: id }, { $set: {state:1} })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo cambiar el estado");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }



}

