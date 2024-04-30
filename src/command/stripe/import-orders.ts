import moment from 'moment';
import * as cron from 'node-cron';
import { StripeListCheckoutApi } from '../../modules/stripe/api/list-checkout.api';
import { BatchUpdateBalanceStripeService } from '../../modules/stripe/services/batch-update-balance-stripe.service';

cron.schedule('* * * * *', async () => {

    let currentDate = moment().unix();
    let previousDate = moment().subtract('1', 'day').unix();

    let stripe = new StripeListCheckoutApi(process.env.STRIPE_SECRET_KEY || "");
    let result:any = await stripe.execute({ created : { gt: previousDate, lt: currentDate}, limit: 10});    
    let batchUpdateBalanceStripeService = new BatchUpdateBalanceStripeService(result.data);
    await batchUpdateBalanceStripeService.execute();
    console.log("Data has been imported successfully");

});