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
exports.CommentRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class CommentRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const commentModel = yield (0, model_1.subscribersModelMongo)(cnxMongo);
                const response = yield commentModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    getByIdFad(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const commentModel = yield (0, model_1.subscribersModelMongo)(cnxMongo);
                const response = yield commentModel.aggregate([
                    {
                        $match: {
                            course_id: id
                        }
                    },
                    {
                        $lookup: {
                            from: 'users',
                            localField: 'user_id',
                            foreignField: '_id',
                            as: 'user'
                        },
                    },
                ]).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    getSubscribeStudent(id, student) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.subscribersModelMongo)(cnxMongo);
                const response = yield postModel
                    .find({
                    $and: [
                        { course_id: id },
                        { user_id: student }
                    ]
                })
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
}
exports.CommentRepository = CommentRepository;
