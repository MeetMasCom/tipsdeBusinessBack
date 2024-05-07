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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BilleteraUService = void 0;
var moment_1 = __importDefault(require("moment"));
var messages_1 = require("../../constants/messages");
var emailHelper_1 = __importDefault(require("../../helpers/emailHelper"));
var stringHelper_1 = require("../../helpers/stringHelper");
var repository_1 = require("../billeteraE/repository");
var repository_2 = require("../user/repository");
var repository_3 = require("./repository");
var enviroment_1 = require("../../constants/enviroment");
var BilleteraUService = /** @class */ (function () {
    function BilleteraUService() {
        var _this = this;
        this.save = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.save(params)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.update = function (id, params) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params.estado = true;
                        delete params.tipoWalletC;
                        return [4 /*yield*/, this.repo.update(id, params)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAll = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getByIdUser = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var walletU, response_1, error_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repo.getByIdUser(id)];
                    case 1:
                        walletU = _a.sent();
                        response_1 = [];
                        return [4 /*yield*/, Promise.all(walletU.map(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var result;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new repository_1.BilleteraRepository().getById(element.tipo)];
                                        case 1:
                                            result = _a.sent();
                                            response_1.push({
                                                tipoWalletC: result.alias,
                                                _id: element._id,
                                                userId: element.userId,
                                                detalle: element.detalle,
                                                dir: element.dir,
                                                estado: element.estado,
                                                tipo: element.tipo,
                                                tag: element.tag,
                                                alias: element.alias
                                            });
                                            return [2 /*return*/, element];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response_1];
                    case 3:
                        error_5 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.createOtp = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var stringHelper, emailHelper, findUser, userOpt, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        stringHelper = new stringHelper_1.StringHelper();
                        emailHelper = new emailHelper_1.default();
                        return [4 /*yield*/, new repository_2.UserRepository().getById(id)];
                    case 1:
                        findUser = _a.sent();
                        if (!findUser)
                            throw new Error("Creedenciales incorrectas");
                        return [4 /*yield*/, new repository_2.UserRepository().saveOtp({
                                used: false,
                                otp: stringHelper.generateRandomSixDigitNumber(),
                                userId: id,
                            })];
                    case 2:
                        userOpt = _a.sent();
                        emailHelper.loginUser(findUser.userName, userOpt.otp, findUser.email);
                        return [2 /*return*/, "Se ha enviado un c\u00F3digo de verificaci\u00F3n al correo ".concat(stringHelper.hideEmail(findUser.email))];
                    case 3:
                        error_6 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.validOpt = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var opt, timeStampOpt, maxTimeStamp, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, new repository_2.UserRepository().validOtp({
                                userId: data.userId,
                                otp: Number(data.otp),
                                userName: ""
                            })];
                    case 1:
                        opt = _a.sent();
                        if (!opt)
                            throw new Error("Creedenciales incorrectas");
                        timeStampOpt = (0, moment_1.default)(opt.createdAt).format();
                        maxTimeStamp = (0, moment_1.default)(opt.createdAt)
                            .add(enviroment_1.TIME_EXPIRE, "minute")
                            .format();
                        return [4 /*yield*/, new repository_2.UserRepository().updateOtp(opt._id, true)];
                    case 2:
                        _a.sent();
                        if (!(0, moment_1.default)().isBetween(timeStampOpt, maxTimeStamp)) {
                            throw new Error("Código de verificación expirado, vuela a intentarlo");
                        }
                        return [2 /*return*/, messages_1.OK_200];
                    case 3:
                        error_7 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.repo = new repository_3.BilleteraURepository();
    }
    return BilleteraUService;
}());
exports.BilleteraUService = BilleteraUService;
