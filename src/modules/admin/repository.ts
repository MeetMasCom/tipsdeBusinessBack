import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { AdminI } from "../../interfaces/admin.interface";
import { adminModelMongo } from "./model";
import { userOtpModelMongo } from "../user/model";
import {
  ReferralsI,
  UserExtraI,
  UserI,
  UserOtpI,
  UserValidOtpI,
  SearchUsers,
} from "../../interfaces/user.interface";
import { ERR_400 } from "../../constants/messages";



export class AdminRepository {
 
  async save(data: AdminI) {
    try {      
      const cnxMongo = await connectionMongo();
      const adminModel = await adminModelMongo(cnxMongo);
      const response = await adminModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as AdminI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByEmailOrUserName(email: string, userName: string) {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await adminModelMongo(cnxMongo);
      const response = await adminModel
        .findOne({ $or: [{ email }, { userName }] })
        .exec();
      await cnxMongo.close();
      return response as AdminI;
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async saveOtp(data: UserOtpI) {
    try {
      const cnxMongo = await connectionMongo();
      const userOtpModel = await userOtpModelMongo(cnxMongo);
      const response = await userOtpModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as UserOtpI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async validOtp(data: UserValidOtpI) {
    try {
      const cnxMongo = await connectionMongo();
      const userOtpModel = await userOtpModelMongo(cnxMongo);
      const response = await userOtpModel
        .findOne({
          used: false,
          otp: data.otp,
          userId: data.userId,
        })
        .exec();
      await cnxMongo.close();
      return response as UserOtpI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateOtp(id: string, used: boolean) {
    try {
      const cnxMongo = await connectionMongo();
      const userOtpModel = await userOtpModelMongo(cnxMongo);

      const response = await userOtpModel
        .updateOne({ _id: id }, { $set: { used } })
        .exec();

      if (response.modifiedCount == 0) throw new Error(ERR_400);

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }



  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await adminModelMongo(cnxMongo);
      const response = await adminModel.find().exec();
      await cnxMongo.close();
      return response as AdminI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const adminModel = await adminModelMongo(cnxMongo);
      
      const response = await adminModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as AdminI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByRol(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const adminModel = await adminModelMongo(cnxMongo);
      
      const response = await adminModel.find({ 'rol.item_id': id }).exec();
      await cnxMongo.close();
      return response as AdminI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdUser(id: string) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const adminModel = await adminModelMongo(cnxMongo);
      
      const response = await adminModel.find({ user_id: id }).exec();
      await cnxMongo.close();
      return response as AdminI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateAdmin(id: string, data: AdminI) {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await adminModelMongo(cnxMongo);

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

  async updateState(id: string, data: AdminI) {
    try {
      const cnxMongo = await connectionMongo();
      const adminModel = await adminModelMongo(cnxMongo);

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

}

