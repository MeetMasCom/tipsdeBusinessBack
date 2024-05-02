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
exports.StudentRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
class StudentRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                const response = yield likeModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const likeModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                const response = yield likeModel.aggregate([
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
                    .exec();
                const result = [];
                for (var i = 0; i < response.length; i++) {
                    result.push({
                        id_user: response[i].user[0]._id,
                        username: response[i].user[0].userName,
                        correo: response[i].user[0].email,
                        tipo: response[i].user[0].type,
                    });
                }
                yield cnxMongo.close();
                return result;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getValidStudent(id, student) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.studentModelMongo)(cnxMongo);
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
    getCourseByUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(user);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                // const response = await postModel.aggregate([        
                //   {
                //     $lookup: {
                //       from: "course",
                //       localField: "course_id",
                //       foreignField: "_id",
                //       as: "course",
                //     },
                //   },{
                //     $match: { user_id: objectId },
                //   },
                // ])        
                //   .sort({ createdAt: -1 })
                //   .exec();
                const response = yield postModel.distinct("course_id", { user_id: objectId }).exec();
                console.log("response", response);
                const response1 = yield postModel.aggregate([
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
                ]).exec();
                console.log("response1", response1);
                const result = [];
                for (var i = 0; i < response1.length; i++) {
                    result.push({
                        id_curso: response1[i].course_id,
                        user: response[i].user,
                    });
                }
                yield cnxMongo.close();
                //return response1 as unknown as StudentI[];
                return result;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getCourseByStudent(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectId = new mongoose_1.Types.ObjectId(user);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                const response = yield postModel.aggregate([
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
                    .exec();
                const result = [];
                for (var i = 0; i < response.length; i++) {
                    result.push({
                        id_curso: response[i].course[0]._id,
                        title: response[i].course[0].title,
                        description: response[i].course[0].description,
                        user: response[i].user,
                    });
                }
                yield cnxMongo.close();
                return response;
                //return result;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getCourseByCategoria(student, cat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(student);
                console.log(cat);
                const cat1 = parseInt(cat, 10);
                ;
                const idUser = new mongoose_1.Types.ObjectId(student);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const postModel = yield (0, model_1.studentModelMongo)(cnxMongo);
                const response = yield postModel.aggregate([
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
                    .exec();
                const result = [];
                for (var i = 0; i < response.length; i++) {
                    result.push({
                        id_curso: response[i].course[0]._id,
                        title: response[i].course[0].title,
                        description: response[i].course[0].description,
                        user: response[i].user,
                    });
                }
                yield cnxMongo.close();
                return response;
                //return result;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
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
                        return [2 /*return*/, response1];
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
