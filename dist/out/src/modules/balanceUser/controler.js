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
exports.updateBalance = exports.getAllRetreatController = exports.getAllRetreatUserController = exports.retreatController = exports.reviewRetreatController = exports.reviewRechargeController = exports.rechargeController = exports.getBalanceUserController = exports.getAllController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const getAllController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const balanceUserService = new service_1.BalanceUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield balanceUserService.getAll(id),
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
const getBalanceUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const balanceUserService = new service_1.BalanceUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield balanceUserService.getBalanceUser(id),
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
exports.getBalanceUserController = getBalanceUserController;
const rechargeController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const balanceUserService = new service_1.BalanceUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield balanceUserService.recharge(data),
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
exports.rechargeController = rechargeController;
const reviewRechargeController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const balanceUserService = new service_1.BalanceUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield balanceUserService.reviewRecharge(data),
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
exports.reviewRechargeController = reviewRechargeController;
const reviewRetreatController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const balanceUserService = new service_1.BalanceUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield balanceUserService.reviewRetreat(data),
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
exports.reviewRetreatController = reviewRetreatController;
const retreatController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const balanceUserService = new service_1.BalanceUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield balanceUserService.retreat(data),
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
exports.retreatController = retreatController;
const getAllRetreatUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const balanceUserService = new service_1.BalanceUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield balanceUserService.getAllRetreatByUser(id),
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
exports.getAllRetreatUserController = getAllRetreatUserController;
const getAllRetreatController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const balanceUserService = new service_1.BalanceUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield balanceUserService.getAllRetreat(),
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
exports.getAllRetreatController = getAllRetreatController;
const updateBalance = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(id);
        const payload = req.body;
        console.log(payload);
        const balanceUserService = new service_1.BalanceUserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield balanceUserService.updateBalance(id, payload),
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
exports.updateBalance = updateBalance;
