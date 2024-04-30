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
exports.BilleteraUService = void 0;
const moment_1 = __importDefault(require("moment"));
const messages_1 = require("../../constants/messages");
const emailHelper_1 = __importDefault(require("../../helpers/emailHelper"));
const stringHelper_1 = require("../../helpers/stringHelper");
const repository_1 = require("../billeteraE/repository");
const repository_2 = require("../user/repository");
const repository_3 = require("./repository");
const enviroment_1 = require("../../constants/enviroment");
class BilleteraUService {
    constructor() {
        this.save = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.save(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.update = (id, params) => __awaiter(this, void 0, void 0, function* () {
            try {
                params.estado = true;
                delete params.tipoWalletC;
                yield this.repo.update(id, params);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
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
        this.getByIdUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const walletU = yield this.repo.getByIdUser(id);
                let response = [];
                yield Promise.all(walletU.map((element) => __awaiter(this, void 0, void 0, function* () {
                    const result = yield new repository_1.BilleteraRepository().getById(element.tipo);
                    response.push({
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
                    return element;
                })));
                return response;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.createOtp = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const stringHelper = new stringHelper_1.StringHelper();
                const emailHelper = new emailHelper_1.default();
                const findUser = yield new repository_2.UserRepository().getById(id);
                if (!findUser)
                    throw new Error("Creedenciales incorrectas");
                const userOpt = yield new repository_2.UserRepository().saveOtp({
                    used: false,
                    otp: stringHelper.generateRandomSixDigitNumber(),
                    userId: id,
                });
                emailHelper.loginUser(findUser.userName, userOpt.otp, findUser.email);
                return `Se ha enviado un código de verificación al correo ${stringHelper.hideEmail(findUser.email)}`;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.validOpt = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const opt = yield new repository_2.UserRepository().validOtp({
                    userId: data.userId,
                    otp: Number(data.otp),
                    userName: ""
                });
                if (!opt)
                    throw new Error("Creedenciales incorrectas");
                const timeStampOpt = (0, moment_1.default)(opt.createdAt).format();
                const maxTimeStamp = (0, moment_1.default)(opt.createdAt)
                    .add(enviroment_1.TIME_EXPIRE, "minute")
                    .format();
                yield new repository_2.UserRepository().updateOtp(opt._id, true);
                if (!(0, moment_1.default)().isBetween(timeStampOpt, maxTimeStamp)) {
                    throw new Error("Código de verificación expirado, vuela a intentarlo");
                }
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_3.BilleteraURepository();
    }
}
exports.BilleteraUService = BilleteraUService;
