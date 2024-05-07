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
exports.RechargeBalanceStripeService = void 0;
const repository_1 = require("../../balanceUser/repository");
const service_1 = require("../../balanceUser/service");
const repository_2 = require("../../recordsTransactions/repository");
const repository_3 = require("../../user/repository");
class RechargeBalanceStripeService {
    execute(amount, userId, stripePaymentIntent) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!stripePaymentIntent)
                return;
            let balanceUserRepository = new repository_1.BalanceUserRepository();
            let recordTransactionsRepository = new repository_2.RecordsTransactionRepository();
            let balanceUserService = new service_1.BalanceUserService();
            let userRepository = new repository_3.UserRepository();
            let existPayment = yield recordTransactionsRepository.getByStripePaymentIntent(stripePaymentIntent);
            let user = yield userRepository.getById(userId);
            if (!user)
                return;
            if (existPayment)
                return;
            let rechargeData = {
                amount: amount / 100,
                detail: 'Recharging User Account',
                userId: user._id,
                status: 1
            };
            let balanceData = {
                balance: rechargeData.amount,
                userId: user._id
            };
            yield balanceUserRepository.createRecharge(rechargeData);
            let balanceUser = yield balanceUserService.getBalanceUser(userId);
            if (!balanceUser)
                yield balanceUserRepository.save(balanceData);
            else
                yield balanceUserService.update(userId, balanceData);
            let recordTransaction = {
                walletId: "",
                detail: "Recarga Stripe",
                stripePaymentIntent: stripePaymentIntent,
                typeTransaction: "Recarga Stripe",
                userId: user._id,
                value: rechargeData.amount
            };
            yield recordTransactionsRepository.save(recordTransaction);
        });
    }
}
exports.RechargeBalanceStripeService = RechargeBalanceStripeService;
