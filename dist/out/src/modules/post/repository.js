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
exports.PostRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
const model_2 = require("../user/model");
class PostRepository {
    savePost(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.postModelMongo)(cnxMongo);
                const response = yield postModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getPostByIdUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.postModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({ user_id: id })
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
    getPostUserProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.postModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({ $and: [{ user_id: id }] })
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
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.postModelMongo)(cnxMongo);
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
    //   async getPostByType(id:string) {
    //     try {
    //       const cnxMongo = await connectionMongo();
    //       const postModel = await postModelMongo(cnxMongo);
    //       const response = await postModel.find({ type: id })
    //       .sort({createdAt:-1}).exec();
    //       await cnxMongo.close();
    //       return response as unknown as PostI[];
    //     } catch (error) {
    //       console.log(error)
    //       throw new Error(error as string);
    //     }
    //   }
    // }
    getPostByType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.postModelMongo)(cnxMongo);
                const resultado = yield postModel
                    .aggregate([
                    {
                        $match: { profile_id: objectId },
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "user_id",
                            foreignField: "_id",
                            as: "user",
                        },
                    },
                ])
                    .sort({ createdAt: -1 }).limit(10)
                    .exec();
                return resultado;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    getPostProfileUserId(id, profile) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const IdUser = new mongoose_1.Types.ObjectId(id);
                const IdProfile = new mongoose_1.Types.ObjectId(profile);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.postModelMongo)(cnxMongo);
                const resultado = yield postModel
                    .aggregate([
                    {
                        $lookup: {
                            from: "users",
                            localField: "user_id",
                            foreignField: "_id",
                            as: "user",
                        },
                    },
                    {
                        $lookup: {
                            from: "profile",
                            localField: "profile_id",
                            foreignField: "_id",
                            as: "profile",
                        },
                    },
                    {
                        $match: {
                            $and: [{ "user._id": IdUser }, { profile_id: IdProfile }],
                        },
                    },
                ])
                    .sort({ createdAt: -1 }).limit(10)
                    .exec();
                return resultado;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    updateProfile(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_2.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: data })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar el perfil");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getCountPost(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const val = 0;
                const IdProfile = new mongoose_1.Types.ObjectId(data);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.postModelMongo)(cnxMongo);
                const response = yield postModel.countDocuments({
                    user_id: id,
                    profile_id: data
                }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.postModelMongo)(cnxMongo);
                const response = yield postModel.deleteOne({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.PostRepository = PostRepository;
