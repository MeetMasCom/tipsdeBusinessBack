"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class StudentRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                const response = yield likeModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                const response = yield likeModel.aggregate([
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
                    });
                }
                yield cnxMongo.close();
                return result;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getValidStudent(id, student) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({
                    $and: [
                        { course_id: id },
                        { user_id: student }
                    ]
                })
                    .sort({ createdAt: -1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getCourseByUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(user);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                // const response = await postModel.aggregate([        
                //   {
                //     $lookup: {
                //       from: "course",
                //       localField: "course_id",
                //       foreignField: "_id",
                //       as: "course",
                //     },
                //   }
                // ])
                //   .sort({ createdAt: -1 })
                //   .exec();
                const response = yield postModel.distinct("course_id", { user_id: objectId }).exec();
                //console.log("response",response);
                const response1 = yield postModel.aggregate([
                    {
                        $match: { course_id: { $in: response } }
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "user_id",
                            foreignField: "_id",
                            as: "user"
                        }
                    }
                ]).exec();
                //console.log("response1",response1);
                const result = [];
                for (var i = 0; i < response1.length; i++) {
                    result.push({
                        id_curso: response1[i].course_id,
                        user: response[i].user,
                    });
                }
                yield cnxMongo.close();
                //return response1 as unknown as StudentI[];
                return response1;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getCourseByStudent(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(user);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                const response = yield postModel.aggregate([
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
                    }, {
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
                    });
                }
                yield cnxMongo.close();
                return response;
                //return result;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getCourseByCategoria(student, cat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // console.log(student);
                // console.log(cat);
                const cat1 = parseInt(cat, 10);
                ;
                const idUser = new mongoose_1.Types.ObjectId(student);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                const response = yield postModel.aggregate([
                    {
                        $lookup: {
                            from: "course",
                            localField: "course_id",
                            foreignField: "_id",
                            as: "course",
                        },
                    }, {
                        $match: { $and: [
                                { user_id: idUser },
                                { 'course.categoria': cat1 }
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
                    });
                }
                yield cnxMongo.close();
                return response;
                //return result;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.StudentRepository = StudentRepository;
