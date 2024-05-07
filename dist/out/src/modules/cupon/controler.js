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
exports.getCuponCodigoController = exports.restarCuponController = exports.getCuponActivoUserController = exports.updateStateController = exports.updateCuponController = exports.getUserCuponController = exports.getByIdCuponController = exports.getAllCuponController = exports.createCuponController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createCuponController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const spamService = new service_1.CuponService();
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
exports.createCuponController = createCuponController;
const getAllCuponController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spamService = new service_1.CuponService();
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
const getByIdCuponController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const spamService = new service_1.CuponService();
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
exports.getByIdCuponController = getByIdCuponController;
const getUserCuponController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const spamService = new service_1.CuponService();
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
        const spamService = new service_1.CuponService();
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
        const adminService = new service_1.CuponService();
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
const getCuponActivoUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const spamService = new service_1.CuponService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield spamService.getCuponActivoUser(id),
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
exports.getCuponActivoUserController = getCuponActivoUserController;
const restarCuponController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const spamService = new service_1.CuponService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield spamService.restarCupon(id, payload),
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
exports.restarCuponController = restarCuponController;
const getCuponCodigoController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const codigo = req.params.codigo;
        console.log(codigo);
        const spamService = new service_1.CuponService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield spamService.getByCodigo(codigo),
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
exports.getCuponCodigoController = getCuponCodigoController;
