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
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
const moment_1 = __importDefault(require("moment"));
class ChatRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const chatModel = yield (0, model_1.chatModelMongo)(cnxMongo);
                const response = yield chatModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAll(userTo, userFrom) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const chatModel = yield (0, model_1.chatModelMongo)(cnxMongo);
                const response1 = yield chatModel.find({ userTo, userFrom }).exec();
                const response2 = yield chatModel.find({ userTo: userFrom, userFrom: userTo }).exec();
                yield cnxMongo.close();
                const unionResponse = response1.concat(response2);
                const data = [];
                unionResponse.forEach(item => {
                    data.push({
                        messague: item.messague,
                        userFrom: item.userFrom,
                        userTo: item.userTo,
                        createdAt: item.createdAt = (0, moment_1.default)(item.createdAt)
                    });
                });
                return data.sort((a, b) => a.createdAt.diff(b.createdAt));
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getResponse(userTo, userFrom) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const chatModel = yield (0, model_1.chatModelMongo)(cnxMongo);
                const response1 = yield chatModel.find({ userTo, userFrom }).exec();
                const response2 = yield chatModel.find({ userTo: userFrom, userFrom: userTo }).exec();
                yield cnxMongo.close();
                const unionResponse = response1.concat(response2);
                const data = [];
                unionResponse.forEach(item => {
                    data.push({
                        messague: item.messague,
                        userFrom: item.userFrom,
                        userTo: item.userTo,
                        createdAt: item.createdAt = (0, moment_1.default)(item.createdAt)
                    });
                });
                return data.sort((a, b) => a.createdAt.diff(b.createdAt));
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllUserMessages(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const chatModel = yield (0, model_1.chatModelMongo)(cnxMongo);
                const response1 = yield chatModel.aggregate([
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
                ]).exec();
                yield cnxMongo.close();
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
                return response1;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.ChatRepository = ChatRepository;
