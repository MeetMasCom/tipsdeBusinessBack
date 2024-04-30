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
exports.StarService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class StarService {
    constructor() {
        this.save = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.save(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByIdUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByIdUser(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByIdAll = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByIdAll(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getStarUserFadId = (user, fad) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getStarUserFadId(user, fad);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.update = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const validStar = await this.repo.getById(id);
                //if (!validStar) throw new Error("No existe la calificacion.");
                payload = Object.assign({}, payload);
                console.log(payload);
                yield this.repo.update(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.repo = new repository_1.StarRepository();
    }
}
exports.StarService = StarService;
