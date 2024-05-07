"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeListCheckoutApi = void 0;
const checkout_api_1 = require("./checkout.api");
class StripeListCheckoutApi extends checkout_api_1.StripeCheckoutApi {
    execute(params) {
        return this.stripe.checkout.sessions.list(params);
    }
}
exports.StripeListCheckoutApi = StripeListCheckoutApi;
