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
exports.QuestionService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class QuestionService {
    constructor() {
        this.saveTopic = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveTopic(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getQuestionByIdSubPrompts = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getQuestionByIdSubPrompts(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getQuestionById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getQuestionById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.QuestionRepository();
    }
}
exports.QuestionService = QuestionService;
