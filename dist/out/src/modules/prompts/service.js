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
exports.PromptsService = void 0;
const messages_1 = require("../../constants/messages");
const service_1 = require("../recordsTransactions/service");
const repository_1 = require("./repository");
class PromptsService {
    constructor() {
        this.save = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.save(params);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getMyPrompts = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getMyPrompts(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getPromptsById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getPromptsById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllPrompts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllPrompts();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updatePrompt = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updatePrompt(id, payload);
                return yield this.repo.getPromptsById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.savePrice = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.savePrice(params);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getPricePrompts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getPricePrompts();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updatePricePrompt = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updatePricePrompt(id, payload);
                return yield this.repo.getPricePrompts();
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.buyPromptUser = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const buyPrompts = yield this.repo.buyPromptsUser(params);
                const payload = {
                    value: params.value,
                    companyValue: 0,
                    referValue: 0,
                    detail: `Compra paquete prompts `,
                    userId: params.userId,
                    status: true,
                    typeTransaction: 'Compra paquete prompts',
                    walletId: '64815307cd63e1f5a8982369'
                };
                yield new service_1.RecordsTransactionService().save(payload);
                return buyPrompts;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getPromptsByUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getPromptsByUser(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.PromptsRepository();
    }
}
exports.PromptsService = PromptsService;
