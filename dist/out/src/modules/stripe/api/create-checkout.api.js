"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeCreateCheckoutApi = void 0;
const checkout_api_1 = require("./checkout.api");
class StripeCreateCheckoutApi extends checkout_api_1.StripeCheckoutApi {
    execute(params) {
        return this.stripe.checkout.sessions.create(params);
    }
}
exports.StripeCreateCheckoutApi = StripeCreateCheckoutApi;
