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
exports.LikeRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class LikeRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likeModelMongo)(cnxMongo);
                const response = yield likeModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    validateLike(id, idLike) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Id = new mongoose_1.Types.ObjectId(id);
                const IdLike = new mongoose_1.Types.ObjectId(idLike);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likeModelMongo)(cnxMongo);
                const response = yield likeModel.findOne({
                    $and: [
                        { user_id: id },
                        { userlike: idLike }
                    ]
                }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdLike(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likeModelMongo)(cnxMongo);
                const response = yield likeModel.aggregate([
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
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUserLike(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likeModelMongo)(cnxMongo);
                const response = yield likeModel.find({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateLike(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likeModelMongo)(cnxMongo);
                const response = yield likeModel
                    .updateOne({ _id: id }, { $set: { state: 1 } })
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
    getMyLikes(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likeModelMongo)(cnxMongo);
                const response = yield likeModel.aggregate([
                    {
                        $match: { user_id: objectId },
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "userlike",
                            foreignField: "_id",
                            as: "user",
                        },
                    }
                ])
                    .sort({ created_at: -1 }).limit(50)
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllUserLike(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likeModelMongo)(cnxMongo);
                const response = yield likeModel.aggregate([
                    {
                        $match: { user_id: objectId },
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "userlike",
                            foreignField: "_id",
                            as: "user",
                        },
                    }
                ])
                    .sort({ created_at: -1 }).limit(50)
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    verificarLike(id, idL) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id_user = new mongoose_1.Types.ObjectId(id);
                const id_userLike = new mongoose_1.Types.ObjectId(idL);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likeModelMongo)(cnxMongo);
                const response = yield likeModel.find({
                    $and: [
                        { user_id: id_user },
                        { userlike: id_userLike },
                    ]
                })
                    .sort({ created_at: -1 }).limit(50)
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.LikeRepository = LikeRepository;
