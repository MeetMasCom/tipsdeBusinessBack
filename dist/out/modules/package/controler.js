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
exports.updateStateController = exports.updatePackageController = exports.getPackageActivosController = exports.getByIdPackageController = exports.getAllPackageController = exports.createPackageController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createPackageController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const paqueteService = new service_1.PackageService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield paqueteService.save(payload),
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
exports.createPackageController = createPackageController;
const getAllPackageController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paqueteService = new service_1.PackageService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield paqueteService.getAll(),
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
exports.getAllPackageController = getAllPackageController;
const getByIdPackageController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const paqueteService = new service_1.PackageService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield paqueteService.getById(id),
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
exports.getByIdPackageController = getByIdPackageController;
const getPackageActivosController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paqueteService = new service_1.PackageService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield paqueteService.getActivos(),
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
exports.getPackageActivosController = getPackageActivosController;
const updatePackageController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const paqueteService = new service_1.PackageService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield paqueteService.updatePackage(id, payload),
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
exports.updatePackageController = updatePackageController;
const updateStateController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const paqueteService = new service_1.PackageService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield paqueteService.updateState(id, payload),
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
