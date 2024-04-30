import {expect, describe, test, beforeEach} from '@jest/globals';
import { default as migrateConfig} from '../../../../../migrate';
import Migrator from 'ts-migrate-mongoose'
import { RechargeBalanceStripeService } from '../../../../../src/modules/stripe/services/recharge-balance-stripe.service';


describe('Testing stripe integration service', () => {

    let rechargeBalanceService:RechargeBalanceStripeService;
    let migrator: Migrator;

    beforeEach(async () => {

        rechargeBalanceService = new RechargeBalanceStripeService();

        migrator = await Migrator.connect(migrateConfig);

        let migrationsList = await migrator.list();
        let collections = await migrator.connection.db.listCollections().toArray();
        
        for(let i=0; i < collections.length; i++)
            await migrator.connection.collection(collections[i].name).drop(); 

        for(let i=0; i < migrationsList.length; i++)
            await migrator.run("up", migrationsList[i].name);

    }, 60000);

    test('Recharging balance', async () => {

        let result:any = await rechargeBalanceService.execute(
            100,
            "64e81a9f891ebb36280e330b",
            "pi_1234"
        );

        let balanceUser:any = await migrator.connection.collection("balanceUser").findOne({"userId": "64e81a9f891ebb36280e330b" });

        expect(balanceUser.balance).toBe(1);

        result = await rechargeBalanceService.execute(
            320,
            "64e81a9f891ebb36280e330b",
            "pi_6789"
        );

        balanceUser = await migrator.connection.collection("balanceUser").findOne({"userId": "64e81a9f891ebb36280e330b" });

        expect(balanceUser.balance).toBe(4.2);

        let rechargeUser:any = await migrator.connection.collection("rechargeUser").find({ "userId": "64e81a9f891ebb36280e330b"}).toArray();

        expect(rechargeUser.length).toBe(2)
        expect(rechargeUser[0].amount).toBe(1);
        expect(rechargeUser[0].status).toBe(1);
        expect(rechargeUser[1].amount).toBe(3.2);
        expect(rechargeUser[1].status).toBe(1);

        result = await rechargeBalanceService.execute(
            320,
            "64e81a9f891ebb36280e330b",
            "pi_6789"
        );

        rechargeUser = await migrator.connection.collection("rechargeUser").find({ "userId": "64e81a9f891ebb36280e330b"}).toArray();

        expect(rechargeUser.length).toBe(2);

        let transactions:any = await migrator.connection.collection("recordsTransactions").find({ "userId": "64e81a9f891ebb36280e330b"}).toArray();

        expect(transactions.length).toBe(2);
                
        expect(transactions[0].stripePaymentIntent).toBe('pi_1234');
        expect(transactions[1].stripePaymentIntent).toBe('pi_6789');

    }, 60000);
    
});