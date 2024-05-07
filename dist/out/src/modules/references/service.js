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
exports.Referenceservice = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class Referenceservice {
    constructor() {
        this.save = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.save(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllReferences = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllReferences();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getMyReferences = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getMyReferences(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByIdCourse = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByIdCourse(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.saveReferencesTips = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveReferencesTips(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByIdTips = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByIdTips(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.ReferencesRepository();
    }
}
exports.Referenceservice = Referenceservice;
