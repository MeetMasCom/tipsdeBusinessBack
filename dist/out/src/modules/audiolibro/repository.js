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
exports.AudioLibroRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class AudioLibroRepository {
    saveAudioLibro(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(data);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const audiolibroModel = yield (0, model_1.audiolibroModelMongo)(cnxMongo);
                const response = yield audiolibroModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAudioLibroByIdUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const audiolibroModel = yield (0, model_1.audiolibroModelMongo)(cnxMongo);
                const response = yield audiolibroModel
                    .find({ user_id: id })
                    .sort({ createdAt: 1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAudioLibroById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const audiolibroModel = yield (0, model_1.audiolibroModelMongo)(cnxMongo);
                const response = yield audiolibroModel
                    .find({ _id: id })
                    .sort({ createdAt: -1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllAudioLibro() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const audiolibroModel = yield (0, model_1.audiolibroModelMongo)(cnxMongo);
                const response = yield audiolibroModel
                    .find({ state: 1 })
                    .sort({ createdAt: -1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateAudioLibro(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const audiolibroModel = yield (0, model_1.audiolibroModelMongo)(cnxMongo);
                const response = yield audiolibroModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo verificar la información del audio libro");
                yield cnxMongo.close();
                return response.modifiedCount;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.AudioLibroRepository = AudioLibroRepository;
