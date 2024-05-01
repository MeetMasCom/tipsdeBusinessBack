import {expect, describe, test, beforeEach} from '@jest/globals';
import Stripe from 'stripe';
import { StripeCreateCheckoutApi } from '../../../../../src/modules/stripe/api/create-checkout.api';
import * as fs from "fs"

describe('Testing stripe integration service', () => {

    let stripe:StripeCreateCheckoutApi;

    beforeEach(() => {

        let authFile = fs.readFileSync("stripe_token.test.json", { encoding: 'utf8' });
        let authData = JSON.parse(authFile);

        stripe = new StripeCreateCheckoutApi(authData.token);

    });

    test('Integrating checkout', async () => {

        let paymentMode: Stripe.Checkout.SessionCreateParams.Mode = 'payment'
        
        let params:Stripe.Checkout.SessionCreateParams = {
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
            mode: paymentMode,
            success_url: 'http://localhost:4200/success',
            cancel_url: 'http://localhost:4200/cancel',
            metadata: {
                client_reference_id: '123' 
            },
            client_reference_id: '123'
        }

        let result:any = await stripe.execute(params);

        console.log(result);

        expect(result.url).not.toBeNull();
        expect(result.client_reference_id).toBe('123');

    }, 60000);
    
});