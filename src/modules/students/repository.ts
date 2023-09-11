import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types, model } from "mongoose";
import { StudentI } from "../../interfaces/student.interface";
import { studentModelMongo } from "./model";



export class StudentRepository {
  async save(data: StudentI) {
    try {

      const cnxMongo = await connectionMongo();
      const likeModel = await studentModelMongo(cnxMongo);
      const response = await likeModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as StudentI;
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getByIdCourse(id: string) {
    try {

      const objectId = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const likeModel = await studentModelMongo(cnxMongo);

      const response = await likeModel.aggregate([
        {
          $match: { course_id: objectId },
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
        .sort({ created_at: -1 })
        .exec();
        const result = [];
        for (var i = 0; i < response.length; i++) {
            result.push({
                id_user: response[i].user[0]._id,
                username: response[i].user[0].userName,
                correo: response[i].user[0].email,
                tipo: response[i].user[0].type,
            })
        }
      await cnxMongo.close();
      return result;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  
  async getValidStudent(id: string,student:number) {
    try {
      const cnxMongo = await connectionMongo();
      const postModel = await studentModelMongo(cnxMongo);
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
      return response as unknown as StudentI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getCourseByUser(user: string) {
    try {
      const objectId = new Types.ObjectId(user);
      const cnxMongo = await connectionMongo();
      const postModel = await studentModelMongo(cnxMongo);
      const response = await postModel.aggregate([
        
        {
          $lookup: {
            from: "course",
            localField: "course_id",
            foreignField: "_id",
            as: "course",
          },
        },
        {
          $lookup: {
            from: "user",
            localField: "user_id",
            foreignField: "_id",
            as: "user",
          },
        },{
          $match: { user_id: objectId },
        },
      ])        
        .sort({ createdAt: -1 })
        .exec();

        const result = [];
        for (var i = 0; i < response.length; i++) {
            result.push({
                id_curso: response[i].course[0]._id,
                title: response[i].course[0].title,
                description: response[i].course[0].description,
                user: response[i].user,
            })
        }
      await cnxMongo.close();
      return response as unknown as StudentI[];
      //return result;
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getCourseByStudent(user: string) {
    try {
      const objectId = new Types.ObjectId(user);
      const cnxMongo = await connectionMongo();
      const postModel = await studentModelMongo(cnxMongo);
      const response = await postModel.aggregate([
        
        {
          $lookup: {
            from: "course",
            localField: "course_id",
            foreignField: "_id",
            as: "course",
          },
        },
        {
          $lookup: {
            from: "user",
            localField: "user_id",
            foreignField: "_id",
            as: "user",
          },
        },{
          $match: { user_id: objectId },
        },
      ])        
        .sort({ createdAt: -1 })
        .exec();

        const result = [];
        for (var i = 0; i < response.length; i++) {
            result.push({
                id_curso: response[i].course[0]._id,
                title: response[i].course[0].title,
                description: response[i].course[0].description,
                user: response[i].user,
            })
        }
      await cnxMongo.close();
      return response as unknown as StudentI[];
      //return result;
    } catch (error) {
      throw new Error(error as string);
    }
  }

   async getCourseByCategoria(student:string,cat: string) {
    try {
      console.log(student);
      console.log(cat);
      const cat1= parseInt(cat, 10);;
      const idUser = new Types.ObjectId(student) as any;
      const cnxMongo = await connectionMongo();
      const postModel = await studentModelMongo(cnxMongo);
      const response = await postModel.aggregate([
        
        {
          $lookup: {
            from: "course",
            localField: "course_id",
            foreignField: "_id",
            as: "course",
          },
        },{
          $match: {  $and: [
            { user_id: idUser },
            {'course.categoria':cat1}
          ] },
        },
      ])        
        .sort({ createdAt: -1 })
        .exec();

        const result = [];
        for (var i = 0; i < response.length; i++) {
            result.push({
                id_curso: response[i].course[0]._id,
                title: response[i].course[0].title,
                description: response[i].course[0].description,
                user: response[i].user,
            })
        }
      await cnxMongo.close();
      return response as unknown as StudentI[];
      //return result;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  
}

