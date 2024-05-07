"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeApiService = void 0;
const stripe_1 = __importDefault(require("stripe"));
class StripeApiService {
    constructor() {
        this.execute = () => {
            let stripeInstance = new stripe_1.default('sk_test_51KBTCkA53AudquRteyArGM1so9PUss3EITS2qDIOyzPHYCX9A0iknVbqv1282MI8XNL7LAXVSfoo3pwFasCsOgkb00vuV1No8h');
            return stripeInstance.checkout.sessions.create({
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: 'Test-shirt',
                            },
                            unit_amount: 100,
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: 'http://localhost:4200/success',
                cancel_url: 'http://localhost:4200/cancel',
            });
        };
    }
}
exports.StripeApiService = StripeApiService;
