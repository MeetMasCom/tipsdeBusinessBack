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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerifyTeacher = exports.updateStateController = exports.updateAdminController = exports.getAdminByRolController = exports.getByIdAdminController = exports.getAllAdminController = exports.otpController = exports.loginController = exports.createAdminController = void 0;
var responseHelper_1 = require("../../helpers/responseHelper");
var service_1 = require("./service");
var service_2 = require("../user/service");
var createAdminController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, adminService, _a, error_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                payload = req.body;
                adminService = new service_1.AdminService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, adminService.save(payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_1 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_1.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createAdminController = createAdminController;
var loginController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, adminService, _a, error_2;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                payload = req.body;
                adminService = new service_1.AdminService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, adminService.login(payload)];
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
exports.loginController = loginController;
var otpController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, adminService, _a, error_3;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                payload = req.body;
                adminService = new service_1.AdminService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, adminService.validOpt(payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_3 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_3.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.otpController = otpController;
var getAllAdminController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var adminService, _a, error_4;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                adminService = new service_1.AdminService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, adminService.getAll()];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_4 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_4.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllAdminController = getAllAdminController;
var getByIdAdminController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, adminService, _a, error_5;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                adminService = new service_1.AdminService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, adminService.getById(id)];
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
exports.getByIdAdminController = getByIdAdminController;
var getAdminByRolController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, adminService, _a, error_6;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                adminService = new service_1.AdminService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, adminService.getByRol(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_6 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_6.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAdminByRolController = getAdminByRolController;
var updateAdminController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, adminService, _a, error_7;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                adminService = new service_1.AdminService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, adminService.updateAdmin(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_7 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_7.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateAdminController = updateAdminController;
var updateStateController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, adminService, _a, error_8;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                adminService = new service_1.AdminService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, adminService.updateState(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_8 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_8.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateStateController = updateStateController;
var getVerifyTeacher = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userService, _a, error_9;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.query.typeUser;
                userService = new service_2.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getVerifyTeacher(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_9 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_9.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getVerifyTeacher = getVerifyTeacher;
