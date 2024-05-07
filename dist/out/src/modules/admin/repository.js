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
exports.AdminRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
const model_2 = require("../user/model");
const messages_1 = require("../../constants/messages");
class AdminRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adminModel = yield (0, model_1.adminModelMongo)(cnxMongo);
                const response = yield adminModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByEmailOrUserName(email, userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adminModel = yield (0, model_1.adminModelMongo)(cnxMongo);
                const response = yield adminModel
                    .findOne({ $or: [{ email }, { userName }] })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    saveOtp(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userOtpModel = yield (0, model_2.userOtpModelMongo)(cnxMongo);
                const response = yield userOtpModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    validOtp(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userOtpModel = yield (0, model_2.userOtpModelMongo)(cnxMongo);
                const response = yield userOtpModel
                    .findOne({
                    used: false,
                    otp: data.otp,
                    userId: data.userId,
                })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateOtp(id, used) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userOtpModel = yield (0, model_2.userOtpModelMongo)(cnxMongo);
                const response = yield userOtpModel
                    .updateOne({ _id: id }, { $set: { used } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error(messages_1.ERR_400);
                yield cnxMongo.close();
                return response.upsertedId;
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
                const adminModel = yield (0, model_1.adminModelMongo)(cnxMongo);
                const response = yield adminModel.find().exec();
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
                console.log(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adminModel = yield (0, model_1.adminModelMongo)(cnxMongo);
                const response = yield adminModel.find({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByRol(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adminModel = yield (0, model_1.adminModelMongo)(cnxMongo);
                const response = yield adminModel.find({ 'rol.item_id': id }).exec();
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
                const adminModel = yield (0, model_1.adminModelMongo)(cnxMongo);
                const response = yield adminModel.find({ user_id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateAdmin(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adminModel = yield (0, model_1.adminModelMongo)(cnxMongo);
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
    updateState(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adminModel = yield (0, model_1.adminModelMongo)(cnxMongo);
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
exports.AdminRepository = AdminRepository;
