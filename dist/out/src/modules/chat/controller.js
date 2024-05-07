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
const getAllUsersMessaguesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.userId;
        console.log(userId);
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
