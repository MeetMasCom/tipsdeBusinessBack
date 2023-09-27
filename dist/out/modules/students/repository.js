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
exports.StudentRepository = void 0;
var conection_1 = require("../../database/conection");
var mongoose_1 = require("mongoose");
var model_1 = require("./model");
var StudentRepository = /** @class */ (function () {
    function StudentRepository() {
    }
    StudentRepository.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, likeModel, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.studentModelMongo)(cnxMongo)];
                    case 2:
                        likeModel = _a.sent();
                        return [4 /*yield*/, likeModel.create(__assign({ _id: new mongoose_1.Types.ObjectId() }, data))];
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
    StudentRepository.prototype.getByIdCourse = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, cnxMongo, likeModel, response, result, i, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        objectId = new mongoose_1.Types.ObjectId(id);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.studentModelMongo)(cnxMongo)];
                    case 2:
                        likeModel = _a.sent();
                        return [4 /*yield*/, likeModel.aggregate([
                                {
                                    $match: { course_id: objectId },
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
                                .sort({ created_at: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        result = [];
                        for (i = 0; i < response.length; i++) {
                            result.push({
                                id_user: response[i].user[0]._id,
                                username: response[i].user[0].userName,
                                correo: response[i].user[0].email,
                                tipo: response[i].user[0].type,
                            });
                        }
                        return [4 /*yield*/, cnxMongo.close()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, result];
                    case 5:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StudentRepository.prototype.getValidStudent = function (id, student) {
        return __awaiter(this, void 0, void 0, function () {
            var cnxMongo, postModel, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.studentModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel
                                .find({
                                $and: [
                                    { course_id: id },
                                    { user_id: student }
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
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StudentRepository.prototype.getCourseByUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, cnxMongo, postModel, response, response1, result, i, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        objectId = new mongoose_1.Types.ObjectId(user);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.studentModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel.distinct("course_id", { user_id: objectId }).exec()];
                    case 3:
                        response = _a.sent();
                        console.log("response", response);
                        return [4 /*yield*/, postModel.aggregate([
                                {
                                    $match: { course_id: { $in: response } }
                                },
                                {
                                    $lookup: {
                                        from: "users",
                                        localField: "user_id",
                                        foreignField: "_id",
                                        as: "user"
                                    }
                                }
                            ]).exec()];
                    case 4:
                        response1 = _a.sent();
                        console.log("response1", response1);
                        result = [];
                        for (i = 0; i < response1.length; i++) {
                            result.push({
                                id_curso: response1[i].course_id,
                                user: response[i].user,
                            });
                        }
                        return [4 /*yield*/, cnxMongo.close()];
                    case 5:
                        _a.sent();
                        //return response1 as unknown as StudentI[];
                        return [2 /*return*/, result];
                    case 6:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    StudentRepository.prototype.getCourseByStudent = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var objectId, cnxMongo, postModel, response, result, i, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        objectId = new mongoose_1.Types.ObjectId(user);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.studentModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel.aggregate([
                                {
                                    $lookup: {
                                        from: "course",
                                        localField: "course_id",
                                        foreignField: "_id",
                                        as: "course",
                                    },
                                },
                                {
                                    $lookup: {
                                        from: "user",
                                        localField: "user_id",
                                        foreignField: "_id",
                                        as: "user",
                                    },
                                }, {
                                    $match: { user_id: objectId },
                                },
                            ])
                                .sort({ createdAt: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        result = [];
                        for (i = 0; i < response.length; i++) {
                            result.push({
                                id_curso: response[i].course[0]._id,
                                title: response[i].course[0].title,
                                description: response[i].course[0].description,
                                user: response[i].user,
                            });
                        }
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
    StudentRepository.prototype.getCourseByCategoria = function (student, cat) {
        return __awaiter(this, void 0, void 0, function () {
            var cat1, idUser, cnxMongo, postModel, response, result, i, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        console.log(student);
                        console.log(cat);
                        cat1 = parseInt(cat, 10);
                        ;
                        idUser = new mongoose_1.Types.ObjectId(student);
                        return [4 /*yield*/, (0, conection_1.connectionMongo)()];
                    case 1:
                        cnxMongo = _a.sent();
                        return [4 /*yield*/, (0, model_1.studentModelMongo)(cnxMongo)];
                    case 2:
                        postModel = _a.sent();
                        return [4 /*yield*/, postModel.aggregate([
                                {
                                    $lookup: {
                                        from: "course",
                                        localField: "course_id",
                                        foreignField: "_id",
                                        as: "course",
                                    },
                                }, {
                                    $match: { $and: [
                                            { user_id: idUser },
                                            { 'course.categoria': cat1 }
                                        ] },
                                },
                            ])
                                .sort({ createdAt: -1 })
                                .exec()];
                    case 3:
                        response = _a.sent();
                        result = [];
                        for (i = 0; i < response.length; i++) {
                            result.push({
                                id_curso: response[i].course[0]._id,
                                title: response[i].course[0].title,
                                description: response[i].course[0].description,
                                user: response[i].user,
                            });
                        }
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
    return StudentRepository;
}());
exports.StudentRepository = StudentRepository;
