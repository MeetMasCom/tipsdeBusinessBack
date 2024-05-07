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
exports.deleteCupoUserController = exports.updateStateController = exports.updateCuponController = exports.getUserCuponController = exports.getByIdAdminCuponController = exports.getAllCuponController = exports.createCuponUserController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createCuponUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const spamService = new service_1.CuponUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield spamService.save(payload),
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
exports.createCuponUserController = createCuponUserController;
const getAllCuponController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spamService = new service_1.CuponUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield spamService.getAllSpam(),
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
exports.getAllCuponController = getAllCuponController;
const getByIdAdminCuponController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const spamService = new service_1.CuponUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield spamService.getByIdSpam(id),
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
exports.getByIdAdminCuponController = getByIdAdminCuponController;
const getUserCuponController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const spamService = new service_1.CuponUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield spamService.getUserSpam(id),
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
exports.getUserCuponController = getUserCuponController;
const updateCuponController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        console.log(id);
        console.log(payload);
        const spamService = new service_1.CuponUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield spamService.updateSpam(id, payload),
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
exports.updateCuponController = updateCuponController;
const updateStateController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const adminService = new service_1.CuponUserService();
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
const deleteCupoUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(id);
        const adminService = new service_1.CuponUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adminService.deleteCupoUser(id),
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
exports.deleteCupoUserController = deleteCupoUserController;
