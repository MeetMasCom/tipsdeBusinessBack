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
exports.RecordsTransactionService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class RecordsTransactionService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAll();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByUserId = (userId, walletId) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByUserId(userId, walletId);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.save = (payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.save(payload);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.update = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validRecord = yield this.repo.getById(id);
                if (!validRecord)
                    throw new Error("Registro no existe.");
                yield this.repo.update(id, payload);
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.repo = new repository_1.RecordsTransactionRepository();
    }
}
exports.RecordsTransactionService = RecordsTransactionService;
