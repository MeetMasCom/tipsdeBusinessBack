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
exports.createAnswerController = exports.getTestByIdModuleController = exports.getTestByIdController = exports.createTestController = exports.getModulesAnTopicController = exports.getModuleByIdController = exports.getModuleByIdCourseController = exports.createModuleController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createModuleController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = req.body;
        const userService = new service_1.ModuleService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.saveModule(newPost),
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
exports.updateModuleController = exports.createAnswerController = exports.getTestByIdModuleController = exports.getTestByIdController = exports.createTestController = exports.getModulesAnTopicController = exports.getModuleByIdController = exports.getModuleByIdCourseController = exports.createModuleController = void 0;
var responseHelper_1 = require("../../helpers/responseHelper");
var service_1 = require("./service");
var createModuleController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var newPost, userService, _a, error_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                newPost = req.body;
                userService = new service_1.ModuleService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.saveModule(newPost)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_1 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_1.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createModuleController = createModuleController;
const getModuleByIdCourseController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.ModuleService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getModuleByIdCourse(id),
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
exports.getModuleByIdCourseController = getModuleByIdCourseController;
const getModuleByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.ModuleService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getModuleById(id),
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
exports.getModuleByIdController = getModuleByIdController;
const getModulesAnTopicController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.ModuleService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getModulesAndTopic(id),
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
exports.getModulesAnTopicController = getModulesAnTopicController;
//TEST
const createTestController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = req.body;
        const userService = new service_1.ModuleService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.saveTest(newPost),
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
exports.createTestController = createTestController;
const getTestByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(id);
        const userService = new service_1.ModuleService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getTestById(id),
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
exports.getTestByIdController = getTestByIdController;
const getTestByIdModuleController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(id);
        const userService = new service_1.ModuleService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getTestByIdModule(id),
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
exports.getTestByIdModuleController = getTestByIdModuleController;
//answer
const createAnswerController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = req.body;
        console.log(newPost);
        const userService = new service_1.ModuleService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.saveAnswer(newPost),
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
exports.createAnswerController = createAnswerController;
var updateModuleController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, adminService, _a, error_9;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                adminService = new service_1.ModuleService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, adminService.updateModule(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_9 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_9.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateModuleController = updateModuleController;
