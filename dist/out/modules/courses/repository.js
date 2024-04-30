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
exports.CoursesRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class CoursesRepository {
    saveCourse(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield postModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getCourseByIdUser(id, tipo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({
                    $and: [
                        { user_id: id },
                        { type: tipo }
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
    getCourseById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({ _id: id })
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
    getAllCourses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({
                    type: 1,
                    state: 1
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
    getAllInLive() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fecha = new Date();
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({
                    $and: [
                        { type: 2 },
                        { fecha: { $gte: fecha } },
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
    getCourseByCategoria(cat, tipo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({
                    $and: [
                        { categoria: cat },
                        { type: tipo }
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
    getCourseByUser(cat, tipo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({
                    $and: [
                        { categoria: cat },
                        { type: tipo }
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
    getCourseByUserStudent(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(user);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield postModel.aggregate([
                    {
                        $match: { user_id: objectId },
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
    getTopCourses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({ type: 1 })
                    .sort({ createdAt: -1 }).limit(15)
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const membershipModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield membershipModel.findOne({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    saveCourseUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const membershipUserModel = yield (0, model_1.courseUserModelMongo)(cnxMongo);
                const response = yield membershipUserModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    verifyCourseUser(id, idC) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.courseUserModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({ userId: id, courseId: idC })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateState(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adminModel = yield (0, model_1.courseModelMongo)(cnxMongo);
                const response = yield adminModel
                    .updateOne({ _id: id }, { $set: data })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo cambiar el estado");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.CoursesRepository = CoursesRepository;
