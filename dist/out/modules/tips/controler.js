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
exports.updateTipsController = exports.getAllTipsController = exports.getTipsByIdController = exports.getTipsByIdUserController = exports.createTipsController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createTipsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        // const newTopic={user_id,title,description,userCourse,imagen,dateView,video} as TipsI;
        const userService = new service_1.TipsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.saveTips(payload),
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
exports.createTipsController = createTipsController;
const getTipsByIdUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.TipsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getTipsByIdUser(id),
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
var getTipsByIdUserController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, type, userService, _a, error_2;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                type = req.query.type;
                console.log(type);
                userService = new service_1.TipsService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getTipsByIdUser(id, type)];
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
exports.getTipsByIdUserController = getTipsByIdUserController;
const getTipsByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.TipsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getTipsById(id),
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
exports.getTipsByIdController = getTipsByIdController;
const getAllTipsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new service_1.TipsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getAllTips(),
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
exports.getAllTipsController = getAllTipsController;
const updateTipsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { user_id, title, description, userCourse, imagen, dateView } = req.body;
        const newTopic = { user_id, title, description, userCourse, imagen, dateView, video: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path };
        //const userService = new TipsService();
        //const updateBilletera = req.body as unknown as TipsI;
        const id = req.params.id;
        const billeteraService = new service_1.TipsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield billeteraService.updateTips(id, newTopic),
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
var updateTipsController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, id, billeteraService, _a, error_5;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                payload = req.body;
                id = req.params.id;
                billeteraService = new service_1.TipsService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, billeteraService.updateTips(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_5 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_5.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateTipsController = updateTipsController;
