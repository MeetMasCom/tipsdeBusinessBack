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
exports.AdminService = void 0;
const moment_1 = __importDefault(require("moment"));
const messages_1 = require("../../constants/messages");
const bcryptHelper_1 = require("../../helpers/bcryptHelper");
const emailHelper_1 = __importDefault(require("../../helpers/emailHelper"));
const jwtHelper_1 = require("../../helpers/jwtHelper");
const stringHelper_1 = require("../../helpers/stringHelper");
const repository_1 = require("./repository");
const enviroment_1 = require("../../constants/enviroment");
class AdminService {
    constructor() {
        this.save = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const bcryptHelper = new bcryptHelper_1.BcryptHelper();
                params.password = yield bcryptHelper.encrypt(params.password);
                return yield this.repo.save(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
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
                    userName: findUser.userName,
                    email: findUser.email,
                    sponsorCode: findUser.sponsorCode,
                    state: findUser.state,
                    rol: findUser.rol
                };
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
                    userName: findUser.userName,
                    email: findUser.email,
                    sponsorCode: findUser.sponsorCode,
                    state: findUser.state,
                    rol: findUser.rol
                };
                return { user, token };
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAll();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByRol = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByRol(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
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
        this.updateAdmin = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.updateAdmin(id, payload);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateState = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.updateState(id, payload);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.AdminRepository();
    }
}
exports.AdminService = AdminService;
