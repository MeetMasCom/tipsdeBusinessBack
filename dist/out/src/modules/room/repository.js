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
exports.RoomRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class RoomRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const roomModel = yield (0, model_1.roomModelMongo)(cnxMongo);
                const response = yield roomModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdHotelRoom(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const roomModel = yield (0, model_1.roomModelMongo)(cnxMongo);
                const response = yield roomModel.find({ hotel_id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getRoomById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const roomModel = yield (0, model_1.roomModelMongo)(cnxMongo);
                const response = yield roomModel.find({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    addPrice(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const roomModel = yield (0, model_1.roomModelMongo)(cnxMongo);
                const response = yield roomModel
                    .updateOne({ _id: id }, { $push: { price: data } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo registrar el precio");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updatePrice(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(data);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const roomModel = yield (0, model_1.roomModelMongo)(cnxMongo);
                const response = yield roomModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo registrar el precio");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.RoomRepository = RoomRepository;
