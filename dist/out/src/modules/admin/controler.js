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
exports.getVerifyTeacher = exports.updateStateController = exports.updateAdminController = exports.getAdminByRolController = exports.getByIdAdminController = exports.getAllAdminController = exports.otpController = exports.loginController = exports.createAdminController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const service_2 = require("../user/service");
const createAdminController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const adminService = new service_1.AdminService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adminService.save(payload),
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
exports.createAdminController = createAdminController;
const loginController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const adminService = new service_1.AdminService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adminService.login(payload),
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
exports.loginController = loginController;
const otpController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const adminService = new service_1.AdminService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adminService.validOpt(payload),
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
exports.otpController = otpController;
const getAllAdminController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminService = new service_1.AdminService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adminService.getAll(),
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
exports.getAllAdminController = getAllAdminController;
const getByIdAdminController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const adminService = new service_1.AdminService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adminService.getById(id),
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
exports.getByIdAdminController = getByIdAdminController;
const getAdminByRolController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const adminService = new service_1.AdminService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adminService.getByRol(id),
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
exports.getAdminByRolController = getAdminByRolController;
const updateAdminController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const adminService = new service_1.AdminService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adminService.updateAdmin(id, payload),
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
exports.updateAdminController = updateAdminController;
const updateStateController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const adminService = new service_1.AdminService();
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
const getVerifyTeacher = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.typeUser;
        const userService = new service_2.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getVerifyTeacher(id),
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
exports.getVerifyTeacher = getVerifyTeacher;
