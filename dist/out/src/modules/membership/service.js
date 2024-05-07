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
exports.MembershipService = void 0;
const moment_1 = __importDefault(require("moment"));
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
const repository_2 = require("../balanceUser/repository");
const service_1 = require("../recordsTransactions/service");
class MembershipService {
    constructor() {
        this.getAllMembership = () => __awaiter(this, void 0, void 0, function* () {
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
                throw new Error(error);
            }
        });
        this.save = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validMembership = yield this.repo.getByCode(params.code);
                if (validMembership)
                    throw new Error("La membresía ya fue registrada.");
                return yield this.repo.save(params);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.update = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validMembsership = yield this.repo.getById(id);
                if (!validMembsership)
                    throw new Error("La membresía no existe.");
                yield this.repo.update(id, payload);
                return yield this.repo.getById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.saveMembershipUser = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                const updateMembership = yield this.repo.getMembershipUser(params.userId);
                if (updateMembership !== null) {
                    yield this.repo.deleteMembershipUser(updateMembership._id);
                }
                const buyMembership = yield this.repo.saveMembershipUser(params);
                const membership = yield this.repo.getById(params.membershipId);
                const descuento = params.descuento / 100;
                const payload = {
                    value: membership.price - (membership.price * descuento),
                    companyValue: 0,
                    referValue: 0,
                    detail: `Compra membresía ${membership.name}`,
                    userId: params.userId,
                    status: true,
                    typeTransaction: 'Compra membresía',
                    walletId: '64815307cd63e1f5a8982369'
                };
                const valor = membership.price - (membership.price * descuento);
                yield new service_1.RecordsTransactionService().save(payload);
                return buyMembership;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.deleteMembershipUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validMembsership = yield this.repo.getMembershipUser(id);
                if (!validMembsership)
                    throw new Error("La membresía no existe.");
                return yield this.repo.deleteMembershipUser(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getMembershipUserById = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.repo.getMembershipUser(userId);
                if (!data) {
                    return null;
                }
                const validDate = (0, moment_1.default)(data.createdAt).add(1, 'months');
                const currentDate = (0, moment_1.default)();
                if (currentDate > validDate) {
                    yield this.repo.updateMembershipUser(data._id, {
                        membershipId: data.membershipId,
                        state: false,
                        userId: data.userId,
                        descuento: 0,
                        tiempo: data.tiempo
                    });
                    return null;
                }
                const membership = yield this.repo.getById(data.membershipId);
                return {
                    membershipId: data.membershipId,
                    state: data.state,
                    userId: data.userId,
                    createdAt: data.createdAt,
                    name: membership.name,
                    descuento: data.descuento,
                    tiempo: data.tiempo,
                };
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.repo = new repository_1.MembershipRepository();
        this.repoBalance = new repository_2.BalanceUserRepository();
    }
}
exports.MembershipService = MembershipService;
