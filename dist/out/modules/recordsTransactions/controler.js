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
exports.getAllByUserController = exports.getAllController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const getAllController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recordsTransactionService = new service_1.RecordsTransactionService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield recordsTransactionService.getAll(),
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
exports.getAllController = getAllController;
const getAllByUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const walletId = req.query.walletId;
        const userId = req.query.userId;
        const recordsTransactionService = new service_1.RecordsTransactionService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield recordsTransactionService.getByUserId(userId, walletId),
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
exports.getAllByUserController = getAllByUserController;
