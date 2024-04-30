import Stripe from "stripe";

export class StripeCheckoutApi {

    stripe:Stripe;

    constructor(secretKey: string) {
        this.stripe = new Stripe(secretKey);
    }

}