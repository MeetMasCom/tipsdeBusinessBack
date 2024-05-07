"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
var conection_1 = require("../../database/conection");
var mongoose_1 = require("mongoose");
var model_1 = require("./model");
var model_2 = require("../user/model");
var PostRepository = /** @class */ (function () {
    function PostRepository() {
    }
    PostRepository.prototype.savePost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.postModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel.create(__assign({ _id: new mongoose_1.Types.ObjectId() }, data))];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PostRepository.prototype.getPostByIdUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.postModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({ user_id: id })
                                .sort({ createdAt: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PostRepository.prototype.getPostUserProfile = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.postModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({ $and: [{ user_id: id }] })
                                .sort({ createdAt: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PostRepository.prototype.getPostById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.postModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({ _id: id })
                                .sort({ createdAt: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //   async getPostByType(id:string) {
    //     try {
    //       const cnxMongo = await connectionMongo();
    //       const postModel = await postModelMongo(cnxMongo);
    //       const response = await postModel.find({ type: id })
    //       .sort({createdAt:-1}).exec();
    //       await cnxMongo.close();
    //       return response as unknown as PostI[];
    //     } catch (error) {
    //       console.log(error)
    //       throw new Error(error as string);
    //     }
    //   }
    // }
    PostRepository.prototype.getPostByType = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, cnxMongo, postModel, resultado, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        objectId = new mongoose_1.Types.ObjectId(id);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.postModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .aggregate([
                                {
                                    $match: { profile_id: objectId },
                                },
                                {
                                    $lookup: {
                                        from: "users",
                                        localField: "user_id",
                                        foreignField: "_id",
                                        as: "user",
                                    },
                                },
                            ])
                                .sort({ createdAt: -1 }).limit(10)
                                .exec()];
                    case 3:
                        resultado = _a.sent();
                        return [2 /*return*/, resultado];
                    case 4:
                        error_5 = _a.sent();
                        console.log(error_5);
                        throw new Error(error_5);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PostRepository.prototype.getPostProfileUserId = function (id, profile) {
        return __awaiter(this, void 0, void 0, function () {
            var IdUser, IdProfile, cnxMongo, postModel, resultado, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        IdUser = new mongoose_1.Types.ObjectId(id);
                        IdProfile = new mongoose_1.Types.ObjectId(profile);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.postModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .aggregate([
                                {
                                    $lookup: {
                                        from: "users",
                                        localField: "user_id",
                                        foreignField: "_id",
                                        as: "user",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "profile",
                                        localField: "profile_id",
                                        foreignField: "_id",
                                        as: "profile",
                                    },
                                },
                                {
                                    $match: {
                                        $and: [{ "user._id": IdUser }, { profile_id: IdProfile }],
                                    },
                                },
                            ])
                                .sort({ createdAt: -1 }).limit(10)
                                .exec()];
                    case 3:
                        resultado = _a.sent();
                        return [2 /*return*/, resultado];
                    case 4:
                        error_6 = _a.sent();
                        console.log(error_6);
                        throw new Error(error_6);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PostRepository.prototype.updateProfile = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, userModel, response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_2.userModelMongo)(cnxMongo)];
                    case 2:
                        userModel = _a.sent();
                        return [4 /*yield*/, userModel
                                .updateOne({ _id: id }, { $set: data })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo actualizar el perfil");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_7 = _a.sent();
                        throw new Error(error_7);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PostRepository.prototype.getCountPost = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var val, IdProfile, cnxMongo, postModel, response, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        val = 0;
                        IdProfile = new mongoose_1.Types.ObjectId(data);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.postModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel.countDocuments({
                                user_id: id,
                                profile_id: data
                            }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_8 = _a.sent();
                        throw new Error(error_8);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PostRepository.prototype.deletePost = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.postModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel.deleteOne({ _id: id }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_9 = _a.sent();
                        throw new Error(error_9);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return PostRepository;
}());
exports.PostRepository = PostRepository;
