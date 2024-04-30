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
exports.getCourseByCategoriaController = exports.getCourseByStudentController = exports.getCourseByUserController = exports.getValidStudentController = exports.getStudentByIdCourseController = exports.createStudentCourseController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createStudentCourseController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const likeService = new service_1.StudentService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.save(payload),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.createStudentCourseController = createStudentCourseController;
const getStudentByIdCourseController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const likeService = new service_1.StudentService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.getByIdCourse(id),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.getStudentByIdCourseController = getStudentByIdCourseController;
const getValidStudentController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const student = req.query.student;
        const userService = new service_1.StudentService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getValidStudent(id, student),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.getValidStudentController = getValidStudentController;
const getCourseByUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.params.id;
        const userService = new service_1.StudentService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getCourseByUser(user),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.getCourseByUserController = getCourseByUserController;
const getCourseByStudentController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.StudentService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getCourseByStudent(id),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.getCourseByStudentController = getCourseByStudentController;
const getCourseByCategoriaController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cat = req.query.cat;
        const student = req.params.idS;
        const userService = new service_1.StudentService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getCourseByCategoria(student, cat),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.getCourseByCategoriaController = getCourseByCategoriaController;
