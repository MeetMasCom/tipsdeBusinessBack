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
const moment_1 = __importDefault(require("moment"));
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
const repository_2 = require("../user/repository");
const repository_3 = require("../like/repository");
class ChatService {
    constructor() {
        this.getMessagues = (userTo, userFrom) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.repo.getAll(userTo, userFrom);
                let chats = [];
                let response = [];
                data.forEach(chat => {
                    chats.push({
                        messague: chat.messague,
                        userFrom: chat.userFrom,
                        userTo: chat.userTo,
                        createdAt: (0, moment_1.default)(chat.createdAt).format("YYYY-MM-DD")
                    });
                });
                yield Promise.all(chats.map((chat) => __awaiter(this, void 0, void 0, function* () {
                    const element = response.find(f => f.date == chat.createdAt);
                    if (!element) {
                        response.push({
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
                    return chat;
                })));
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getAllUsersMessagues = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield new repository_3.LikeRepository().getAllUserLike(userId);
                const users = [];
                yield Promise.all(data.map((like) => __awaiter(this, void 0, void 0, function* () {
                    const user = yield new repository_2.UserRepository().getById(like.user_id);
                    if (user) {
                        users.push(user);
                    }
                })));
                return users;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.saveMessagues = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.save(data);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.repo = new repository_1.ChatRepository();
    }
}
exports.ChatService = ChatService;
