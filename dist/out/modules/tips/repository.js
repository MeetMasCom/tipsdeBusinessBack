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
exports.TipsRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class TipsRepository {
    saveTips(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.tipsModelMongo)(cnxMongo);
                const response = yield postModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getTipsByIdUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.tipsModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({ user_id: id })
                    .sort({ createdAt: 1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getTipsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.tipsModelMongo)(cnxMongo);
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
    getAllTips() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.tipsModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({ state: 1 })
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
    updateTips(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const tipsModel = yield (0, model_1.tipsModelMongo)(cnxMongo);
                const response = yield tipsModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo verificar la información del tips");
                yield cnxMongo.close();
                return response.modifiedCount;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
var conection_1 = require("../../database/conection");
var mongoose_1 = require("mongoose");
var model_1 = require("./model");
var TipsRepository = /** @class */ (function () {
    function TipsRepository() {
    }
    TipsRepository.prototype.saveTips = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.tipsModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel.create(__assign({ _id: new mongoose_1.Types.ObjectId() }, data))];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TipsRepository.prototype.getTipsByIdUser = function (id, type) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.tipsModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({
                                $and: [{ user_id: id }, { type: type }]
                            })
                                .sort({ createdAt: 1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TipsRepository.prototype.getTipsById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.tipsModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({ _id: id })
                                .sort({ createdAt: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TipsRepository.prototype.getAllTips = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.tipsModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({ $and: [
                                    { state: 1 },
                                    { type: 1 }
                                ] })
                                .sort({ createdAt: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TipsRepository.prototype.updateTips = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, tipsModel, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.tipsModelMongo)(cnxMongo)];
                    case 2:
                        tipsModel = _a.sent();
                        return [4 /*yield*/, tipsModel
                                .updateOne({ _id: id }, { $set: __assign({}, data) })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo verificar la información del tips");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.modifiedCount];
                    case 5:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return TipsRepository;
}());
exports.TipsRepository = TipsRepository;
