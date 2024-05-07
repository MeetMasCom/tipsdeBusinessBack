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
exports.LikePostRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class LikePostRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likePostModelMongo)(cnxMongo);
                const response = yield likeModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    validateLike(id, idLike) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Id = new mongoose_1.Types.ObjectId(id);
                const IdLike = new mongoose_1.Types.ObjectId(idLike);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likePostModelMongo)(cnxMongo);
                const response = yield likeModel
                    .findOne({
                    $and: [{ post_id: id }, { userlike: idLike }],
                })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    likePostUser(id, idL) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idP = new mongoose_1.Types.ObjectId(id);
                const id_userLike = new mongoose_1.Types.ObjectId(idL);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likePostModelMongo)(cnxMongo);
                const response = yield likeModel.find({ post_id: idP }, { userlike: id_userLike })
                    .sort({ created_at: -1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    deleteLikePost(idU, idUL) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idP = new mongoose_1.Types.ObjectId(idU);
                const id_userLike = new mongoose_1.Types.ObjectId(idUL);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likePostModelMongo)(cnxMongo);
                const response = yield likeModel.deleteOne({ post_id: idP }, { userlike: id_userLike })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    countLikePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idP = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.likePostModelMongo)(cnxMongo);
                const response = yield likeModel.count({ post_id: idP })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.LikePostRepository = LikePostRepository;
