import Stripe from 'stripe';
import { StripeCheckoutApi } from './checkout.api';

export class StripeListCheckoutApi extends StripeCheckoutApi {

    execute(params?: Stripe.Checkout.SessionListParams) {

        return this.stripe.checkout.sessions.list(params);
        
    }

}