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
exports.TopicRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class TopicRepository {
    saveTopic(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.topicModelMongo)(cnxMongo);
                const response = yield postModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getTopicByIdModule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.topicModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({ module_id: id })
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
    getTopicById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.topicModelMongo)(cnxMongo);
                const response = yield postModel
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
    updateTopic(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const adminModel = yield (0, model_1.topicModelMongo)(cnxMongo);
                const response = yield adminModel
                    .updateOne({ _id: id }, { $set: data })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo modificar el tema");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.TopicRepository = TopicRepository;
