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
exports.BalanceUserRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class BalanceUserRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const balanceUserModel = yield (0, model_1.balanceUserModelMongo)(cnxMongo);
                const response = yield balanceUserModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
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
                const balanceUserModel = yield (0, model_1.balanceUserModelMongo)(cnxMongo);
                const response = yield balanceUserModel.find().exec();
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
                const balanceUserModel = yield (0, model_1.balanceUserModelMongo)(cnxMongo);
                const response = yield balanceUserModel.findOne({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByUserId(id, walletId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const balanceUserModel = yield (0, model_1.balanceUserModelMongo)(cnxMongo);
                const response = yield balanceUserModel.findOne({ userId: id, walletId }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const balanceUserModel = yield (0, model_1.balanceUserModelMongo)(cnxMongo);
                const response = yield balanceUserModel.findOne({ userId: id }).exec();
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
                const balanceUserModel = yield (0, model_1.balanceUserModelMongo)(cnxMongo);
                const response = yield balanceUserModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) }, { upsert: true })
                    .exec();
                if (response.modifiedCount == 0 && response.upsertedCount == 0)
                    throw new Error("No se pudo actualizar la información balance usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateBalance(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const balanceUserModel = yield (0, model_1.balanceUserModelMongo)(cnxMongo);
                const response = yield balanceUserModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información balance usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getRechargeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const rechargeUserModel = yield (0, model_1.rechargeUserModelMongo)(cnxMongo);
                const response = yield rechargeUserModel.findOne({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    createRecharge(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const rechargeUserModel = yield (0, model_1.rechargeUserModelMongo)(cnxMongo);
                const response = yield rechargeUserModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    reviewRecharge(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const rechargeUserModel = yield (0, model_1.rechargeUserModelMongo)(cnxMongo);
                const response = yield rechargeUserModel
                    .updateOne({ _id: data.id }, { $set: { amount: data.value, status: data.status, remark: data.remark } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información recarga");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    reviewRetreat(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const retreatUserModel = yield (0, model_1.retreatUserModelMongo)(cnxMongo);
                const response = yield retreatUserModel
                    .updateOne({ _id: data.id }, { $set: { amount: data.value, status: data.status, remark: data.remark, file: data.file } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información recarga");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllRechargByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const rechargeUserModel = yield (0, model_1.rechargeUserModelMongo)(cnxMongo);
                const response = yield rechargeUserModel.find({ userId: id }).sort({ updatedAt: -1 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    createRetreat(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const retreatUserModel = yield (0, model_1.retreatUserModelMongo)(cnxMongo);
                const response = yield retreatUserModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllRetreatByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const retreatUserModel = yield (0, model_1.retreatUserModelMongo)(cnxMongo);
                const response = yield retreatUserModel.find({ userId }).sort({ updatedAt: -1 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getRetreatById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const retreatUserModel = yield (0, model_1.retreatUserModelMongo)(cnxMongo);
                const response = yield retreatUserModel.findOne({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllRetreat() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const retreatUserModel = yield (0, model_1.retreatUserModelMongo)(cnxMongo);
                const response = yield retreatUserModel.find({ status: 0 }).sort({ updatedAt: -1 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.BalanceUserRepository = BalanceUserRepository;
