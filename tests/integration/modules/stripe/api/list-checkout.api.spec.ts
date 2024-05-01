import {expect, describe, test, beforeEach} from '@jest/globals';
import * as fs from "fs"
import { StripeListCheckoutApi } from '../../../../../src/modules/stripe/api/list-checkout.api';

describe('Testing stripe integration service', () => {

    let stripe:StripeListCheckoutApi;

    beforeEach(() => {

        let authFile = fs.readFileSync("stripe_token.test.json", { encoding: 'utf8' });
        let authData = JSON.parse(authFile);

        stripe = new StripeListCheckoutApi(authData.token);

    });

    test('Lists checkout sessions after an specific period', async () => {

        let result:any = await stripe.execute({ created : { gt: 1713741578}, limit: 4});

        console.dir(result, { depth: null });

        expect(result.data.length).toBeGreaterThan(0);  

    }, 60000);
    
});