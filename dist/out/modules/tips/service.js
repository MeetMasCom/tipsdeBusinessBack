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
exports.TipsService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class TipsService {
    constructor() {
        this.saveTips = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveTips(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getTipsByIdUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getTipsByIdUser(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getTipsById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getTipsById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllTips = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllTips();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateTips = (id, params) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateTips(id, params);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.TipsRepository();
    }
}
exports.TipsService = TipsService;
