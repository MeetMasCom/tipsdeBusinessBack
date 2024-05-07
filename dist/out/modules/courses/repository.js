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
exports.CoursesRepository = void 0;
var conection_1 = require("../../database/conection");
var mongoose_1 = require("mongoose");
var model_1 = require("./model");
var CoursesRepository = /** @class */ (function () {
    function CoursesRepository() {
    }
    CoursesRepository.prototype.saveCourse = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
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
    CoursesRepository.prototype.getCourseByIdUser = function (id, tipo) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({
                                $and: [
                                    { user_id: id },
                                    { type: tipo }
                                ]
                            })
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
    CoursesRepository.prototype.getCourseById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
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
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CoursesRepository.prototype.getAllCourses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({
                                type: 1,
                                state: 1
                            })
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
    CoursesRepository.prototype.getAllInLive = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fecha, cnxMongo, postModel, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        fecha = new Date();
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({
                                $and: [
                                    { type: 2 },
                                    { fecha: { $gte: fecha } },
                                ]
                            })
                                .sort({ createdAt: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CoursesRepository.prototype.getCourseByCategoria = function (cat, tipo) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({
                                $and: [
                                    { categoria: cat },
                                    { type: tipo }
                                ]
                            })
                                .sort({ createdAt: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_6 = _a.sent();
                        throw new Error(error_6);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CoursesRepository.prototype.getCourseByUser = function (cat, tipo) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({
                                $and: [
                                    { categoria: cat },
                                    { type: tipo }
                                ]
                            })
                                .sort({ createdAt: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_7 = _a.sent();
                        throw new Error(error_7);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CoursesRepository.prototype.getCourseByUserStudent = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, cnxMongo, postModel, response, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        objectId = new mongoose_1.Types.ObjectId(user);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel.aggregate([
                                {
                                    $match: { user_id: objectId },
                                },
                                {
                                    $lookup: {
                                        from: "users",
                                        localField: "user_id",
                                        foreignField: "_id",
                                        as: "user",
                                    },
                                }
                            ])
                                .sort({ createdAt: -1 })
                                .exec()];
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
    CoursesRepository.prototype.getTopCourses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({ type: 1 })
                                .sort({ createdAt: -1 }).limit(15)
                                .exec()];
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
    CoursesRepository.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, membershipModel, response, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
                    case 2:
                        membershipModel = _a.sent();
                        return [4 /*yield*/, membershipModel.findOne({ _id: id }).exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_10 = _a.sent();
                        throw new Error(error_10);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CoursesRepository.prototype.saveCourseUser = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, membershipUserModel, response, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseUserModelMongo)(cnxMongo)];
                    case 2:
                        membershipUserModel = _a.sent();
                        return [4 /*yield*/, membershipUserModel.create(__assign({ _id: new mongoose_1.Types.ObjectId() }, data))];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_11 = _a.sent();
                        throw new Error(error_11);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CoursesRepository.prototype.verifyCourseUser = function (id, idC) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseUserModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({ userId: id, courseId: idC })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response];
                    case 5:
                        error_12 = _a.sent();
                        throw new Error(error_12);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CoursesRepository.prototype.updateState = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, adminModel, response, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.courseModelMongo)(cnxMongo)];
                    case 2:
                        adminModel = _a.sent();
                        return [4 /*yield*/, adminModel
                                .updateOne({ _id: id }, { $set: data })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        if (response.modifiedCount == 0)
                            throw new Error("No se pudo cambiar el estado");
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, response.upsertedId];
                    case 5:
                        error_13 = _a.sent();
                        throw new Error(error_13);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return CoursesRepository;
}());
exports.CoursesRepository = CoursesRepository;
