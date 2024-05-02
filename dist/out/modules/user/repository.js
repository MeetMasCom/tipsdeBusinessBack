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
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
const messages_1 = require("../../constants/messages");
class UserRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
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
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.find().exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    online(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { online: status } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.modifiedCount;
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
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.findOne({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdentification(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.findOne({ identification }).exec();
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
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
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
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updatePassword(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { password } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
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
                const userOtpModel = yield (0, model_1.userOtpModelMongo)(cnxMongo);
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
                const userOtpModel = yield (0, model_1.userOtpModelMongo)(cnxMongo);
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
                const userOtpModel = yield (0, model_1.userOtpModelMongo)(cnxMongo);
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
    getByIdUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Id = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.aggregate([
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
                ]).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.find().exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    saveReferUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(data);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const referralsModel = yield (0, model_1.referralsModelMongo)(cnxMongo);
                const response = yield referralsModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getReferUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const referralsModel = yield (0, model_1.referralsModelMongo)(cnxMongo);
                const response = yield referralsModel.find({ userId }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUserGender(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gender = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.aggregate([
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
                ]).sort({ createdAt: -1 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUserActive(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gender = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.aggregate([
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
                ]).sort({ createdAt: -1 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllUserSearch(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const genero = new mongoose_1.Types.ObjectId(body.preferences);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .find({
                    country: body.country,
                    //gender:body.preferences,       
                    age: {
                        $gt: body.age && body.age[0],
                        $lt: body.age && body.age[1],
                    },
                    civil_status: body.stateCivil !== "" ? body.stateCivil : undefined,
                    height: body.heigth !== null ? body.heigth : undefined,
                    eyeColor: body.eyeColor !== "" ? body.eyeColor : undefined,
                    body: body.bodyType !== "" ? body.bodyType : undefined,
                    drink: body.drink !== "" ? body.drink : undefined,
                    smoke: body.smoke !== "" ? body.smoke : undefined,
                    childs: body.childrens !== "" ? body.childrens : undefined
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
    getUserOnline(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gender = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
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
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateAgreements(id, agreements) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { agreements } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateSocialAgreements(id, socialAgreements) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { socialAgreements } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    verifyUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) }).exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUserSocialAgreements() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.find({ socialAgreements: true }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateType(id, type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { type } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getVerifyTeacher(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.find({ typeUser: id }).sort({ createdAt: -1 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateCupo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ usersId: 1 }, { $set: Object.assign({}, data) })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getCupoLimite() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .findOne({ usersId: 1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    usersincupo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
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
                ]);
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.UserRepository = UserRepository;
