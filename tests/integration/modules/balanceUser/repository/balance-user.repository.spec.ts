import {expect, describe, test, beforeEach} from '@jest/globals';
import { default as defineEnvironment} from '../../../../../dotenv-environment-file'
import { BalanceUserI, RechargeI } from '../../../../../src/interfaces/balanceUser';
import { BalanceUserRepository } from '../../../../../src/modules/balanceUser/repository';
import Migrator from 'ts-migrate-mongoose'
import { default as migrateConfig} from '../../../../../migrate';
import { afterEach } from 'node:test';
import mongoose from "mongoose";

describe('Testing user balance database operations', () => {

    let balanceUserRepository:BalanceUserRepository
    let migrator: Migrator;

    beforeEach(async () => {
        
        balanceUserRepository = new BalanceUserRepository();

        migrator = await Migrator.connect(migrateConfig);

        let migrationsList = await migrator.list();
        let collections = await migrator.connection.db.listCollections().toArray();
        
        for(let i=0; i < collections.length; i++)
            await migrator.connection.collection(collections[i].name).drop(); 

        for(let i=0; i < migrationsList.length; i++)
            await migrator.run("up", migrationsList[i].name);        


    }, 60000);

    test('Updating balance', async () => {

        let user:any = await migrator.connection.collection("users").findOne({"userName": "tipsdebusiness" })

        let data: BalanceUserI = {
            balance: 1.50,
            userId: user._id
        };
        
        let result = await balanceUserRepository.save(data);

        expect(result.balance).toBe(1.5);
        expect(result.userId).toBe('64e81a9f891ebb36280e330b');

    }, 60000);

});