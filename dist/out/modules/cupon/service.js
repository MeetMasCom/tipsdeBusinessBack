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
exports.CuponService = void 0;
const messages_1 = require("../../constants/messages");
const stringHelper_1 = require("../../helpers/stringHelper");
const repository_1 = require("./repository");
class CuponService {
    constructor() {
        this.save = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const stringHelper = new stringHelper_1.StringHelper();
                const codigo = stringHelper.generateRandomSixDigitNumber();
                params.codigo = codigo;
                return yield this.repo.save(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllSpam = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllSpam();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByIdSpam = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByIdSpam(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getDetailSpam = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getDetailSpam(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getUserSpam = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getUserSpam(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateSpam = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.updateSpam(id, payload);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateState = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.updateState(id, payload);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getCuponActivoUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getCuponActivoUser(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.restarCupon = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.restarCupon(id, payload);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByCodigo = (codigo) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByCodigo(codigo);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.CuponRepository();
    }
}
exports.CuponService = CuponService;
