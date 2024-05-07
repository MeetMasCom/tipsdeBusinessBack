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
exports.BalanceCompanyService = void 0;
const messages_1 = require("../../constants/messages");
const service_1 = require("../user/service");
const repository_1 = require("./repository");
class BalanceCompanyService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAll();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllRechargs = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.repo.getAllRechargs();
                const userService = new service_1.UserService();
                let response = [];
                yield Promise.all(data.map((element) => __awaiter(this, void 0, void 0, function* () {
                    const result = yield userService.getById(element.userId);
                    element.user = `${result.firstname} ${result.lastname}`;
                    response.push({
                        id: element.id,
                        user: `${result.userName}`,
                        amount: element.amount,
                        createdAt: element.createdAt,
                        detail: element.detail,
                        dir: element.dir,
                        hash: element.hash,
                        updatedAt: element.updatedAt,
                        userId: element.userId,
                        walletId: element.walletId,
                        status: element.status,
                        file: element.file
                    });
                    return element;
                })));
                return response;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.repo = new repository_1.BalanceCompanyRepository();
    }
}
exports.BalanceCompanyService = BalanceCompanyService;
