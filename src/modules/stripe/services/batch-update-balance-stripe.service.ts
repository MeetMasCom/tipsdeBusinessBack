import { RechargeBalanceStripeService } from "./recharge-balance-stripe.service";


export class BatchUpdateBalanceStripeService {

    constructor(private importedData: any[]) {        
    } 


    async execute() {

        let rechargeBalanceService = new RechargeBalanceStripeService();

        for( let element of this.importedData)            
            await rechargeBalanceService.execute(
                element.amount_total,
                element.metadata.user_id,
                element.payment_intent
            )   


    }

}