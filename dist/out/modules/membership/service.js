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
exports.MembershipService = void 0;
var moment_1 = __importDefault(require("moment"));
var messages_1 = require("../../constants/messages");
var repository_1 = require("./repository");
var repository_2 = require("../balanceUser/repository");
var service_1 = require("../recordsTransactions/service");
var MembershipService = /** @class */ (function () {
    function MembershipService() {
        var _this = this;
        this.getAllMembership = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.save = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var validMembership, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repo.getByCode(params.code)];
                    case 1:
                        validMembership = _a.sent();
                        if (validMembership)
                            throw new Error("La membresía ya fue registrada.");
                        return [4 /*yield*/, this.repo.save(params)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.update = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var validMembsership, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1:
                        validMembsership = _a.sent();
                        if (!validMembsership)
                            throw new Error("La membresía no existe.");
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
        this.saveMembershipUser = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var updateMembership, buyMembership, membership, descuento, payload, valor, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.repo.getMembershipUser(params.userId)];
                    case 1:
                        updateMembership = _a.sent();
                        if (!(updateMembership !== null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.repo.deleteMembershipUser(updateMembership._id)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.repo.saveMembershipUser(params)];
                    case 4:
                        buyMembership = _a.sent();
                        return [4 /*yield*/, this.repo.getById(params.membershipId)];
                    case 5:
                        membership = _a.sent();
                        descuento = params.descuento / 100;
                        payload = {
                            value: membership.price - (membership.price * descuento),
                            companyValue: 0,
                            referValue: 0,
                            detail: "Compra membres\u00EDa ".concat(membership.name),
                            userId: params.userId,
                            status: true,
                            typeTransaction: 'Compra membresía',
                            walletId: '64815307cd63e1f5a8982369'
                        };
                        valor = membership.price - (membership.price * descuento);
                        return [4 /*yield*/, new service_1.RecordsTransactionService().save(payload)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, buyMembership];
                    case 7:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        this.deleteMembershipUser = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var validMembsership, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repo.getMembershipUser(id)];
                    case 1:
                        validMembsership = _a.sent();
                        if (!validMembsership)
                            throw new Error("La membresía no existe.");
                        return [4 /*yield*/, this.repo.deleteMembershipUser(id)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_6 = _a.sent();
                        throw new Error(error_6);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getMembershipUserById = function (userId) { return __awaiter(_this, void 0, void 0, function () {
            var data, validDate, currentDate, membership, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.repo.getMembershipUser(userId)];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            return [2 /*return*/, null];
                        }
                        validDate = (0, moment_1.default)(data.createdAt).add(1, 'months');
                        currentDate = (0, moment_1.default)();
                        if (!(currentDate > validDate)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.repo.updateMembershipUser(data._id, {
                                membershipId: data.membershipId,
                                state: false,
                                userId: data.userId,
                                descuento: 0,
                                tiempo: data.tiempo
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [4 /*yield*/, this.repo.getById(data.membershipId)];
                    case 4:
                        membership = _a.sent();
                        return [2 /*return*/, {
                                membershipId: data.membershipId,
                                state: data.state,
                                userId: data.userId,
                                createdAt: data.createdAt,
                                name: membership.name,
                                descuento: data.descuento,
                                tiempo: data.tiempo,
                            }];
                    case 5:
                        error_7 = _a.sent();
                        throw new Error(error_7);
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.repo = new repository_1.MembershipRepository();
        this.repoBalance = new repository_2.BalanceUserRepository();
    }
    return MembershipService;
}());
exports.MembershipService = MembershipService;
