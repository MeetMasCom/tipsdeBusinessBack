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
exports.HotelRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class HotelRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //console.log(data);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                const response = yield hotelModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
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
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                const response = yield hotelModel.find({ state: 3 }).exec();
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
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                const response = yield hotelModel.find({ _id: id }).exec();
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
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                const response = yield hotelModel.find({ user_id: id }).exec();
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
                const userModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                console.log(id);
                console.log(data);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { state: data.state } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo verificar la información del Hotel");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateComment(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                console.log(id);
                console.log(data);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: data })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo comentar la publicacion");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateHotel(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                console.log(id);
                console.log(data);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: data })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo comentar la publicacion");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getHotelNotVerified() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                const response = yield hotelModel.find({ state: 0 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getHotelVerified() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                const response = yield hotelModel.find({ state: 1 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getHotels() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                const response = yield hotelModel.find({ state: 3 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateServices(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                console.log("id", id);
                console.log("data", data);
                const response = yield hotelModel
                    .updateOne({ _id: id }, { $push: { services: data.service } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo registrar el servicio");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updatePolicies(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                const response = yield hotelModel
                    .updateOne({ _id: id }, { $push: { policies: data.policies } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo registrar las políticas");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdServices(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                const response = yield hotelModel.find({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    savePolicies(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const policiesModel = yield (0, model_1.policiesModelMongo)(cnxMongo);
                const response = yield policiesModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdPolicies(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("repo", id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const policiesModel = yield (0, model_1.policiesModelMongo)(cnxMongo);
                const response = yield policiesModel.find({ hotel_id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    commentPolicies(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const policiesModel = yield (0, model_1.policiesModelMongo)(cnxMongo);
                console.log(id);
                console.log(data);
                const response = yield policiesModel
                    .updateOne({ hotel_id: id }, { $set: data })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo comentar la publicacion");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    verifyPolicies(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const policiesModel = yield (0, model_1.policiesModelMongo)(cnxMongo);
                console.log("repo", id);
                console.log("repo", data);
                const response = yield policiesModel
                    .updateOne({ hotel_id: id }, { $set: data })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo verificar la información del Hotel");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updatePoliciesHotel(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.policiesModelMongo)(cnxMongo);
                console.log(id);
                console.log(data);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: data })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar las politicas");
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
                const hotelModel = yield (0, model_1.hotelModelMongo)(cnxMongo);
                console.log("repo", id);
                console.log("repo", data);
                const response = yield hotelModel
                    .updateOne({ _id: id }, { $set: data })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("Estado actualizado");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.HotelRepository = HotelRepository;
