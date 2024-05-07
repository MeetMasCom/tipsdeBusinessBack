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
exports.getReferUserController = exports.getUsersincupo = exports.getCupoLimiteController = exports.updateCupoController = exports.updateAgreementsController = exports.getVerifyTeacher = exports.updateTypeUserController = exports.getUserActiveController = exports.getUserOnlineController = exports.searchUsersController = exports.updateSocialsNController = exports.getAllUserGenderController = exports.getAllUserController = exports.getByIdUserController = exports.resetPasswordController = exports.recoverPasswordController = exports.recoverUsernameController = exports.logoutController = exports.updateUserMatchController = exports.updateUserAddressController = exports.updateUserBasicController = exports.otpController = exports.loginController = exports.createUserController = exports.getUserValidateController = exports.getCountUserController = exports.getUserController = void 0;
var responseHelper_1 = require("../../helpers/responseHelper");
var service_1 = require("./service");
var getUserController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userService, _a, error_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getById(id)];
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
exports.getUserController = getUserController;
var getCountUserController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var userService, _a, error_2;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getCountUser()];
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
exports.getCountUserController = getCountUserController;
var getUserValidateController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var search, userService, _a, error_3;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                search = req.params.search;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getUserValidate(search)];
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
exports.getUserValidateController = getUserValidateController;
var createUserController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, userService, _a, error_4;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.save(payload)];
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
exports.createUserController = createUserController;
var loginController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, userService, _a, error_5;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.login(payload)];
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
exports.loginController = loginController;
var otpController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, userService, _a, error_6;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.validOpt(payload)];
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
exports.otpController = otpController;
var updateUserBasicController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, userService, _a, error_7;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.updateBasic(id, payload)];
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
exports.updateUserBasicController = updateUserBasicController;
var updateUserAddressController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, userService, _a, error_8;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.updateAddress(id, payload)];
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
exports.updateUserAddressController = updateUserAddressController;
var updateUserMatchController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, userService, _a, error_9;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.updateMatch(id, payload)];
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
exports.updateUserMatchController = updateUserMatchController;
var logoutController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userService, _a, error_10;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.logout(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_10 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_10.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logoutController = logoutController;
var recoverUsernameController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var mail, userService, _a, error_11;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                mail = req.body.mail;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.recoverUsername(mail)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_11 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_11.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.recoverUsernameController = recoverUsernameController;
var recoverPasswordController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var username, userService, _a, error_12;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                username = req.body.username;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.recoverPassword(username)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_12 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_12.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.recoverPasswordController = recoverPasswordController;
var resetPasswordController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, userService, _a, error_13;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.resetPassword(payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_13 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_13.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.resetPasswordController = resetPasswordController;
var getByIdUserController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userService, _a, error_14;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getByIdUser(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_14 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_14.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getByIdUserController = getByIdUserController;
var getAllUserController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userService, _a, error_15;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getAllUser()];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_15 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_15.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllUserController = getAllUserController;
var getAllUserGenderController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userService, _a, error_16;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getUserGender(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_16 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_16.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllUserGenderController = getAllUserGenderController;
var updateSocialsNController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, userService, _a, error_17;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.updateMatch(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_17 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_17.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateSocialsNController = updateSocialsNController;
var searchUsersController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, userService, _a, error_18;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getAllUserSearch(payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_18 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_18.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.searchUsersController = searchUsersController;
var getUserOnlineController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userService, _a, error_19;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getUserOnline(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_19 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_19.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserOnlineController = getUserOnlineController;
var getUserActiveController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userService, _a, error_20;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getUserActive(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_20 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_20.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserActiveController = getUserActiveController;
var updateTypeUserController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, userService, _a, error_21;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.updateTypeUser(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_21 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_21.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateTypeUserController = updateTypeUserController;
var getVerifyTeacher = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userService, _a, error_22;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.query.typeUser;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getVerifyTeacher(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_22 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_22.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getVerifyTeacher = getVerifyTeacher;
var updateAgreementsController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, agreements, userService, _a, error_23;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                agreements = req.body.agreements;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.updateAgreements(id, agreements)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_23 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_23.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateAgreementsController = updateAgreementsController;
var updateCupoController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, userService, _a, error_24;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                payload = req.body;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.updateCupo(payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_24 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_24.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateCupoController = updateCupoController;
var getCupoLimiteController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var userService, _a, error_25;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getCupoLimite()];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_25 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_25.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCupoLimiteController = getCupoLimiteController;
var getUsersincupo = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var userService, _a, error_26;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.usersincupo()];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_26 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_26.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsersincupo = getUsersincupo;
var getReferUserController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userService, _a, error_27;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                userService = new service_1.UserService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, userService.getReferUser(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_27 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_27.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getReferUserController = getReferUserController;
