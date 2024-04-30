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
exports.updateSpamController = exports.getUserSpamController = exports.getDetailSpamController = exports.getByIdSpamController = exports.getAllSpamController = exports.createSpamController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createSpamController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        console.log(payload);
        const spamService = new service_1.SpamService();
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
exports.createSpamController = createSpamController;
const getAllSpamController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const spamService = new service_1.SpamService();
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
exports.getAllSpamController = getAllSpamController;
const getByIdSpamController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const spamService = new service_1.SpamService();
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
exports.getByIdSpamController = getByIdSpamController;
const getDetailSpamController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const spamService = new service_1.SpamService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield spamService.getDetailSpam(id),
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
exports.getDetailSpamController = getDetailSpamController;
const getUserSpamController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const spamService = new service_1.SpamService();
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
exports.getUserSpamController = getUserSpamController;
const updateSpamController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        console.log(id);
        console.log(payload);
        const spamService = new service_1.SpamService();
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
exports.updateSpamController = updateSpamController;
