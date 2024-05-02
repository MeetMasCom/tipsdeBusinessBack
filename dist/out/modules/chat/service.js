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
exports.ChatService = void 0;
var moment_1 = __importDefault(require("moment"));
var messages_1 = require("../../constants/messages");
var repository_1 = require("./repository");
var ChatService = /** @class */ (function () {
    function ChatService() {
        var _this = this;
        this.getMessagues = function (userTo, userFrom) { return __awaiter(_this, void 0, void 0, function () {
            var data, chats_1, response_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repo.getAll(userTo, userFrom)];
                    case 1:
                        data = _a.sent();
                        chats_1 = [];
                        response_1 = [];
                        data.forEach(function (chat) {
                            chats_1.push({
                                messague: chat.messague,
                                userFrom: chat.userFrom,
                                userTo: chat.userTo,
                                createdAt: (0, moment_1.default)(chat.createdAt).format("YYYY-MM-DD")
                            });
                        });
                        return [4 /*yield*/, Promise.all(chats_1.map(function (chat) { return __awaiter(_this, void 0, void 0, function () {
                                var element;
                                return __generator(this, function (_a) {
                                    element = response_1.find(function (f) { return f.date == chat.createdAt; });
                                    if (!element) {
                                        response_1.push({
                                            date: chat.createdAt,
                                            message: [{
                                                    current: chat.userFrom != userFrom ? true : false,
                                                    data: chat.messague,
                                                }]
                                        });
                                    }
                                    else {
                                        element.message.push({
                                            current: chat.userFrom != userFrom ? true : false,
                                            data: chat.messague,
                                        });
                                    }
                                    return [2 /*return*/, chat];
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response_1];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getAllUsersMessagues = function (userId) { return __awaiter(_this, void 0, void 0, function () {
            var data, users, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new repository_1.ChatRepository().getAllUserMessages(userId)];
                    case 1:
                        data = _a.sent();
                        users = [];
                        // await Promise.all(data.map(async (like) => {
                        //     const user = await new UserRepository().getById(like.user_id!);
                        //     if (user) {
                        //         users.push(user)
                        //     }
                        // }));
                        //const user = await new UserRepository().getById(userId);  
                        return [2 /*return*/, data];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.saveMessagues = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.save(data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.repo = new repository_1.ChatRepository();
    }
}
exports.ChatService = ChatService;
