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
exports.AdsRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class AdsRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adsModel = yield (0, model_1.adsModelMongo)(cnxMongo);
                const response = yield adsModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adsModel = yield (0, model_1.adsModelMongo)(cnxMongo);
                const response = yield adsModel.find({ state: 1 }).sort({ updated_at: -1 }).exec();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAdsById(adsId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adsModel = yield (0, model_1.adsModelMongo)(cnxMongo);
                const response = yield adsModel.findOne({ _id: adsId }).sort({ updated_at: -1 }).exec();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adsModel = yield (0, model_1.adsModelMongo)(cnxMongo);
                const response = yield adsModel.find({ userId }).sort({ updated_at: -1 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adsModel = yield (0, model_1.adsModelMongo)(cnxMongo);
                const response = yield adsModel
                    .updateOne({ _id: id }, { $set: { state: 3 } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del AdsI");
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateStateAds(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adsModel = yield (0, model_1.adsModelMongo)(cnxMongo);
                const response = yield adsModel
                    .updateOne({ _id: id }, { $set: { state: data.state, comentary: data.comentary } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del anuncio");
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateAds(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adsModel = yield (0, model_1.adsModelMongo)(cnxMongo);
                const response = yield adsModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del anuncio");
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    visitAds(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const visitAdsModel = yield (0, model_1.visitAdsModelMongo)(cnxMongo);
                const response = yield visitAdsModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    countVisitAds(adsId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const visitAdsModel = yield (0, model_1.visitAdsModelMongo)(cnxMongo);
                const response = yield visitAdsModel.find({
                    adsId
                });
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    // logica de los usuarios
    getByIdAds(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adsModel = yield (0, model_1.adsModelMongo)(cnxMongo);
                const response = yield adsModel.find({ userId: { $ne: id }, state: 0, stop: false })
                    .sort({ updated_at: -1 }).
                    exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.AdsRepository = AdsRepository;
