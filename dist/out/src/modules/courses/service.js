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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
const service_1 = require("../recordsTransactions/service");
const repository_2 = require("../balanceUser/repository");
const repository_3 = require("../balanceCompany/repository");
const service_2 = require("../user/service");
class PostService {
    constructor() {
        this.saveCourse = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveCourse(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getCourseByIdUser = (id, tipo) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getCourseByIdUser(id, tipo);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getCourseById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getCourseById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllCourses = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllCourses();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllInLive = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllInLive();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getCourseByCategoria = (id, tipo) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getCourseByCategoria(id, tipo);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getCourseByUser = (id, tipo) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getCourseByUser(id, tipo);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getCourseByUserStudent = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getCourseByUserStudent(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getTopCourses = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getTopCourses();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.saveBuyCourse = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                //valid balance
                const buyMembership = yield this.repo.saveCourseUser(data);
                const balance = yield new repository_2.BalanceUserRepository().getAllByUserId(data.userId);
                if (!balance)
                    throw new Error("Saldo insuficiente, realice una recarga...");
                const packageData = yield new repository_1.CoursesRepository().getById(data.courseId);
                if (!packageData)
                    throw new Error("No existe información de paquete de visitas...");
                if (balance.balance < Number(packageData.price))
                    throw new Error("Saldo insuficiente, realice una recarga...");
                //actualizar saldo usuario
                yield new repository_2.BalanceUserRepository().updateBalance(balance._id, {
                    balance: Number(balance.balance) - Number(packageData.price)
                });
                const price = Number(packageData.price) * 0.50;
                //actualizar saldo empresa referidos
                const walletE = yield new repository_3.BalanceCompanyRepository().getByBalanceCompany();
                if (walletE.length > 0) {
                    yield new repository_3.BalanceCompanyRepository().update(walletE[0]._id, {
                        balance: Number(walletE[0].balance) + Number(price),
                    });
                }
                else {
                    yield new repository_3.BalanceCompanyRepository().save({
                        balance: Number(price)
                    });
                }
                yield new service_2.UserService().updateBalanceRefer(data.userId, price);
                const payload = {
                    value: Number(packageData.price),
                    companyValue: price,
                    referValue: price,
                    detail: `Compra anuncio ${packageData.title}`,
                    userId: data.userId,
                    status: true,
                    typeTransaction: 'Compra anuncio',
                    walletId: ""
                };
                yield new service_1.RecordsTransactionService().save(payload);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.verifyCourseUser = (id, idC) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.verifyCourseUser(id, idC);
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
        this.repo = new repository_1.CoursesRepository();
    }
}
exports.PostService = PostService;
