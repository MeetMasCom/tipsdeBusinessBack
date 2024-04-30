import Stripe from 'stripe';
import { StripeCheckoutApi } from './checkout.api';

export class StripeCreateCheckoutApi extends StripeCheckoutApi {

    execute(params: Stripe.Checkout.SessionCreateParams) {

        return this.stripe.checkout.sessions.create(params);
        
    }

}