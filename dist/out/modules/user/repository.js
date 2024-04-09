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
exports.UserRepository = void 0;
var conection_1 = require("../../database/conection");
var mongoose_1 = require("mongoose");
var model_1 = require("./model");
var messages_1 = require("../../constants/messages");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel.create(__assign({ _id: new mongoose_1.Types.ObjectId() }, data))];
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
    UserRepository.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel.find().exec()];
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
    UserRepository.prototype.online = function (id, status) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: { online: status } })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo actualizar la información del usuario");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.modifiedCount];
                    case 5:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel.findOne({ _id: id }).exec()];
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
    UserRepository.prototype.getByIdentification = function (identification) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel.findOne({ identification: identification }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.getByEmailOrUserName = function (email, userName) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .findOne({ $or: [{ email: email }, { userName: userName }] })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_6 = _a.sent();
                        throw new Error(error_6);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: __assign({}, data) })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo actualizar la información del usuario");
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
    UserRepository.prototype.updatePassword = function (id, password) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: { password: password } })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo actualizar la información del usuario");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_8 = _a.sent();
                        throw new Error(error_8);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.saveOtp = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userOtpModel, response, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userOtpModelMongo)(cnxMongo)];
                    case 2:
                        userOtpModel = _a.sent();
                        return [4 /*yield*/, userOtpModel.create(__assign({ _id: new mongoose_1.Types.ObjectId() }, data))];
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
    UserRepository.prototype.validOtp = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userOtpModel, response, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userOtpModelMongo)(cnxMongo)];
                    case 2:
                        userOtpModel = _a.sent();
                        return [4 /*yield*/, userOtpModel
                                .findOne({
                                used: false,
                                otp: data.otp,
                                userId: data.userId,
                            })
                                .exec()];
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
    UserRepository.prototype.updateOtp = function (id, used) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userOtpModel, response, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userOtpModelMongo)(cnxMongo)];
                    case 2:
                        userOtpModel = _a.sent();
                        return [4 /*yield*/, userOtpModel
                                .updateOne({ _id: id }, { $set: { used: used } })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error(messages_1.ERR_400);
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
    UserRepository.prototype.getByIdUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var Id, cnxMongo, userModel, response, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        Id = new mongoose_1.Types.ObjectId(id);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel.aggregate([
                                {
                                    $match: { _id: Id },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "studies",
                                        foreignField: "_id",
                                        as: "studies",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "zodiac_sign",
                                        foreignField: "_id",
                                        as: "signe",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "sport",
                                        foreignField: "_id",
                                        as: "sport",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "smoke",
                                        foreignField: "_id",
                                        as: "smoke",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "drink",
                                        foreignField: "_id",
                                        as: "drink",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "countries",
                                        localField: "currentResidence",
                                        foreignField: "_id",
                                        as: "residence",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "civil_status",
                                        foreignField: "_id",
                                        as: "civil_status",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "childs",
                                        foreignField: "_id",
                                        as: "childs",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "career",
                                        foreignField: "_id",
                                        as: "career",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "policy",
                                        foreignField: "_id",
                                        as: "policy",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "countries",
                                        localField: "country",
                                        foreignField: "_id",
                                        as: "country",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "gender",
                                        foreignField: "_id",
                                        as: "genero",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "body",
                                        foreignField: "_id",
                                        as: "cuerpo",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "catalogues",
                                        localField: "preferences",
                                        foreignField: "_id",
                                        as: "prefer",
                                    },
                                },
                            ]).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_12 = _a.sent();
                        throw new Error(error_12);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.getAllUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel.find().exec()];
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
    UserRepository.prototype.saveReferUser = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, referralsModel, response, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        console.log(data);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.referralsModelMongo)(cnxMongo)];
                    case 2:
                        referralsModel = _a.sent();
                        return [4 /*yield*/, referralsModel.create(__assign({ _id: new mongoose_1.Types.ObjectId() }, data))];
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
    UserRepository.prototype.getReferUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, referralsModel, response, error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.referralsModelMongo)(cnxMongo)];
                    case 2:
                        referralsModel = _a.sent();
                        return [4 /*yield*/, referralsModel.find({ userId: userId }).exec()];
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
    UserRepository.prototype.getUserGender = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var gender, cnxMongo, userModel, response, error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        gender = new mongoose_1.Types.ObjectId(id);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel.aggregate([
                                {
                                    $match: {
                                        gender: gender,
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "countries",
                                        localField: "country",
                                        foreignField: "_id",
                                        as: "country",
                                    },
                                },
                                { $sample: { size: 10 } }
                            ]).sort({ createdAt: -1 }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_16 = _a.sent();
                        throw new Error(error_16);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.getUserActive = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var gender, cnxMongo, userModel, response, error_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        gender = new mongoose_1.Types.ObjectId(id);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel.aggregate([
                                {
                                    $match: [{
                                            gender: gender
                                        }, { state: 2 }]
                                },
                                {
                                    $lookup: {
                                        from: "countries",
                                        localField: "country",
                                        foreignField: "_id",
                                        as: "country",
                                    },
                                },
                                { $sample: { size: 10 } }
                            ]).sort({ createdAt: -1 }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_17 = _a.sent();
                        throw new Error(error_17);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // async getAllUserSearch(body: SearchUsers) {
    //   try {
    //     const genero = new Types.ObjectId(body.preferences);
    //     const cnxMongo = await connectionMongo();
    //     const userModel = await userModelMongo(cnxMongo);
    //     const response = await userModel
    //       .find({
    //         country: body.country,  
    //         //gender:body.preferences,       
    //         age: {
    //           $gt: body.age && body.age[0],
    //           $lt: body.age && body.age[1],
    //         },
    //         civil_status: body.stateCivil !== "" ? body.stateCivil : undefined,
    //         height: body.heigth !== null ? body.heigth : undefined,
    //         eyeColor: body.eyeColor !== "" ? body.eyeColor : undefined,
    //         body: body.bodyType !== "" ? body.bodyType : undefined,
    //         drink: body.drink !== "" ? body.drink : undefined,
    //         smoke: body.smoke !== "" ? body.smoke : undefined,
    //         childs: body.childrens !== "" ? body.childrens : undefined
    //       })
    //       .exec();
    //     await cnxMongo.close();
    //     return response as UserI[];
    //   } catch (error) {
    //     throw new Error(error as string);
    //   }
    // }
    UserRepository.prototype.getAllUserSearch = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        console.log("repositorio", body);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .find({
                                $or: [
                                    { userName: { $regex: body.userName, $options: 'i' } },
                                    { firstname: { $regex: body.firstname, $options: 'i' } },
                                    { lastname: { $regex: body.lastname, $options: 'i' } }
                                ]
                            })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        console.log("respuesta", response);
                        return [2 /*return*/, response];
                    case 5:
                        error_18 = _a.sent();
                        throw new Error(error_18);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.getUserOnline = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var gender, cnxMongo, userModel, response, error_19;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        gender = new mongoose_1.Types.ObjectId(id);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .aggregate([
                                {
                                    $match: {
                                        $and: [{ gender: gender }, { online: true }],
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "countries",
                                        localField: "country",
                                        foreignField: "_id",
                                        as: "country",
                                    },
                                },
                            ])
                                .sort({ createdAt: -1 })
                                .limit(10)
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_19 = _a.sent();
                        throw new Error(error_19);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.updateAgreements = function (id, agreements) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: { agreements: agreements } })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo actualizar la información del usuario");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_20 = _a.sent();
                        throw new Error(error_20);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.updateSocialAgreements = function (id, socialAgreements) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_21;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: { socialAgreements: socialAgreements } })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo actualizar la información del usuario");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_21 = _a.sent();
                        throw new Error(error_21);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.verifyUser = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_22;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: __assign({}, data) }).exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo actualizar la información del usuario");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_22 = _a.sent();
                        throw new Error(error_22);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.getUserSocialAgreements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_23;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel.find({ socialAgreements: true }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_23 = _a.sent();
                        throw new Error(error_23);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.updateType = function (id, type) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_24;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: { type: type } })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo actualizar la información del usuario");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_24 = _a.sent();
                        throw new Error(error_24);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.getVerifyTeacher = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_25;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel.find({ typeUser: id }).sort({ createdAt: -1 }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_25 = _a.sent();
                        throw new Error(error_25);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.updateCupo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_26;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .updateOne({ usersId: 1 }, { $set: __assign({}, data) })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo actualizar la información del usuario");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_26 = _a.sent();
                        throw new Error(error_26);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.getCupoLimite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_27;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .findOne({ usersId: 1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_27 = _a.sent();
                        throw new Error(error_27);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserRepository.prototype.usersincupo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_28;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .aggregate([
                                {
                                    $lookup: {
                                        from: "cuponUser",
                                        localField: "_id",
                                        foreignField: "user_cupon",
                                        as: "cupon"
                                    }
                                },
                                {
                                    $match: {
                                        cupon: { $size: 0 } // Filtrar los clientes sin pedidos
                                    }
                                },
                                {
                                    $project: {
                                        _id: 1,
                                        userName: 1,
                                        firstname: 1,
                                        email: 1,
                                        lastname: 1,
                                    }
                                }
                            ])];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_28 = _a.sent();
                        throw new Error(error_28);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
