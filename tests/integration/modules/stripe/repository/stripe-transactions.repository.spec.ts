import {expect, describe, test, beforeEach} from '@jest/globals';
import Migrator from 'ts-migrate-mongoose';
import { StripeTransactionsI } from '../../../../../src/interfaces/stripe/transactions.interface';
import { StripeRepository } from '../../../../../src/modules/stripe/repository';
import { default as migrateConfig} from '../../../../../migrate';

describe('Testing stripe transactions database operations', () => {

    let stripeRepository: StripeRepository;
    let migrator: Migrator;

    beforeEach(async () => {
        
        stripeRepository = new StripeRepository();

        migrator = await Migrator.connect(migrateConfig);

        let migrationsList = await migrator.list();
        let collections = await migrator.connection.db.listCollections().toArray();
        
        for(let i=0; i < collections.length; i++)
            await migrator.connection.collection(collections[i].name).drop(); 

        for(let i=0; i < migrationsList.length; i++)
            await migrator.run("up", migrationsList[i].name);        


    }, 60000);

    test('Insert a new stripe transaction entry', async () => {

        let user:any = await migrator.connection.collection("users").findOne({"userName": "tipsdebusiness" })

        let data: StripeTransactionsI = {
            payment_intent: 'pi_trfg6trtfggf',
            userId: user._id,
        };
        
        let result = await stripeRepository.save(data);

        expect(result.payment_intent).toBe('pi_trfg6trtfggf');
        expect(result.userId).toBe('64e81a9f891ebb36280e330b');

    }, 60000);

    test('Find a transaction entry by user id', async () => {

        let user:any = await migrator.connection.collection("users").findOne({"userName": "tipsdebusiness" })

        let data: StripeTransactionsI = {
            payment_intent: 'pi_trfg6trtfggf',
            userId: user._id,
        };
        
        await stripeRepository.save(data);

        let result:any = await stripeRepository.getByUserId(data.userId);

        expect(result[0].payment_intent).toBe('pi_trfg6trtfggf');
        expect(result[0].userId).toBe('64e81a9f891ebb36280e330b');

    }, 60000);

    test('Find a transaction entry by payment intent', async () => {

        let user:any = await migrator.connection.collection("users").findOne({"userName": "tipsdebusiness" })

        let data: StripeTransactionsI = {
            payment_intent: 'pi_trfg6trtfggf',
            userId: user._id,
        };
        
        await stripeRepository.save(data);

        let result:any = await stripeRepository.getByPaymentIntent('pi_trfg6trtfggf');

        expect(result.payment_intent).toBe('pi_trfg6trtfggf');
        expect(result.userId).toBe('64e81a9f891ebb36280e330b');

    }, 60000);

});