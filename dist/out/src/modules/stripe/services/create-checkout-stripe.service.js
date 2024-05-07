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
exports.CreateCheckoutStripeService = void 0;
const repository_1 = require("../../user/repository");
class CreateCheckoutStripeService {
    constructor(stripeCheckoutApi) {
        this.stripeCheckoutApi = stripeCheckoutApi;
        this.userRepository = new repository_1.UserRepository();
    }
    execute(price_1, userName_1) {
        return __awaiter(this, arguments, void 0, function* (price, userName, paymentMode = 'payment') {
            let formattedPrice = parseInt(price.replace(/[\.,]/i, ""));
            let user = yield this.userRepository.getByEmailOrUserName("", userName);
            let params = {
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: 'Recharge',
                            },
                            unit_amount: formattedPrice,
                        },
                        quantity: 1,
                    },
                ],
                mode: paymentMode,
                metadata: {
                    user_id: user._id.toHexString()
                },
                success_url: process.env.STRIPE_SUCCESSFUL_URL,
                cancel_url: process.env.STRIPE_CANCEL_URL
            };
            return yield this.stripeCheckoutApi.execute(params);
        });
    }
}
exports.CreateCheckoutStripeService = CreateCheckoutStripeService;
