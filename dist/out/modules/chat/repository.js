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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRepository = void 0;
var conection_1 = require("../../database/conection");
var mongoose_1 = require("mongoose");
var model_1 = require("./model");
var moment_1 = __importDefault(require("moment"));
var ChatRepository = /** @class */ (function () {
    function ChatRepository() {
    }
    ChatRepository.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, chatModel, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.chatModelMongo)(cnxMongo)];
                    case 2:
                        chatModel = _a.sent();
                        return [4 /*yield*/, chatModel.create(__assign({ _id: new mongoose_1.Types.ObjectId() }, data))];
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
    ChatRepository.prototype.getAll = function (userTo, userFrom) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, chatModel, response1, response2, unionResponse, data_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.chatModelMongo)(cnxMongo)];
                    case 2:
                        chatModel = _a.sent();
                        return [4 /*yield*/, chatModel.find({ userTo: userTo, userFrom: userFrom }).exec()];
                    case 3:
                        response1 = _a.sent();
                        return [4 /*yield*/, chatModel.find({ userTo: userFrom, userFrom: userTo }).exec()];
                    case 4:
                        response2 = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 5:
                        _a.sent();
                        unionResponse = response1.concat(response2);
                        data_1 = [];
                        unionResponse.forEach(function (item) {
                            data_1.push({
                                messague: item.messague,
                                userFrom: item.userFrom,
                                userTo: item.userTo,
                                createdAt: item.createdAt = (0, moment_1.default)(item.createdAt)
                            });
                        });
                        return [2 /*return*/, data_1.sort(function (a, b) { return a.createdAt.diff(b.createdAt); })];
                    case 6:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ChatRepository.prototype.getResponse = function (userTo, userFrom) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, chatModel, response1, response2, unionResponse, data_2, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.chatModelMongo)(cnxMongo)];
                    case 2:
                        chatModel = _a.sent();
                        return [4 /*yield*/, chatModel.find({ userTo: userTo, userFrom: userFrom }).exec()];
                    case 3:
                        response1 = _a.sent();
                        return [4 /*yield*/, chatModel.find({ userTo: userFrom, userFrom: userTo }).exec()];
                    case 4:
                        response2 = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 5:
                        _a.sent();
                        unionResponse = response1.concat(response2);
                        data_2 = [];
                        unionResponse.forEach(function (item) {
                            data_2.push({
                                messague: item.messague,
                                userFrom: item.userFrom,
                                userTo: item.userTo,
                                createdAt: item.createdAt = (0, moment_1.default)(item.createdAt)
                            });
                        });
                        return [2 /*return*/, data_2.sort(function (a, b) { return a.createdAt.diff(b.createdAt); })];
                    case 6:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ChatRepository.prototype.getAllUserMessages = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, chatModel, response1, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.chatModelMongo)(cnxMongo)];
                    case 2:
                        chatModel = _a.sent();
                        return [4 /*yield*/, chatModel.aggregate([
                                {
                                    $match: {
                                        $or: [
                                            { userTo: userId },
                                            { userFrom: userId }
                                        ]
                                    }
                                },
                                {
                                    $group: {
                                        _id: null,
                                        users: { $addToSet: "$userTo" },
                                        usersFrom: { $addToSet: "$userFrom" }
                                    }
                                },
                                {
                                    $project: {
                                        _id: 0,
                                        users: { $setUnion: ["users", "usersFrom"] }
                                    }
                                },
                                {
                                    $lookup: {
                                        from: "users",
                                        localField: "users",
                                        foreignField: "_id",
                                        as: "usuarios"
                                    }
                                },
                                {
                                    $unwind: "$usuarios"
                                },
                                {
                                    $project: {
                                        "_id": "$usuarios._id",
                                        "nombre": "$usuarios._userName"
                                    }
                                }
                            ]).exec()];
                    case 3:
                        response1 = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        //const unionResponse = response1.concat(response2) as ChatI[];
                        // const data: ChatI[] = []
                        // response1.forEach(item => {
                        //     data.push({
                        //         messague: item.messague,
                        //         userFrom: item.userFrom,
                        //         userTo: item.userTo,
                        //         createdAt: item.createdAt = moment(item.createdAt)
                        //     })
                        // })
                        return [2 /*return*/, response1];
                    case 5:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return ChatRepository;
}());
exports.ChatRepository = ChatRepository;
