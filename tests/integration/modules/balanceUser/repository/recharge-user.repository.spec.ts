import {expect, describe, test, beforeEach} from '@jest/globals';
import { RechargeI } from '../../../../../src/interfaces/balanceUser';
import { BalanceUserRepository } from '../../../../../src/modules/balanceUser/repository';
import Migrator from 'ts-migrate-mongoose'
import { default as migrateConfig} from '../../../../../migrate';
import { afterEach } from 'node:test';
import mongoose from "mongoose";

describe('Testing recharge user database operations', () => {

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

    test('Insert a new recharge entry', async () => {

        let user:any = await migrator.connection.collection("users").findOne({"userName": "tipsdebusiness" })

        let data: RechargeI = {
            amount: 1.50,
            detail: 'Testing Recharge',
            userId: user._id,
            status: 0
        };
        
        let result = await balanceUserRepository.createRecharge(data);

        expect(result.amount).toBe(1.5);
        expect(result.detail).toBe('Testing Recharge');
        expect(result.status).toBe(0);
        expect(result.userId).toBe('64e81a9f891ebb36280e330b');

    }, 60000);

});