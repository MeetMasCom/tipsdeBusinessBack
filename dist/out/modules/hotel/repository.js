"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRepository = void 0;
var conection_1 = require("../../database/conection");
var mongoose_1 = require("mongoose");
var model_1 = require("./model");
var HotelRepository = /** @class */ (function () {
    function HotelRepository() {
    }
    HotelRepository.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        return [4 /*yield*/, hotelModel.create(__assign({ _id: new mongoose_1.Types.ObjectId() }, data))];
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
    HotelRepository.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        return [4 /*yield*/, hotelModel.find({ state: 3 }).exec()];
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
    HotelRepository.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        return [4 /*yield*/, hotelModel.find({ _id: id }).exec()];
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
    HotelRepository.prototype.getByIdUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        return [4 /*yield*/, hotelModel.find({ user_id: id }).exec()];
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
    HotelRepository.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        console.log(id);
                        console.log(data);
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: { state: data.state } })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo verificar la información del Hotel");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.updateComment = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        console.log(id);
                        console.log(data);
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: data })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo comentar la publicacion");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_6 = _a.sent();
                        throw new Error(error_6);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.updateHotel = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        console.log(id);
                        console.log(data);
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: data })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo comentar la publicacion");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_7 = _a.sent();
                        throw new Error(error_7);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.getHotelNotVerified = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        return [4 /*yield*/, hotelModel.find({ state: 0 }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_8 = _a.sent();
                        throw new Error(error_8);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.getHotelVerified = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        return [4 /*yield*/, hotelModel.find({ state: 1 }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_9 = _a.sent();
                        throw new Error(error_9);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.getHotels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        return [4 /*yield*/, hotelModel.find({ state: 3 }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_10 = _a.sent();
                        throw new Error(error_10);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.updateServices = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        console.log("id", id);
                        console.log("data", data);
                        return [4 /*yield*/, hotelModel
                                .updateOne({ _id: id }, { $push: { services: data.service } })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo registrar el servicio");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_11 = _a.sent();
                        throw new Error(error_11);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.updatePolicies = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        return [4 /*yield*/, hotelModel
                                .updateOne({ _id: id }, { $push: { policies: data.policies } })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo registrar las políticas");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_12 = _a.sent();
                        throw new Error(error_12);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.getByIdServices = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        return [4 /*yield*/, hotelModel.find({ _id: id }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_13 = _a.sent();
                        throw new Error(error_13);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.savePolicies = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, policiesModel, response, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.policiesModelMongo)(cnxMongo)];
                    case 2:
                        policiesModel = _a.sent();
                        return [4 /*yield*/, policiesModel.create(__assign({ _id: new mongoose_1.Types.ObjectId() }, data))];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_14 = _a.sent();
                        throw new Error(error_14);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.getByIdPolicies = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, policiesModel, response, error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        console.log("repo", id);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.policiesModelMongo)(cnxMongo)];
                    case 2:
                        policiesModel = _a.sent();
                        return [4 /*yield*/, policiesModel.find({ hotel_id: id }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_15 = _a.sent();
                        throw new Error(error_15);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.commentPolicies = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, policiesModel, response, error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.policiesModelMongo)(cnxMongo)];
                    case 2:
                        policiesModel = _a.sent();
                        console.log(id);
                        console.log(data);
                        return [4 /*yield*/, policiesModel
                                .updateOne({ hotel_id: id }, { $set: data })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo comentar la publicacion");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_16 = _a.sent();
                        throw new Error(error_16);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.verifyPolicies = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, policiesModel, response, error_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.policiesModelMongo)(cnxMongo)];
                    case 2:
                        policiesModel = _a.sent();
                        console.log("repo", id);
                        console.log("repo", data);
                        return [4 /*yield*/, policiesModel
                                .updateOne({ hotel_id: id }, { $set: data })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo verificar la información del Hotel");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_17 = _a.sent();
                        throw new Error(error_17);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.updatePoliciesHotel = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.policiesModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        console.log(id);
                        console.log(data);
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: data })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo actualizar las politicas");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_18 = _a.sent();
                        throw new Error(error_18);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HotelRepository.prototype.updateState = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, hotelModel, response, error_19;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.hotelModelMongo)(cnxMongo)];
                    case 2:
                        hotelModel = _a.sent();
                        console.log("repo", id);
                        console.log("repo", data);
                        return [4 /*yield*/, hotelModel
                                .updateOne({ _id: id }, { $set: data })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("Estado actualizado");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_19 = _a.sent();
                        throw new Error(error_19);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return HotelRepository;
}());
exports.HotelRepository = HotelRepository;
