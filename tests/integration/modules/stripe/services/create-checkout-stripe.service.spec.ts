import {expect, describe, test, beforeEach} from '@jest/globals';
import { CreateCheckoutStripeService } from '../../../../../src/modules/stripe/services/create-checkout-stripe.service';
import * as fs from "fs"
import { StripeCreateCheckoutApi } from '../../../../../src/modules/stripe/api/create-checkout.api';
import { default as migrateConfig} from '../../../../../migrate';
import Migrator from 'ts-migrate-mongoose'
import { default as defineEnvironment} from '../../../../../dotenv-environment-file'

defineEnvironment();

describe('Testing stripe integration service', () => {

    let createCheckoutStripeService:CreateCheckoutStripeService;
    let migrator: Migrator;

    beforeEach(async () => {

        let authFile = fs.readFileSync("stripe_token.test.json", { encoding: 'utf8' });
        let authData:any = JSON.parse(authFile);
        let stripe = new StripeCreateCheckoutApi(authData.token);

        createCheckoutStripeService = new CreateCheckoutStripeService(stripe);

        migrator = await Migrator.connect(migrateConfig);

        let migrationsList = await migrator.list();
        let collections = await migrator.connection.db.listCollections().toArray();
        
        for(let i=0; i < collections.length; i++)
            await migrator.connection.collection(collections[i].name).drop(); 

        for(let i=0; i < migrationsList.length; i++)
            await migrator.run("up", migrationsList[i].name);

    }, 60000);

    test('Integrating checkout', async () => {

        let result:any = await createCheckoutStripeService.execute(
            "1.00",
            "tipsdebusiness"
        );

        expect(result.url).not.toBeNull();
        expect(result.metadata.user_id).toBe("64e81a9f891ebb36280e330b");
        expect(result.amount_total).toBe(100);  
        
        result = await createCheckoutStripeService.execute(
            "52.3",
            "tipsdebusiness"
        );

        expect(result.url).not.toBeNull();
        expect(result.metadata.user_id).toBe("64e81a9f891ebb36280e330b");
        expect(result.amount_total).toBe(5230); 

        result = await createCheckoutStripeService.execute(
            "30",
            "tipsdebusiness"
        );

        expect(result.url).not.toBeNull();
        expect(result.metadata.user_id).toBe("64e81a9f891ebb36280e330b");
        expect(result.amount_total).toBe(3000); 

        result = await createCheckoutStripeService.execute(
            "308,25",
            "tipsdebusiness"
        );

        console.log(result);

        expect(result.url).not.toBeNull();
        expect(result.metadata.user_id).toBe("64e81a9f891ebb36280e330b");
        expect(result.amount_total).toBe(30825);

    }, 60000);
    
});