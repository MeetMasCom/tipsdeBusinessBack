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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const enviroment_1 = require("../../constants/enviroment");
const bcryptHelper_1 = require("../../helpers/bcryptHelper");
const emailHelper_1 = __importDefault(require("../../helpers/emailHelper"));
const stringHelper_1 = require("../../helpers/stringHelper");
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
const moment_1 = __importDefault(require("moment"));
const jwtHelper_1 = require("../../helpers/jwtHelper");
const repository_2 = require("../country/repository");
class UserService {
    constructor() {
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repo.getById(id);
                response.password = "xxxxxxxxxxxxxxxxxx";
                const country = yield this.countryRepo.getById(response.country);
                console.log(country);
                // response.country = country.name;
                console.log(response);
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getUserValidate = (search) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repo.getByEmailOrUserName(search, search);
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getCountUser = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.repo.getAll();
                const response = {
                    total: users.length,
                    men: 0,
                    woman: 0,
                    online: 0,
                };
                users.forEach((user) => {
                    if (user.online)
                        response.online++;
                    if (user.gender == "M")
                        response.men++;
                    if (user.gender == "F")
                        response.woman++;
                });
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.logout = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repo.online(id, false);
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.save = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const bcryptHelper = new bcryptHelper_1.BcryptHelper();
                const validUser = yield this.repo.getByEmailOrUserName(params.email, params.userName);
                if (validUser)
                    throw new Error("El usuario o email ya fueron registrados.");
                params.password = yield bcryptHelper.encrypt(params.password);
                params.state = [enviroment_1.USER_STATE];
                params.type = enviroment_1.USER_TYPE;
                params.sponsorCode = params.userName;
                params.age =
                    new Date().getFullYear() - new Date(params.dateBirth).getFullYear();
                const response = yield this.repo.save(params);
                const sponsor = params.sponsor;
                delete params.sponsor;
                if (sponsor != undefined) {
                    const userId = (yield this.repo.getByEmailOrUserName("", sponsor))
                        ._id;
                    const level = (yield this.repo.getReferUser(userId)).length + 1;
                    if (level < 7) {
                        const refer = {
                            userId,
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
                            level,
                        };
                        yield this.repo.saveReferUser(refer);
                    }
                }
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.login = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const jwtHelper = new jwtHelper_1.JwtHelper();
                const bcryptHelper = new bcryptHelper_1.BcryptHelper();
                const stringHelper = new stringHelper_1.StringHelper();
                const emailHelper = new emailHelper_1.default();
                const findUser = yield this.repo.getByEmailOrUserName("", params.userName);
                if (!findUser)
                    throw new Error("Creedenciales incorrectas");
                const validPassword = yield bcryptHelper.compare(params.password, findUser.password);
                if (!validPassword)
                    throw new Error("Creedenciales incorrectas");
                const userOpt = yield this.repo.saveOtp({
                    used: false,
                    otp: stringHelper.generateRandomSixDigitNumber(),
                    userId: findUser._id,
                });
                emailHelper.loginUser(findUser.userName, userOpt.otp, findUser.email);
                const token = jwtHelper.create({
                    userId: findUser._id,
                    userName: findUser.userName,
                    state: findUser.state,
                });
                delete findUser.password;
                const user = {
                    _id: findUser._id,
                    dateBirth: findUser.dateBirth,
                    userName: findUser.userName,
                    email: findUser.email,
                    sponsorCode: findUser.sponsorCode,
                    state: findUser.state,
                    type: findUser.type,
                    agreements: findUser.agreements
                };
                yield this.repo.online(findUser._id, true);
                return { user, token };
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.validOpt = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const jwtHelper = new jwtHelper_1.JwtHelper();
                const findUser = yield this.repo.getByEmailOrUserName("", params.userName);
                if (!findUser)
                    throw new Error("Creedenciales incorrectas");
                params.userId = findUser._id;
                const opt = yield this.repo.validOtp(params);
                if (!opt)
                    throw new Error("Creedenciales incorrectas");
                const timeStampOpt = (0, moment_1.default)(opt.createdAt).format();
                const maxTimeStamp = (0, moment_1.default)(opt.createdAt)
                    .add(enviroment_1.TIME_EXPIRE, "minute")
                    .format();
                yield this.repo.updateOtp(opt._id, true);
                if (!(0, moment_1.default)().isBetween(timeStampOpt, maxTimeStamp)) {
                    throw new Error("Código de verificación expirado, vuela a iniciar sesión");
                }
                const token = jwtHelper.create({
                    userId: findUser._id,
                    userName: findUser.userName,
                    state: findUser.state,
                });
                delete findUser.password;
                const user = {
                    _id: findUser._id,
                    dateBirth: findUser.dateBirth,
                    userName: findUser.userName,
                    email: findUser.email,
                    sponsorCode: findUser.sponsorCode,
                    state: findUser.state,
                    type: findUser.type,
                    agreements: findUser.agreements
                };
                yield this.repo.online(findUser._id, true);
                return { user, token };
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updateBasic = (id, payload) => __awaiter(this, void 0, void 0, function* () {
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
            try {
                const validUser = yield this.repo.getById(id);
                if (!validUser)
                    throw new Error("El usuario no existe.");
                if (!((_a = validUser.state) === null || _a === void 0 ? void 0 : _a.includes(1)))
                    validUser.state.push(1);
                payload = Object.assign({ state: validUser.state }, payload);
                yield this.repo.update(id, payload);
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updateAddress = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            try {
                const validUser = yield this.repo.getById(id);
                if (!validUser)
                    throw new Error("El usuario no existe.");
                if (!((_b = validUser.state) === null || _b === void 0 ? void 0 : _b.includes(2)))
                    validUser.state.push(2);
                payload = Object.assign({ state: validUser.state }, payload);
                yield this.repo.update(id, payload);
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updateMatch = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            var _c;
            try {
                // const validUserIdentification = await this.repo.getByIdentification(id);
                // if (validUserIdentification)
                //   throw new Error("El número de identificación ya fue registrado.");
                const validUser = yield this.repo.getById(id);
                if (!validUser)
                    throw new Error("El usuario no existe.");
                if (!((_c = validUser.state) === null || _c === void 0 ? void 0 : _c.includes(3)))
                    validUser.state.push(3);
                payload = Object.assign({ state: validUser.state }, payload);
                yield this.repo.update(id, payload);
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.recoverUsername = (mail) => __awaiter(this, void 0, void 0, function* () {
            try {
                const emailHelper = new emailHelper_1.default();
                const stringHelper = new stringHelper_1.StringHelper();
                const validUser = yield this.repo.getByEmailOrUserName(mail, "");
                if (!validUser)
                    throw new Error("El usuario no existe.");
                const fullname = `${validUser.firstname != undefined ? validUser.firstname : ""} ${validUser.lastname != undefined ? validUser.lastname : ""}`;
                yield emailHelper.recoverUsername(fullname, validUser.userName, mail);
                return `Se ha enviado tu usuario al correo ${stringHelper.hideEmail(validUser.email)}`;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.recoverPassword = (username) => __awaiter(this, void 0, void 0, function* () {
            try {
                const emailHelper = new emailHelper_1.default();
                const stringHelper = new stringHelper_1.StringHelper();
                const validUser = yield this.repo.getByEmailOrUserName("", username);
                if (!validUser)
                    throw new Error("El usuario no existe.");
                const userOpt = yield this.repo.saveOtp({
                    used: false,
                    otp: stringHelper.generateRandomSixDigitNumber(),
                    userId: validUser._id,
                });
                yield emailHelper.recoverPassword(validUser.userName, userOpt.otp, validUser.email);
                return `Se ha enviado un código de verificación al correo ${stringHelper.hideEmail(validUser.email)}`;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.codigoresetPassword = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const bcryptHelper = new bcryptHelper_1.BcryptHelper();
                const findUser = yield this.repo.getByEmailOrUserName("", params.username);
                if (!findUser)
                    throw new Error("Usuario no encontrado");
                const otp = {
                    otp: params.code,
                    userName: params.username,
                    userId: findUser._id,
                };
                const opt = yield this.repo.validOtp(otp);
                if (!opt)
                    throw new Error("EL Código otp es incorrecto");
                const timeStampOpt = (0, moment_1.default)(opt.createdAt).format();
                const maxTimeStamp = (0, moment_1.default)(opt.createdAt)
                    .add(enviroment_1.TIME_EXPIRE, "minute")
                    .format();
                yield this.repo.updateOtp(opt._id, true);
                if (!(0, moment_1.default)().isBetween(timeStampOpt, maxTimeStamp)) {
                    throw new Error("Código de verificación expirado, vuela a intentarlo");
                }
                const password = yield bcryptHelper.encrypt(params.password);
                yield this.repo.updatePassword(findUser._id, password);
                return "Se ha resetado su contraseña con exito.";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.resetPassword = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const bcryptHelper = new bcryptHelper_1.BcryptHelper();
                const findUser = yield this.repo.getByEmailOrUserName("", params.username);
                if (!findUser)
                    throw new Error("Usuario no encontrado");
                const otp = {
                    otp: params.code,
                    userName: params.username,
                    userId: findUser._id,
                };
                const opt = yield this.repo.validOtp(otp);
                if (!opt)
                    throw new Error("EL Código otp es incorrecto");
                const timeStampOpt = (0, moment_1.default)(opt.createdAt).format();
                const maxTimeStamp = (0, moment_1.default)(opt.createdAt)
                    .add(enviroment_1.TIME_EXPIRE, "minute")
                    .format();
                yield this.repo.updateOtp(opt._id, true);
                if (!(0, moment_1.default)().isBetween(timeStampOpt, maxTimeStamp)) {
                    throw new Error("Código de verificación expirado, vuela a intentarlo");
                }
                const password = yield bcryptHelper.encrypt(params.password);
                yield this.repo.updatePassword(findUser._id, password);
                return "Se ha resetado su contraseña con exito.";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getByIdUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByIdUser(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllUser = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllUser();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getReferUser = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                let response = [];
                const data = yield this.repo.getReferUser(userId);
                yield Promise.all(data.map((element) => __awaiter(this, void 0, void 0, function* () {
                    var _d, _e;
                    const result = yield new repository_1.UserRepository().getById(element.referralsId);
                    const firstname = (_d = result.firstname) !== null && _d !== void 0 ? _d : '------';
                    const lastname = (_e = result.lastname) !== null && _e !== void 0 ? _e : '------';
                    response.push({
                        level: element.level,
                        user: result.userName,
                        name: firstname + ' ' + lastname,
                        referralsId: element.referralsId,
                        userId: element.userId
                    });
                    return element;
                })));
                return response;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getUserGender = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getUserGender(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllUserSearch = (body) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllUserSearch(body);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getUserOnline = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getUserOnline(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getUserActive = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getUserActive(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateAgreements = (id, agreements) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateAgreements(id, agreements);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateSocialAgreements = (id, agreements) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateSocialAgreements(id, agreements);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateDNI = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validUser = yield this.repo.getById(id);
                if (!validUser)
                    throw new Error("El usuario no existe.");
                payload = Object.assign({ state: validUser.state }, payload);
                yield this.repo.update(id, payload);
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.verifyUser = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validUser = yield this.repo.getById(id);
                if (!validUser)
                    throw new Error("El usuario no existe.");
                payload = Object.assign({ state: validUser.state }, payload);
                yield this.repo.verifyUser(id, payload);
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getUserSocialAgreements = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getUserSocialAgreements();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateBalanceRefer = (userId, price) => __awaiter(this, void 0, void 0, function* () {
            try {
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updateTypeUser = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const validUserIdentification = await this.repo.getByIdentification(id);
                // if (validUserIdentification)
                //   throw new Error("El número de identificación ya fue registrado.");
                const validUser = yield this.repo.getById(id);
                if (!validUser)
                    throw new Error("El usuario no existe.");
                yield this.repo.update(id, payload);
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getVerifyTeacher = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getVerifyTeacher(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateCupo = (cupo) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateCupo(cupo);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getCupoLimite = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getCupoLimite();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.usersincupo = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.usersincupo();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.UserRepository();
        this.countryRepo = new repository_2.CountryRepository();
    }
}
exports.UserService = UserService;
