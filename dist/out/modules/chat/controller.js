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
exports.saveMessaguesController = exports.getAllUsersMessaguesController = exports.getMessaguesController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const getMessaguesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userTo = req.query.userTo;
        const userFrom = req.query.userFrom;
        const chatService = new service_1.ChatService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield chatService.getMessagues(userTo, userFrom),
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
exports.getMessaguesController = getMessaguesController;
var getAllUsersMessaguesController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, chatService, _a, error_2;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                userId = req.query.userId;
                console.log(userId);
                chatService = new service_1.ChatService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, chatService.getAllUsersMessagues(userId)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_2 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_2.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
const getAllUsersMessaguesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.id;
        const chatService = new service_1.ChatService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield chatService.getAllUsersMessagues(userId),
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
exports.getAllUsersMessaguesController = getAllUsersMessaguesController;
const saveMessaguesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chatService = new service_1.ChatService();
        const data = req.body;
        return (0, responseHelper_1.serviceResponse)({
            data: yield chatService.saveMessagues(data),
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
exports.saveMessaguesController = saveMessaguesController;
