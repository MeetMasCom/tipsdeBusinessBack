import {expect, describe, test, beforeEach, jest, beforeAll} from '@jest/globals';
import Migrator from 'ts-migrate-mongoose';
import { default as migrateConfig} from '../../../../../migrate';
import * as fs from "fs"
import { BatchUpdateBalanceStripeService } from '../../../../../src/modules/stripe/services/batch-update-balance-stripe.service';

describe('Import stripe orders into database', () => {

    let migrator: Migrator;

    beforeEach(async () => {

        migrator = await Migrator.connect(migrateConfig);

        let migrationsList = await migrator.list();
        let collections = await migrator.connection.db.listCollections().toArray();
        
        for(let i=0; i < collections.length; i++)
            await migrator.connection.collection(collections[i].name).drop(); 

        for(let i=0; i < migrationsList.length; i++)
            await migrator.run("up", migrationsList[i].name);


    }, 60000);

    test('Importing Data', async () => {

        let ordersFile = fs.readFileSync("tests/integration/modules/stripe/orders.json", { encoding: 'utf8' });
        let orders = JSON.parse(ordersFile);

        let batchUpdateBalanceStripeService = new BatchUpdateBalanceStripeService(orders.data);
        await batchUpdateBalanceStripeService.execute();

        let balanceUser:any = await migrator.connection.collection("balanceUser").findOne({"userId": "64e81a9f891ebb36280e330b" });
        expect(balanceUser.balance).toBe(5);

        batchUpdateBalanceStripeService = new BatchUpdateBalanceStripeService(orders.data);
        await batchUpdateBalanceStripeService.execute();

        balanceUser = await migrator.connection.collection("balanceUser").findOne({"userId": "64e81a9f891ebb36280e330b" });
        expect(balanceUser.balance).toBe(5);


        

    }, 60000);

});