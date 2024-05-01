import {expect, describe, test, beforeEach} from '@jest/globals';
import { default as defineEnvironment} from '../../../../../dotenv-environment-file'
import { BalanceUserI, RechargeI } from '../../../../../src/interfaces/balanceUser';
import { BalanceUserRepository } from '../../../../../src/modules/balanceUser/repository';
import Migrator from 'ts-migrate-mongoose'
import { default as migrateConfig} from '../../../../../migrations/migrate'
import { afterEach } from 'node:test';
import mongoose, { Types } from "mongoose";
import { BalanceUserService } from '../../../../../src/modules/balanceUser/service';

defineEnvironment();

describe('Testing user balance database operations', () => {

    let balanceUserService:BalanceUserService;
    let migrator: Migrator;

    beforeEach(async () => {
        
        balanceUserService = new BalanceUserService();

        migrator = await Migrator.connect(migrateConfig);

        let migrationsList = await migrator.list();
        let collections = await migrator.connection.db.listCollections().toArray();
        
        for(let i=0; i < collections.length; i++)
            await migrator.connection.collection(collections[i].name).drop(); 

        for(let i=0; i < migrationsList.length; i++)
            await migrator.run("up", migrationsList[i].name);        


    }, 60000);

    test('Updating balance', async () => {
        
        let migrator = await Migrator.connect(migrateConfig);

        let user:any = await migrator.connection.collection("users").findOne({"userName": "tipsdebusiness" })

        let data: BalanceUserI = {
            balance: 1.50,
            userId: user._id
        };
        
        let balanceUserRepository = new BalanceUserRepository();
        
        let result:any = await balanceUserRepository.save(
            data
        );

        let balanceUserService = new BalanceUserService();

        let newBalanceResult = await balanceUserService.update(result._id, data);

        expect(newBalanceResult.balance).toBe(3);
        expect(newBalanceResult.userId).toBe('64e81a9f891ebb36280e330b');

    }, 60000);

});