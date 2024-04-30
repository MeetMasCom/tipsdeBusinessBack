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
exports.BalanceCompanyRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
const model_2 = require("../balanceUser/model");
class BalanceCompanyRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const balanceCompanyModel = yield (0, model_1.balanceCompanyModelMongo)(cnxMongo);
                const response = yield balanceCompanyModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
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
                const balanceCompanyModel = yield (0, model_1.balanceCompanyModelMongo)(cnxMongo);
                const response = yield balanceCompanyModel.find().exec();
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
                const balanceCompanyModel = yield (0, model_1.balanceCompanyModelMongo)(cnxMongo);
                const response = yield balanceCompanyModel.findOne({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByBalanceCompany() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const balanceCompanyModel = yield (0, model_1.balanceCompanyModelMongo)(cnxMongo);
                const response = yield balanceCompanyModel.find().exec();
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
                const balanceCompanyModel = yield (0, model_1.balanceCompanyModelMongo)(cnxMongo);
                const response = yield balanceCompanyModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) }, { upsert: true })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información de balance empresa");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllRechargs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const rechargeUserModel = yield (0, model_2.rechargeUserModelMongo)(cnxMongo);
                const response = yield rechargeUserModel.find({ status: 0 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.BalanceCompanyRepository = BalanceCompanyRepository;
