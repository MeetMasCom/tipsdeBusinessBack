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
exports.BalanceUserService = void 0;
var messages_1 = require("../../constants/messages");
var emailHelper_1 = __importDefault(require("../../helpers/emailHelper"));
var repository_1 = require("../billeteraE/repository");
var repository_2 = require("../billeteraU/repository");
var repository_3 = require("../user/repository");
var repository_4 = require("./repository");
var BalanceUserService = /** @class */ (function () {
    function BalanceUserService() {
        var _this = this;
        this.getAll = function (userId) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getAllRechargByUserId(userId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getBalanceUser = function (userId) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getAllByUserId(userId)];
                    case 1: return [2 /*return*/, [_a.sent()]];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getByUserId = function (userId, walletId) { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getByUserId(userId, walletId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.update = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var balance, validBalanceUser, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        balance = 0;
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1:
                        validBalanceUser = _a.sent();
                        if (validBalanceUser)
                            balance = Number(validBalanceUser.balance);
                        payload.balance = balance + Number(payload.balance);
                        return [4 /*yield*/, this.repo.update(id, payload)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.recharge = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.createRecharge(payload)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'Solicitud de recarga enviada...'];
                    case 2:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.reviewRecharge = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var emailHelper, recharg, findUser, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        emailHelper = new emailHelper_1.default();
                        return [4 /*yield*/, this.repo.getRechargeById(payload.id)];
                    case 1:
                        recharg = _a.sent();
                        return [4 /*yield*/, new repository_3.UserRepository().getById(recharg.userId)];
                    case 2:
                        findUser = _a.sent();
                        return [4 /*yield*/, this.repo.reviewRecharge(payload)];
                    case 3:
                        _a.sent();
                        if (!(payload.status == 1)) return [3 /*break*/, 5];
                        data = {
                            userId: findUser._id,
                            balance: payload.value,
                        };
                        return [4 /*yield*/, this.update(findUser._id, data)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        emailHelper.reviewRecharg(findUser.userName, recharg.hash, payload.remark, findUser.email, payload.status);
                        return [2 /*return*/, messages_1.OK_200];
                    case 6:
                        error_6 = _a.sent();
                        throw new Error(error_6);
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.reviewRetreat = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var emailHelper, retreat, findUser, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        emailHelper = new emailHelper_1.default();
                        return [4 /*yield*/, this.repo.getRetreatById(payload.id)];
                    case 1:
                        retreat = _a.sent();
                        return [4 /*yield*/, new repository_3.UserRepository().getById(retreat.userId)];
                    case 2:
                        findUser = _a.sent();
                        return [4 /*yield*/, this.repo.reviewRetreat(payload)];
                    case 3:
                        _a.sent();
                        //aprobado
                        if (payload.status == 1) {
                            //actualizar saldo 
                        }
                        emailHelper.reviewRetreat(findUser.userName, retreat._id, payload.remark, findUser.email, payload.status, payload.file, payload.value);
                        return [2 /*return*/, messages_1.OK_200];
                    case 4:
                        error_7 = _a.sent();
                        throw new Error(error_7);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.retreat = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var userBalance, walletU, walletE, user, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.repo.getAllByUserId(payload.userId)];
                    case 1:
                        userBalance = _a.sent();
                        if (!userBalance)
                            throw new Error("No tiene saldo para retirar...");
                        return [4 /*yield*/, new repository_2.BilleteraURepository().getById(payload.walletId)];
                    case 2:
                        walletU = (_a.sent())[0];
                        if (!walletU)
                            throw new Error("No tiene información de billetera usuario...");
                        return [4 /*yield*/, new repository_1.BilleteraRepository().getById(walletU.tipo)];
                    case 3:
                        walletE = _a.sent();
                        if (!walletE)
                            throw new Error("No tiene información de billetera empresa...");
                        return [4 /*yield*/, new repository_3.UserRepository().getById(payload.userId)];
                    case 4:
                        user = _a.sent();
                        if (!user)
                            throw new Error("No tiene información de usuario...");
                        if (Number(payload.amount) < Number(walletE.minimo))
                            throw new Error("Valor mínimo para retirar es $ " + walletE.minimo + "...");
                        switch (user.type) {
                            case 0:
                                if (Number(payload.amount) > Number(walletE.maxRetiroB))
                                    throw new Error("Valor máximo para retirar por usuario Bronce es $ " + walletE.maxRetiroB + "...");
                                break;
                            case 1:
                                if (Number(payload.amount) > Number(walletE.maxRetiroP))
                                    throw new Error("Valor máximo para retirar por usuario Plata es $ " + walletE.maxRetiroP + "...");
                                break;
                            case 2:
                                if (Number(payload.amount) > Number(walletE.maxRetiroO))
                                    throw new Error("Valor máximo para retirar por usuario Oro es $ " + walletE.maxRetiroO + "...");
                                break;
                            case 3:
                                if (Number(payload.amount) > Number(walletE.maxRetiroD))
                                    throw new Error("Valor máximo para retirar por usuario Diamante es $ " + walletE.maxRetiroD + "...");
                                break;
                        }
                        if (Number(userBalance.balance) < Number(payload.amount))
                            throw new Error("Saldo insuficiente...");
                        return [4 /*yield*/, this.repo.createRetreat(payload)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, 'Solicitud de retiro enviada...'];
                    case 6:
                        error_8 = _a.sent();
                        throw new Error(error_8);
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.getAllRetreatByUser = function (userId) { return __awaiter(_this, void 0, void 0, function () {
            var error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getAllRetreatByUser(userId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_9 = _a.sent();
                        throw new Error(error_9);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAllRetreat = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, response_1, error_10;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repo.getAllRetreat()];
                    case 1:
                        data = _a.sent();
                        response_1 = [];
                        return [4 /*yield*/, Promise.all(data.map(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var user, walletU;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new repository_3.UserRepository().getById(element.userId)];
                                        case 1:
                                            user = _a.sent();
                                            return [4 /*yield*/, new repository_2.BilleteraURepository().getById(element.walletId)];
                                        case 2:
                                            walletU = _a.sent();
                                            response_1.push({
                                                _id: element._id,
                                                userId: element.userId,
                                                userName: user.userName,
                                                walletId: element.walletId,
                                                amount: element.amount,
                                                remark: element.remark,
                                                file: element.file,
                                                status: element.status,
                                                createdAt: element.createdAt,
                                                updatedAt: element.updatedAt,
                                                dir: walletU[0].dir,
                                                detalle: walletU[0].detalle,
                                                tag: walletU[0].tag
                                            });
                                            return [2 /*return*/, element];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response_1];
                    case 3:
                        error_10 = _a.sent();
                        throw new Error(error_10);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.updateBalance = function (Id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repo.update(Id, payload)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.repo.getById(Id)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_11 = _a.sent();
                        throw new Error(error_11);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.repo = new repository_4.BalanceUserRepository();
    }
    return BalanceUserService;
}());
exports.BalanceUserService = BalanceUserService;
