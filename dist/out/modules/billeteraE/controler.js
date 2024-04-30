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
exports.updateBilleteraEmpresaEstado = exports.getByIdUserBilleteraController = exports.getByIdBilleteraController = exports.getAllBilleteraController = exports.createBilleteraController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createBilleteraController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBilletera = req.body;
        const billeteraService = new service_1.BilleteraService();
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
exports.createBilleteraController = createBilleteraController;
const getAllBilleteraController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const billeteraService = new service_1.BilleteraService();
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
exports.getAllBilleteraController = getAllBilleteraController;
const getByIdBilleteraController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const billeteraService = new service_1.BilleteraService();
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
exports.getByIdBilleteraController = getByIdBilleteraController;
const getByIdUserBilleteraController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const billeteraService = new service_1.BilleteraService();
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
exports.getByIdUserBilleteraController = getByIdUserBilleteraController;
const updateBilleteraEmpresaEstado = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const billeteraService = new service_1.BilleteraService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield billeteraService.update(id, payload),
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
exports.updateBilleteraEmpresaEstado = updateBilleteraEmpresaEstado;
