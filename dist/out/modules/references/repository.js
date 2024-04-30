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
exports.ReferencesRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class ReferencesRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const commentModel = yield (0, model_1.referencesModelMongo)(cnxMongo);
                const response = yield commentModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    getAllReferences() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const commentModel = yield (0, model_1.referencesModelMongo)(cnxMongo);
                const response = yield commentModel.aggregate([
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
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    getMyReferences(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const commentModel = yield (0, model_1.referencesModelMongo)(cnxMongo);
                const response = yield commentModel.aggregate([
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
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    getByIdCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const commentModel = yield (0, model_1.referencesModelMongo)(cnxMongo);
                const response = yield commentModel.aggregate([
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
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    saveReferencesTips(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const commentModel = yield (0, model_1.referencesTipsModelMongo)(cnxMongo);
                const response = yield commentModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    getByIdTips(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const commentModel = yield (0, model_1.referencesTipsModelMongo)(cnxMongo);
                const response = yield commentModel.aggregate([
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
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
}
exports.ReferencesRepository = ReferencesRepository;
