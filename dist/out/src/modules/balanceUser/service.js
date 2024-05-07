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
exports.BalanceUserService = void 0;
const messages_1 = require("../../constants/messages");
const emailHelper_1 = __importDefault(require("../../helpers/emailHelper"));
const repository_1 = require("../billeteraE/repository");
const repository_2 = require("../billeteraU/repository");
const repository_3 = require("../user/repository");
const repository_4 = require("./repository");
class BalanceUserService {
    constructor() {
        this.getAll = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllRechargByUserId(userId);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getBalanceUser = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                return [yield this.repo.getAllByUserId(userId)];
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByUserId = (userId, walletId) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByUserId(userId, walletId);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.update = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                let balance = 0;
                const validBalanceUser = yield this.repo.getById(id);
                if (validBalanceUser)
                    balance = Number(validBalanceUser.balance);
                payload.balance = balance + Number(payload.balance);
                yield this.repo.update(id, payload);
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.recharge = (payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.createRecharge(payload);
                return 'Solicitud de recarga enviada...';
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.reviewRecharge = (payload) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                //console.log(payload);
                const emailHelper = new emailHelper_1.default();
                const recharg = yield this.repo.getRechargeById(payload.id);
                const findUser = yield new repository_3.UserRepository().getById(recharg.userId);
                yield this.repo.reviewRecharge(payload);
                //aprobado
                if (payload.status == 1) {
                    //actualizar saldo 
                    const data = {
                        userId: findUser._id,
                        balance: payload.value,
                    };
                    yield this.update(findUser._id, data);
                }
                emailHelper.reviewRecharg(findUser.userName, (_a = recharg.hash) !== null && _a !== void 0 ? _a : "", payload.remark, findUser.email, payload.status);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.reviewRetreat = (payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const emailHelper = new emailHelper_1.default();
                const retreat = yield this.repo.getRetreatById(payload.id);
                const findUser = yield new repository_3.UserRepository().getById(retreat.userId);
                yield this.repo.reviewRetreat(payload);
                //aprobado
                if (payload.status == 1) {
                    //actualizar saldo 
                }
                emailHelper.reviewRetreat(findUser.userName, retreat._id, payload.remark, findUser.email, payload.status, payload.file, payload.value);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.retreat = (payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userBalance = yield this.repo.getAllByUserId(payload.userId);
                if (!userBalance)
                    throw new Error("No tiene saldo para retirar...");
                const walletU = (yield new repository_2.BilleteraURepository().getById(payload.walletId))[0];
                if (!walletU)
                    throw new Error("No tiene información de billetera usuario...");
                const walletE = yield new repository_1.BilleteraRepository().getById(walletU.tipo);
                if (!walletE)
                    throw new Error("No tiene información de billetera empresa...");
                const user = yield new repository_3.UserRepository().getById(payload.userId);
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
                yield this.repo.createRetreat(payload);
                return 'Solicitud de retiro enviada...';
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getAllRetreatByUser = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllRetreatByUser(userId);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getAllRetreat = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.repo.getAllRetreat();
                let response = [];
                yield Promise.all(data.map((element) => __awaiter(this, void 0, void 0, function* () {
                    const user = yield new repository_3.UserRepository().getById(element.userId);
                    const walletU = yield new repository_2.BilleteraURepository().getById(element.walletId);
                    response.push({
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
                    return element;
                })));
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updateBalance = (Id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.update(Id, payload);
                return yield this.repo.getById(Id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.repo = new repository_4.BalanceUserRepository();
    }
}
exports.BalanceUserService = BalanceUserService;
