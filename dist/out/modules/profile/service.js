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
exports.ProfileService = void 0;
var messages_1 = require("../../constants/messages");
var repository_1 = require("./repository");
var ProfileService = /** @class */ (function () {
    function ProfileService() {
        var _this = this;
        this.saveProfile = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.saveProfile(params)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getProfileId = function (id, profile) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getProfileId(id, profile)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAllProfile = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getAllProfile()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.addProfile = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var idp, profile, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        idp = payload.profile_id;
                        return [4 /*yield*/, this.repo.getProfileId(id, idp)];
                    case 1:
                        profile = _a.sent();
                        if (profile.length > 0)
                            throw new Error("Perfil ya agregado.");
                        if (!(profile.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.repo.addProfile(id, payload)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, "Datos actualizados"];
                    case 4:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.addSocialN = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.addSocialN(id, payload)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, "Datos actualizados"];
                    case 2:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getProfileById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getProfileById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_6 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.addFollowers = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var idp, profile, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        idp = payload.followers;
                        return [4 /*yield*/, this.repo.getFollowersId(id, idp)];
                    case 1:
                        profile = _a.sent();
                        if (profile.length > 0)
                            throw new Error("Seguidor ya registrado.");
                        if (!(profile.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.repo.addFollowers(id, payload)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, "Datos actualizados"];
                    case 4:
                        error_7 = _a.sent();
                        throw new Error(error_7);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.addFollowings = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var idp, profile, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        idp = payload.following;
                        return [4 /*yield*/, this.repo.getFollowingsId(id, idp)];
                    case 1:
                        profile = _a.sent();
                        if (profile.length > 0)
                            throw new Error("Seguidor ya registrado.");
                        if (!(profile.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.repo.addFollowings(id, payload)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, "Datos actualizados"];
                    case 4:
                        error_8 = _a.sent();
                        throw new Error(error_8);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.repo = new repository_1.ProfileRepository();
    }
    return ProfileService;
}());
exports.ProfileService = ProfileService;
