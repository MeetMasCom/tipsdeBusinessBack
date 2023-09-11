import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { ProfileI } from "../../interfaces/profile.interface";
import { profileModelMongo } from "./model";
import { UserI } from "../../interfaces/user.interface";
import { userModelMongo } from "../user/model";



export class ProfileRepository {
  async saveProfile(data: ProfileI) {
    try {      
      const cnxMongo = await connectionMongo();
      const profileModel = await profileModelMongo(cnxMongo);
      const response = await profileModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as unknown as ProfileI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getProfileId(idU:string,id:string) {
    try {
      
      const Id = new Types.ObjectId(idU);
      const Profile = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);      
      const response = await userModel.find({ 
        $and: [
          { _id:idU },
          { profile:id}
        ]
      }).exec();
      await cnxMongo.close();
      return response as unknown as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAllProfile() {
    try {
      const cnxMongo = await connectionMongo();
      const profileModel = await profileModelMongo(cnxMongo);      
      const response = await profileModel.find().exec();
      await cnxMongo.close();
      return response as unknown as ProfileI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  async addProfile(id: string, data: UserI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .updateOne({ _id: id }, { $push: {profile:data}} )
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar el perfil");
  
      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async addSocialN(id: string, data: UserI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .updateOne({ _id: id }, { $push: {rsocials:data}} )
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo agregar la red social");  
      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getProfileById(id:String) {
    try {
      const cnxMongo = await connectionMongo();
      const profileModel = await profileModelMongo(cnxMongo);      
      const response = await profileModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as unknown as ProfileI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getFollowersId(idU:string,id:string) {
    try {
      
      const Id = new Types.ObjectId(idU);
      const Profile = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);      
      const response = await userModel.find({ 
        $and: [
          { _id:idU },
          { followers:id}
        ]
      }).exec();
      await cnxMongo.close();
      return response as unknown as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async addFollowers(id: string, data: UserI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .updateOne({ _id: id }, { $push: {followers:data.followers}} )
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar el perfil");
  
      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getFollowingsId(idU:string,id:string) {
    try {
      
      const Id = new Types.ObjectId(idU);
      const Profile = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);      
      const response = await userModel.find({ 
        $and: [
          { _id:idU },
          { following:id}
        ]
      }).exec();
      await cnxMongo.close();
      return response as unknown as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async addFollowings(id: string, data: UserI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .updateOne({ _id: id }, { $push: {following:data.following}} )
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar el perfil");
  
      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

