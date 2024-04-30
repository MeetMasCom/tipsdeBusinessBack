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
exports.getByIdServiceController = exports.getByIdHotelController = exports.getAllServiceController = exports.createServiceController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createServiceController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const serviceService = new service_1.ServiceService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield serviceService.save(payload),
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
exports.createServiceController = createServiceController;
const getAllServiceController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceService = new service_1.ServiceService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield serviceService.getAll(),
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
exports.getAllServiceController = getAllServiceController;
const getByIdHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const serviceService = new service_1.ServiceService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield serviceService.getByIdHotel(id),
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
exports.getByIdHotelController = getByIdHotelController;
const getByIdServiceController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const serviceService = new service_1.ServiceService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield serviceService.getByIdService(id),
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
exports.getByIdServiceController = getByIdServiceController;
