import {expect, describe, test, beforeEach} from '@jest/globals';
import Migrator from 'ts-migrate-mongoose';
import { default as migrateConfig} from '../../../../../migrate';
import { RecordsTransactionRepository } from '../../../../../src/modules/recordsTransactions/repository';
import { RecordsTransactionI } from '../../../../../src/interfaces/recordsTransactions';

describe('Testing stripe transactions database operations', () => {

    let recordTransactionsRepository: RecordsTransactionRepository;
    let migrator: Migrator;

    beforeEach(async () => {
        
        recordTransactionsRepository = new RecordsTransactionRepository();

        migrator = await Migrator.connect(migrateConfig);

        let migrationsList = await migrator.list();
        let collections = await migrator.connection.db.listCollections().toArray();
        
        for(let i=0; i < collections.length; i++)
            await migrator.connection.collection(collections[i].name).drop(); 

        for(let i=0; i < migrationsList.length; i++)
            await migrator.run("up", migrationsList[i].name);        


    }, 60000);

    test('Insert a new transaction', async () => {

        let user:any = await migrator.connection.collection("users").findOne({"userName": "tipsdebusiness" })

        let data: RecordsTransactionI = {
            walletId: "",
            detail: "Recarga Stripe",
            stripePaymentIntent: 'pi_trfg6trtfggf',
            typeTransaction: "Recarga Stripe",
            userId: user._id,
            value: 1.00
        };
        
        let result = await recordTransactionsRepository.save(data);

        expect(result.stripePaymentIntent).toBe('pi_trfg6trtfggf');
        expect(result.userId).toBe('64e81a9f891ebb36280e330b');

    }, 60000);

    test('Get Record by stripe payment intent', async () => {

        let user:any = await migrator.connection.collection("users").findOne({"userName": "tipsdebusiness" })

        let data: RecordsTransactionI = {
            walletId: "",
            detail: "Recarga Stripe",
            stripePaymentIntent: 'pi_trfg6trtfggf',
            typeTransaction: "Recarga Stripe",
            userId: user._id,
            value: 1.00
        };
        
        await recordTransactionsRepository.save(data);
        let result:any = await recordTransactionsRepository.getByStripePaymentIntent('pi_trfg6trtfggf');

        expect(result.stripePaymentIntent).toBe('pi_trfg6trtfggf');
        expect(result.userId).toBe('64e81a9f891ebb36280e330b');

    }, 60000);

    /*test('Find a transaction entry by user id', async () => {

        let user:any = await migrator.connection.collection("users").findOne({"userName": "tipsdebusiness" })

        let data: StripeTransactionsI = {
            payment_intent: 'pi_trfg6trtfggf',
            userId: user._id,
        };
        
        await recordTransactionsRepository.save(data);

        let result:any = await recordTransactionsRepository.getByUserId(data.userId);

        expect(result[0].payment_intent).toBe('pi_trfg6trtfggf');
        expect(result[0].userId).toBe('64e81a9f891ebb36280e330b');

    }, 60000);

    test('Find a transaction entry by payment intent', async () => {

        let user:any = await migrator.connection.collection("users").findOne({"userName": "tipsdebusiness" })

        let data: StripeTransactionsI = {
            payment_intent: 'pi_trfg6trtfggf',
            userId: user._id,
        };
        
        await recordTransactionsRepository.save(data);

        let result:any = await recordTransactionsRepository.getByPaymentIntent('pi_trfg6trtfggf');

        expect(result.payment_intent).toBe('pi_trfg6trtfggf');
        expect(result.userId).toBe('64e81a9f891ebb36280e330b');

    }, 60000);*/

});