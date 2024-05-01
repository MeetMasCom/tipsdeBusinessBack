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
exports.CuponUserRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class CuponUserRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const spamModel = yield (0, model_1.cuponUserModelMongo)(cnxMongo);
                const response = yield spamModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllSpam() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const spamModel = yield (0, model_1.cuponUserModelMongo)(cnxMongo);
                const response = yield spamModel.aggregate([
                    {
                        $match: { state: 0 }
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "user_id",
                            foreignField: "_id",
                            as: "userD",
                        },
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "user_spam",
                            foreignField: "_id",
                            as: "userSpam",
                        },
                    }
                ])
                    .sort({ created_at: -1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdSpam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const spamModel = yield (0, model_1.cuponUserModelMongo)(cnxMongo);
                const response = yield spamModel.aggregate([
                    {
                        $match: { user_id: objectId },
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "user_cupon",
                            foreignField: "_id",
                            as: "userCupon",
                        },
                    },
                    {
                        $lookup: {
                            from: "cupon",
                            localField: "cupon_id",
                            foreignField: "_id",
                            as: "cupon",
                        },
                    }
                ])
                    .sort({ created_at: -1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getDetailSpam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const spamModel = yield (0, model_1.cuponUserModelMongo)(cnxMongo);
                const response = yield spamModel.aggregate([
                    {
                        $match: { _id: objectId },
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "user_id",
                            foreignField: "_id",
                            as: "userD",
                        },
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "user_spam",
                            foreignField: "_id",
                            as: "userSpam",
                        },
                    }
                ])
                    .sort({ created_at: -1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUserSpam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const spamModel = yield (0, model_1.cuponUserModelMongo)(cnxMongo);
                const response = yield spamModel.aggregate([
                    {
                        $match: { user_cupon: objectId },
                    },
                    {
                        $lookup: {
                            from: "cupon",
                            localField: "cupon_id",
                            foreignField: "_id",
                            as: "cupon",
                        },
                    }
                ])
                    .sort({ created_at: -1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateSpam(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const spamModel = yield (0, model_1.cuponUserModelMongo)(cnxMongo);
                const response = yield spamModel
                    .updateOne({ _id: id }, { $set: payload })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar el spam");
                yield cnxMongo.close();
                return response.upsertedId;
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
                const adminModel = yield (0, model_1.cuponUserModelMongo)(cnxMongo);
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
    deleteCupoUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adminModel = yield (0, model_1.cuponUserModelMongo)(cnxMongo);
                const response = yield adminModel
                    .deleteOne({ _id: id })
                    .exec();
                if (response.deletedCount == 0)
                    throw new Error("No se pudo eliminar el cupo");
                yield cnxMongo.close();
                return response.deletedCount;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.CuponUserRepository = CuponUserRepository;
