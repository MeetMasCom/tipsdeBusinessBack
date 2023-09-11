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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
var moment_1 = __importDefault(require("moment"));
var messages_1 = require("../../constants/messages");
var repository_1 = require("./repository");
var repository_2 = require("../user/repository");
var repository_3 = require("../like/repository");
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
            var data, users_1, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, new repository_3.LikeRepository().getAllUserLike(userId)];
                    case 1:
                        data = _a.sent();
                        users_1 = [];
                        return [4 /*yield*/, Promise.all(data.map(function (like) { return __awaiter(_this, void 0, void 0, function () {
                                var user;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new repository_2.UserRepository().getById(like.user_id)];
                                        case 1:
                                            user = _a.sent();
                                            if (user) {
                                                users_1.push(user);
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, users_1];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2 /*return*/];
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
    return ChatService;
}());
exports.ChatService = ChatService;
