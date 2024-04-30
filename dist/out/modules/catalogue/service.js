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
exports.CatalogueService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class CatalogueService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAll();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByOptions = (code) => __awaiter(this, void 0, void 0, function* () {
            try {
                const catalogue = yield this.repo.getByCode(code);
                if (!catalogue) {
                    throw new Error(messages_1.ERR_400);
                }
                return yield this.repo.getByOptions(catalogue._id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.create = (payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.save(payload);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.CatalogueRepository();
    }
}
exports.CatalogueService = CatalogueService;
