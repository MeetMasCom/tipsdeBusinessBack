import { RechargeI } from "../../../interfaces/balanceUser";
import { RecordsTransactionI } from "../../../interfaces/recordsTransactions";
import { retreatUserModelMongo } from "../../balanceUser/model";
import { BalanceUserRepository } from "../../balanceUser/repository";
import { BalanceUserService } from "../../balanceUser/service";
import { RecordsTransactionRepository } from "../../recordsTransactions/repository";
import { UserRepository } from "../../user/repository";

export class RechargeBalanceStripeService {

    async execute(amount: number, userId: string, stripePaymentIntent: string) {  
        
        if(!stripePaymentIntent)
            return;

        let balanceUserRepository = new BalanceUserRepository();
        let recordTransactionsRepository = new RecordsTransactionRepository();      
        let balanceUserService = new BalanceUserService();
        let userRepository = new UserRepository();

        let existPayment = await recordTransactionsRepository.getByStripePaymentIntent(stripePaymentIntent);
        let user:any = await userRepository.getById(userId);

        if(!user)
            return;

        if(existPayment)
            return;

        let rechargeData: RechargeI = {
            amount: amount / 100,
            detail: 'Recharging User Account',
            userId: user._id,
            status: 1
        };

        let balanceData = {
            balance: rechargeData.amount,
            userId: user._id
        }

        await balanceUserRepository.createRecharge(rechargeData);
        let balanceUser = await balanceUserService.getBalanceUser(userId);
        
        if(!balanceUser)
            await balanceUserRepository.save(balanceData);
        else
            await balanceUserService.update(userId, balanceData);

        let recordTransaction: RecordsTransactionI = {
            walletId: "",
            detail: "Recarga Stripe",
            stripePaymentIntent: stripePaymentIntent,
            typeTransaction: "Recarga Stripe",
            userId: user._id,
            value: rechargeData.amount
        };

        await recordTransactionsRepository.save(recordTransaction);

    }

}