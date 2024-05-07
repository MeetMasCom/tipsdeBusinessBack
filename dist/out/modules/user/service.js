"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.UserService = void 0;
var enviroment_1 = require("../../constants/enviroment");
var bcryptHelper_1 = require("../../helpers/bcryptHelper");
var emailHelper_1 = __importDefault(require("../../helpers/emailHelper"));
var stringHelper_1 = require("../../helpers/stringHelper");
var messages_1 = require("../../constants/messages");
var repository_1 = require("./repository");
var moment_1 = __importDefault(require("moment"));
var jwtHelper_1 = require("../../helpers/jwtHelper");
var repository_2 = require("../country/repository");
var UserService = /** @class */ (function () {
    function UserService() {
        var _this = this;
        this.getById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var response, country, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1:
                        response = _a.sent();
                        response.password = "xxxxxxxxxxxxxxxxxx";
                        return [4 /*yield*/, this.countryRepo.getById(response.country)];
                    case 2:
                        country = _a.sent();
                        console.log(country);
                        // response.country = country.name;
                        console.log(response);
                        return [2 /*return*/, response];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getUserValidate = function (search) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getByEmailOrUserName(search, search)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getCountUser = function () { return __awaiter(_this, void 0, void 0, function () {
            var users, response_1, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getAll()];
                    case 1:
                        users = _a.sent();
                        response_1 = {
                            total: users.length,
                            men: 0,
                            woman: 0,
                            online: 0,
                        };
                        users.forEach(function (user) {
                            if (user.online)
                                response_1.online++;
                            if (user.gender == "M")
                                response_1.men++;
                            if (user.gender == "F")
                                response_1.woman++;
                        });
                        return [2 /*return*/, response_1];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.logout = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.online(id, false)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.save = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var bcryptHelper, validUser, _a, response, sponsor, level, userId, refer, idUser, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 12, , 13]);
                        bcryptHelper = new bcryptHelper_1.BcryptHelper();
                        return [4 /*yield*/, this.repo.getByEmailOrUserName(params.email, params.userName)];
                    case 1:
                        validUser = _b.sent();
                        if (validUser)
                            throw new Error("El usuario o email ya fueron registrados.");
                        _a = params;
                        return [4 /*yield*/, bcryptHelper.encrypt(params.password)];
                    case 2:
                        _a.password = _b.sent();
                        params.state = [enviroment_1.USER_STATE];
                        params.type = enviroment_1.USER_TYPE;
                        params.sponsorCode = params.userName;
                        params.sponsor = params.sponsor;
                        params.age =
                            new Date().getFullYear() - new Date(params.dateBirth).getFullYear();
                        return [4 /*yield*/, this.repo.save(params)];
                    case 3:
                        response = _b.sent();
                        sponsor = params.sponsor;
                        delete params.sponsor;
                        if (!(sponsor != undefined)) return [3 /*break*/, 11];
                        level = 1;
                        _b.label = 4;
                    case 4:
                        if (!(level <= 7)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.repo.getByEmailOrUserName("", sponsor)];
                    case 5:
                        userId = (_b.sent())._id;
                        refer = {
                            userId: userId,
                            referralsId: response._id,
                            level: level,
                        };
                        return [4 /*yield*/, this.repo.saveReferUser(refer)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.repo.getById(userId)];
                    case 7:
                        sponsor = (_b.sent()).sponsor;
                        if (!(sponsor != undefined)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.repo.getByEmailOrUserName("", sponsor)];
                    case 8:
                        idUser = (_b.sent())._id;
                        level = level + 1;
                        return [3 /*break*/, 10];
                    case 9:
                        level = 8;
                        _b.label = 10;
                    case 10: return [3 /*break*/, 4];
                    case 11: 
                    // if (sponsor != undefined) {
                    //   const userId = (await this.repo.getByEmailOrUserName("", sponsor))
                    //     ._id as string;
                    //   const level = (await this.repo.getReferUser(userId)).length + 1;
                    //   if (level < 7) {
                    //     const refer: ReferralsI = {
                    //       userId,
                    //       referralsId: response._id!,
                    //       level,
                    //     };
                    //     await this.repo.saveReferUser(refer);
                    //   }
                    // }
                    return [2 /*return*/, response];
                    case 12:
                        error_5 = _b.sent();
                        throw new Error(error_5);
                    case 13: return [2 /*return*/];
                }
            });
        }); };
        this.login = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var jwtHelper, bcryptHelper, stringHelper, emailHelper, findUser, validPassword, userOpt, token, user, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        jwtHelper = new jwtHelper_1.JwtHelper();
                        bcryptHelper = new bcryptHelper_1.BcryptHelper();
                        stringHelper = new stringHelper_1.StringHelper();
                        emailHelper = new emailHelper_1.default();
                        return [4 /*yield*/, this.repo.getByEmailOrUserName("", params.userName)];
                    case 1:
                        findUser = _a.sent();
                        if (!findUser)
                            throw new Error("Creedenciales incorrectas");
                        return [4 /*yield*/, bcryptHelper.compare(params.password, findUser.password)];
                    case 2:
                        validPassword = _a.sent();
                        if (!validPassword)
                            throw new Error("Creedenciales incorrectas");
                        return [4 /*yield*/, this.repo.saveOtp({
                                used: false,
                                otp: stringHelper.generateRandomSixDigitNumber(),
                                userId: findUser._id,
                            })];
                    case 3:
                        userOpt = _a.sent();
                        emailHelper.loginUser(findUser.userName, userOpt.otp, findUser.email);
                        token = jwtHelper.create({
                            userId: findUser._id,
                            userName: findUser.userName,
                            state: findUser.state,
                        });
                        delete findUser.password;
                        user = {
                            _id: findUser._id,
                            dateBirth: findUser.dateBirth,
                            userName: findUser.userName,
                            email: findUser.email,
                            sponsorCode: findUser.sponsorCode,
                            state: findUser.state,
                            type: findUser.type,
                            agreements: findUser.agreements
                        };
                        return [4 /*yield*/, this.repo.online(findUser._id, true)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, { user: user, token: token }];
                    case 5:
                        error_6 = _a.sent();
                        throw new Error(error_6);
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.validOpt = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var jwtHelper, findUser, opt, timeStampOpt, maxTimeStamp, token, user, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        jwtHelper = new jwtHelper_1.JwtHelper();
                        return [4 /*yield*/, this.repo.getByEmailOrUserName("", params.userName)];
                    case 1:
                        findUser = _a.sent();
                        if (!findUser)
                            throw new Error("Creedenciales incorrectas");
                        params.userId = findUser._id;
                        return [4 /*yield*/, this.repo.validOtp(params)];
                    case 2:
                        opt = _a.sent();
                        if (!opt)
                            throw new Error("Creedenciales incorrectas");
                        timeStampOpt = (0, moment_1.default)(opt.createdAt).format();
                        maxTimeStamp = (0, moment_1.default)(opt.createdAt)
                            .add(enviroment_1.TIME_EXPIRE, "minute")
                            .format();
                        return [4 /*yield*/, this.repo.updateOtp(opt._id, true)];
                    case 3:
                        _a.sent();
                        if (!(0, moment_1.default)().isBetween(timeStampOpt, maxTimeStamp)) {
                            throw new Error("Código de verificación expirado, vuela a iniciar sesión");
                        }
                        token = jwtHelper.create({
                            userId: findUser._id,
                            userName: findUser.userName,
                            state: findUser.state,
                        });
                        delete findUser.password;
                        user = {
                            _id: findUser._id,
                            dateBirth: findUser.dateBirth,
                            userName: findUser.userName,
                            email: findUser.email,
                            sponsorCode: findUser.sponsorCode,
                            state: findUser.state,
                            type: findUser.type,
                            agreements: findUser.agreements
                        };
                        return [4 /*yield*/, this.repo.online(findUser._id, true)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, { user: user, token: token }];
                    case 5:
                        error_7 = _a.sent();
                        throw new Error(error_7);
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.updateBasic = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var validUser, error_8;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1:
                        validUser = _b.sent();
                        if (!validUser)
                            throw new Error("El usuario no existe.");
                        if (!((_a = validUser.state) === null || _a === void 0 ? void 0 : _a.includes(1)))
                            validUser.state.push(1);
                        payload = __assign({ state: validUser.state }, payload);
                        return [4 /*yield*/, this.repo.update(id, payload)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        error_8 = _b.sent();
                        throw new Error(error_8);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.updateAddress = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var validUser, error_9;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1:
                        validUser = _b.sent();
                        if (!validUser)
                            throw new Error("El usuario no existe.");
                        if (!((_a = validUser.state) === null || _a === void 0 ? void 0 : _a.includes(2)))
                            validUser.state.push(2);
                        payload = __assign({ state: validUser.state }, payload);
                        return [4 /*yield*/, this.repo.update(id, payload)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        error_9 = _b.sent();
                        throw new Error(error_9);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.updateMatch = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var validUser, error_10;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1:
                        validUser = _b.sent();
                        if (!validUser)
                            throw new Error("El usuario no existe.");
                        if (!((_a = validUser.state) === null || _a === void 0 ? void 0 : _a.includes(3)))
                            validUser.state.push(3);
                        payload = __assign({ state: validUser.state }, payload);
                        return [4 /*yield*/, this.repo.update(id, payload)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        error_10 = _b.sent();
                        throw new Error(error_10);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.recoverUsername = function (mail) { return __awaiter(_this, void 0, void 0, function () {
            var emailHelper, stringHelper, validUser, fullname, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        emailHelper = new emailHelper_1.default();
                        stringHelper = new stringHelper_1.StringHelper();
                        return [4 /*yield*/, this.repo.getByEmailOrUserName(mail, "")];
                    case 1:
                        validUser = _a.sent();
                        if (!validUser)
                            throw new Error("El usuario no existe.");
                        fullname = "".concat(validUser.firstname != undefined ? validUser.firstname : "", " ").concat(validUser.lastname != undefined ? validUser.lastname : "");
                        return [4 /*yield*/, emailHelper.recoverUsername(fullname, validUser.userName, mail)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, "Se ha enviado tu usuario al correo ".concat(stringHelper.hideEmail(validUser.email))];
                    case 3:
                        error_11 = _a.sent();
                        throw new Error(error_11);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.recoverPassword = function (username) { return __awaiter(_this, void 0, void 0, function () {
            var emailHelper, stringHelper, validUser, userOpt, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        emailHelper = new emailHelper_1.default();
                        stringHelper = new stringHelper_1.StringHelper();
                        return [4 /*yield*/, this.repo.getByEmailOrUserName("", username)];
                    case 1:
                        validUser = _a.sent();
                        if (!validUser)
                            throw new Error("El usuario no existe.");
                        return [4 /*yield*/, this.repo.saveOtp({
                                used: false,
                                otp: stringHelper.generateRandomSixDigitNumber(),
                                userId: validUser._id,
                            })];
                    case 2:
                        userOpt = _a.sent();
                        return [4 /*yield*/, emailHelper.recoverPassword(validUser.userName, userOpt.otp, validUser.email)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, "Se ha enviado un c\u00F3digo de verificaci\u00F3n al correo ".concat(stringHelper.hideEmail(validUser.email))];
                    case 4:
                        error_12 = _a.sent();
                        throw new Error(error_12);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.codigoresetPassword = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var bcryptHelper, findUser, otp, opt, timeStampOpt, maxTimeStamp, password, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        bcryptHelper = new bcryptHelper_1.BcryptHelper();
                        return [4 /*yield*/, this.repo.getByEmailOrUserName("", params.username)];
                    case 1:
                        findUser = _a.sent();
                        if (!findUser)
                            throw new Error("Usuario no encontrado");
                        otp = {
                            otp: params.code,
                            userName: params.username,
                            userId: findUser._id,
                        };
                        return [4 /*yield*/, this.repo.validOtp(otp)];
                    case 2:
                        opt = _a.sent();
                        if (!opt)
                            throw new Error("EL Código otp es incorrecto");
                        timeStampOpt = (0, moment_1.default)(opt.createdAt).format();
                        maxTimeStamp = (0, moment_1.default)(opt.createdAt)
                            .add(enviroment_1.TIME_EXPIRE, "minute")
                            .format();
                        return [4 /*yield*/, this.repo.updateOtp(opt._id, true)];
                    case 3:
                        _a.sent();
                        if (!(0, moment_1.default)().isBetween(timeStampOpt, maxTimeStamp)) {
                            throw new Error("Código de verificación expirado, vuela a intentarlo");
                        }
                        return [4 /*yield*/, bcryptHelper.encrypt(params.password)];
                    case 4:
                        password = _a.sent();
                        return [4 /*yield*/, this.repo.updatePassword(findUser._id, password)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, "Se ha resetado su contraseña con exito."];
                    case 6:
                        error_13 = _a.sent();
                        throw new Error(error_13);
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.resetPassword = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var bcryptHelper, findUser, otp, opt, timeStampOpt, maxTimeStamp, password, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        bcryptHelper = new bcryptHelper_1.BcryptHelper();
                        return [4 /*yield*/, this.repo.getByEmailOrUserName("", params.username)];
                    case 1:
                        findUser = _a.sent();
                        if (!findUser)
                            throw new Error("Usuario no encontrado");
                        otp = {
                            otp: params.code,
                            userName: params.username,
                            userId: findUser._id,
                        };
                        return [4 /*yield*/, this.repo.validOtp(otp)];
                    case 2:
                        opt = _a.sent();
                        if (!opt)
                            throw new Error("EL Código otp es incorrecto");
                        timeStampOpt = (0, moment_1.default)(opt.createdAt).format();
                        maxTimeStamp = (0, moment_1.default)(opt.createdAt)
                            .add(enviroment_1.TIME_EXPIRE, "minute")
                            .format();
                        return [4 /*yield*/, this.repo.updateOtp(opt._id, true)];
                    case 3:
                        _a.sent();
                        if (!(0, moment_1.default)().isBetween(timeStampOpt, maxTimeStamp)) {
                            throw new Error("Código de verificación expirado, vuela a intentarlo");
                        }
                        return [4 /*yield*/, bcryptHelper.encrypt(params.password)];
                    case 4:
                        password = _a.sent();
                        return [4 /*yield*/, this.repo.updatePassword(findUser._id, password)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, "Se ha resetado su contraseña con exito."];
                    case 6:
                        error_14 = _a.sent();
                        throw new Error(error_14);
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.getByIdUser = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getByIdUser(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_15 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAllUser = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getAllUser()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_16 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getReferUser = function (userId) { return __awaiter(_this, void 0, void 0, function () {
            var response_2, data, error_17;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        response_2 = [];
                        return [4 /*yield*/, this.repo.getReferUser(userId)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, Promise.all(data.map(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var result, firstname, lastname;
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, new repository_1.UserRepository().getById(element.referralsId)];
                                        case 1:
                                            result = _c.sent();
                                            firstname = (_a = result.firstname) !== null && _a !== void 0 ? _a : '------';
                                            lastname = (_b = result.lastname) !== null && _b !== void 0 ? _b : '------';
                                            response_2.push({
                                                level: element.level,
                                                user: result.userName,
                                                name: firstname + ' ' + lastname,
                                                referralsId: element.referralsId,
                                                userId: element.userId
                                            });
                                            return [2 /*return*/, element];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response_2];
                    case 3:
                        error_17 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getUserGender = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getUserGender(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_18 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAllUserSearch = function (body) { return __awaiter(_this, void 0, void 0, function () {
            var error_19;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getAllUserSearch(body)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_19 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getUserOnline = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getUserOnline(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_20 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getUserActive = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_21;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getUserActive(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_21 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateAgreements = function (id, agreements) { return __awaiter(_this, void 0, void 0, function () {
            var error_22;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.updateAgreements(id, agreements)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 2:
                        error_22 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateSocialAgreements = function (id, agreements) { return __awaiter(_this, void 0, void 0, function () {
            var error_23;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.updateSocialAgreements(id, agreements)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 2:
                        error_23 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateDNI = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var validUser, error_24;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1:
                        validUser = _a.sent();
                        if (!validUser)
                            throw new Error("El usuario no existe.");
                        payload = __assign({ state: validUser.state }, payload);
                        return [4 /*yield*/, this.repo.update(id, payload)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_24 = _a.sent();
                        throw new Error(error_24);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.verifyUser = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var validUser, error_25;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1:
                        validUser = _a.sent();
                        if (!validUser)
                            throw new Error("El usuario no existe.");
                        payload = __assign({ state: validUser.state }, payload);
                        return [4 /*yield*/, this.repo.verifyUser(id, payload)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_25 = _a.sent();
                        throw new Error(error_25);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.getUserSocialAgreements = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_26;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getUserSocialAgreements()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_26 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateBalanceRefer = function (userId, price) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, messages_1.OK_200];
                }
                catch (error) {
                    throw new Error(error);
                }
                return [2 /*return*/];
            });
        }); };
        this.updateTypeUser = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var validUser, error_27;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 1:
                        validUser = _a.sent();
                        if (!validUser)
                            throw new Error("El usuario no existe.");
                        return [4 /*yield*/, this.repo.update(id, payload)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.repo.getById(id)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_27 = _a.sent();
                        throw new Error(error_27);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.getVerifyTeacher = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_28;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getVerifyTeacher(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_28 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateCupo = function (cupo) { return __awaiter(_this, void 0, void 0, function () {
            var error_29;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.updateCupo(cupo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 2:
                        error_29 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getCupoLimite = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_30;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getCupoLimite()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_30 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.usersincupo = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_31;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.usersincupo()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_31 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.repo = new repository_1.UserRepository();
        this.countryRepo = new repository_2.CountryRepository();
    }
    return UserService;
}());
exports.UserService = UserService;
