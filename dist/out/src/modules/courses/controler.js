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
exports.updateStateController = exports.verifyCourseUserController = exports.buyCourseUserController = exports.getTopCoursesController = exports.getCourseByUserStudent = exports.getCourseByUserController = exports.getCourseByCategoriaController = exports.getAllInLiveController = exports.getAllCoursesController = exports.getCourseByIdController = exports.getCourseByIdUserController = exports.createCourseController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createCourseController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = req.body;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.saveCourse(newPost),
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
exports.createCourseController = createCourseController;
const getCourseByIdUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const tipo = req.query.tipo;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getCourseByIdUser(id, tipo),
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
exports.getCourseByIdUserController = getCourseByIdUserController;
const getCourseByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getCourseById(id),
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
exports.getCourseByIdController = getCourseByIdController;
const getAllCoursesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getAllCourses(),
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
exports.getAllCoursesController = getAllCoursesController;
const getAllInLiveController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getAllInLive(),
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
exports.getAllInLiveController = getAllInLiveController;
const getCourseByCategoriaController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cat = req.query.cat;
        const tipo = req.query.tipo;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getCourseByCategoria(cat, tipo),
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
const getCourseByUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cat = req.query.cat;
        const tipo = req.query.tipo;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getCourseByUser(cat, tipo),
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
const getCourseByUserStudent = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.query.user;
        console.log(user);
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getCourseByUserStudent(user),
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
exports.getCourseByUserStudent = getCourseByUserStudent;
const getTopCoursesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getTopCourses(),
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
exports.getTopCoursesController = getTopCoursesController;
const buyCourseUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        console.log(payload);
        const membershipService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield membershipService.saveBuyCourse(payload),
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
exports.buyCourseUserController = buyCourseUserController;
const verifyCourseUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const idC = req.query.idC;
        const membershipService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield membershipService.verifyCourseUser(id, idC),
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
exports.verifyCourseUserController = verifyCourseUserController;
const updateStateController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const adminService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adminService.updateState(id, payload),
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
exports.updateStateController = updateStateController;
