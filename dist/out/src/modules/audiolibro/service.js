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
exports.AudioLibroService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class AudioLibroService {
    constructor() {
        this.saveAudioLibro = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveAudioLibro(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAudioLibroByIdUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAudioLibroByIdUser(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAudioLibroById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAudioLibroById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllAudioLibro = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllAudioLibro();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateAudioLibro = (id, params) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateAudioLibro(id, params);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.AudioLibroRepository();
    }
}
exports.AudioLibroService = AudioLibroService;
