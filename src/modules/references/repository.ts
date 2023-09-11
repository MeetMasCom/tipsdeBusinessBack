import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model,Mongoose } from "mongoose";
import { ReferencesI,ReferencesTipsI } from "../../interfaces/references.interface";
import { referencesModelMongo, referencesTipsModelMongo } from "./model";


export class ReferencesRepository {
  async save(data: ReferencesI) {
    try {
      const cnxMongo = await connectionMongo();
      const commentModel = await referencesModelMongo(cnxMongo);
      const response = await commentModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as ReferencesI;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
  async getAllReferences() {
    try {
      const cnxMongo = await connectionMongo();
      const commentModel = await referencesModelMongo(cnxMongo);
      const response = await commentModel.aggregate([       
        {
          $lookup: {
            from: 'course',
            localField: 'course_id',
            foreignField: '_id',
            as: 'course'
          },
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
      return response as ReferencesI[];
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }


  async getMyReferences(id: Object) {
    try {
      console.log(id);
      const cnxMongo = await connectionMongo();
      const commentModel = await referencesModelMongo(cnxMongo);
      const response = await commentModel.aggregate([       
        {
          $lookup: {
            from: 'course',
            localField: 'course_id',
            foreignField: '_id',
            as: 'course'
          },
        },
        {
          $match: {
            user_id: id
          }
        },
      ]).exec();  
      
      await cnxMongo.close();
      return response as ReferencesI[];
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }


  async getByIdCourse(id: Object) {
    try {
      const cnxMongo = await connectionMongo();
      const commentModel = await referencesModelMongo(cnxMongo);
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
      return response as ReferencesI[];
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }


  async saveReferencesTips(data: ReferencesI) {
    try {
      const cnxMongo = await connectionMongo();
      const commentModel = await referencesTipsModelMongo(cnxMongo);
      const response = await commentModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as ReferencesTipsI;
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async getByIdTips(id: Object) {
    try {
      const cnxMongo = await connectionMongo();
      const commentModel = await referencesTipsModelMongo(cnxMongo);
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
      return response as ReferencesTipsI[];
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
}

