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
exports.StarRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class StarRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const starModel = yield (0, model_1.starModelMongo)(cnxMongo);
                const response = yield starModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const starModel = yield (0, model_1.starModelMongo)(cnxMongo);
                const response = yield starModel.find({ user_id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdFadAll(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const starModel = yield (0, model_1.starModelMongo)(cnxMongo);
                const response = yield starModel.find({ fad_id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdAll(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const starModel = yield (0, model_1.starModelMongo)(cnxMongo);
                const response = yield starModel.find({ _id: id }).exec();
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
                console.log("verificar estrella", id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const starModel = yield (0, model_1.starModelMongo)(cnxMongo);
                const response = yield starModel.find({ _id: id }).exec();
                console.log(response);
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getStarUserFadId(user, fad) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(user);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const starModel = yield (0, model_1.starModelMongo)(cnxMongo);
                const response = yield starModel.aggregate([
                    {
                        $match: {
                            $and: [{
                                    user_id: user,
                                    fad_id: fad
                                }]
                        }
                    },
                ]).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const starModel = yield (0, model_1.starModelMongo)(cnxMongo);
                console.log("id actualizar", id);
                console.log("calificacion", data);
                const response = yield starModel
                    .updateOne({ _id: id }, { $set: { qualification: data.qualification } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo verificar la información del las estrellas");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.StarRepository = StarRepository;
