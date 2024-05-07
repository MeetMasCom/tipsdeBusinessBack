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
exports.PostService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class PostService {
    constructor() {
        this.savePost = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.savePost(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getPostByIdUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getPostByIdUser(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getPostUserProfile = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getPostUserProfile(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getPostById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getPostById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getPostByType = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getPostByType(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getPostProfileUserId = (id, profile) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getPostProfileUserId(id, profile);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateProfile = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateProfile(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getCountPost = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getCountPost(id, payload);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.deletePost = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.deletePost(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.PostRepository();
    }
}
exports.PostService = PostService;
