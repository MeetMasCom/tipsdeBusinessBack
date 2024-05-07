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
exports.createOtpController = exports.validateOtpController = exports.getByIdUserBilleteraUserController = exports.getByIdBilleteraUserController = exports.getAllBilleterasUserController = exports.updateBilleteraUserController = exports.createBilleteraUserController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createBilleteraUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBilletera = req.body;
        const billeteraService = new service_1.BilleteraUService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield billeteraService.save(newBilletera),
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
exports.createBilleteraUserController = createBilleteraUserController;
const updateBilleteraUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateBilletera = req.body;
        const id = req.params.id;
        const billeteraService = new service_1.BilleteraUService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield billeteraService.update(id, updateBilletera),
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
exports.updateBilleteraUserController = updateBilleteraUserController;
const getAllBilleterasUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const billeteraService = new service_1.BilleteraUService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield billeteraService.getAll(),
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
exports.getAllBilleterasUserController = getAllBilleterasUserController;
const getByIdBilleteraUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const billeteraService = new service_1.BilleteraUService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield billeteraService.getById(id),
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
exports.getByIdBilleteraUserController = getByIdBilleteraUserController;
const getByIdUserBilleteraUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const billeteraService = new service_1.BilleteraUService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield billeteraService.getByIdUser(id),
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
exports.getByIdUserBilleteraUserController = getByIdUserBilleteraUserController;
const validateOtpController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBilletera = req.body;
        const billeteraService = new service_1.BilleteraUService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield billeteraService.validOpt(newBilletera),
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
exports.validateOtpController = validateOtpController;
const createOtpController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const billeteraService = new service_1.BilleteraUService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield billeteraService.createOtp(id),
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
exports.createOtpController = createOtpController;
