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
exports.getByIdUserFadController = exports.getByIdFadController = exports.getAllFadController = exports.createFadController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createFadController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { user_id, name, description } = req.body;
        const newFad = { user_id, name, description, picture: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path };
        const fadService = new service_1.FadService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield fadService.save(newFad),
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
exports.createFadController = createFadController;
const getAllFadController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fadService = new service_1.FadService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield fadService.getAll(),
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
exports.getAllFadController = getAllFadController;
const getByIdFadController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const fadService = new service_1.FadService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield fadService.getById(id),
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
exports.getByIdFadController = getByIdFadController;
const getByIdUserFadController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const fadService = new service_1.FadService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield fadService.getByIdUser(id),
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
exports.getByIdUserFadController = getByIdUserFadController;
