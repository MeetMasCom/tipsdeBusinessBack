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
exports.ModuleService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class ModuleService {
    constructor() {
        this.saveModule = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveModule(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getModuleByIdCourse = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getModuleByIdCourse(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getModuleById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getModuleById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getModulesAndTopic = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getModulesAndTopic(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.saveTest = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveTest(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getTestById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getTestById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getTestByIdModule = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getTestByIdModule(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.saveAnswer = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveAnswer(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateModule = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.updateModule(id, payload);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.ModuleRepository();
    }
}
exports.ModuleService = ModuleService;
