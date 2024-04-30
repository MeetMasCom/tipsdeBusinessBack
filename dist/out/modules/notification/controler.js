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
exports.updateSateController = exports.getUserLikeController = exports.getByIdUserNotificationController = exports.createNotificationController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createNotificationController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const notificacionService = new service_1.NotificationService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield notificacionService.save(payload),
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
exports.createNotificationController = createNotificationController;
const getByIdUserNotificationController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const notificacionService = new service_1.NotificationService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield notificacionService.getByIdUser(id),
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
exports.getByIdUserNotificationController = getByIdUserNotificationController;
const getUserLikeController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const notificacionService = new service_1.NotificationService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield notificacionService.getUserLike(id),
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
exports.getUserLikeController = getUserLikeController;
const updateSateController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const notificacionService = new service_1.NotificationService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield notificacionService.updateState(id),
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
exports.updateSateController = updateSateController;
