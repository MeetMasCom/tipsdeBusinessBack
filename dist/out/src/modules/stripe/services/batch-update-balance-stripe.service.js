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
exports.BatchUpdateBalanceStripeService = void 0;
const recharge_balance_stripe_service_1 = require("./recharge-balance-stripe.service");
class BatchUpdateBalanceStripeService {
    constructor(importedData) {
        this.importedData = importedData;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            let rechargeBalanceService = new recharge_balance_stripe_service_1.RechargeBalanceStripeService();
            for (let element of this.importedData)
                yield rechargeBalanceService.execute(element.amount_total, element.metadata.user_id, element.payment_intent);
        });
    }
}
exports.BatchUpdateBalanceStripeService = BatchUpdateBalanceStripeService;
