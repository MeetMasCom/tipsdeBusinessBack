import Stripe from "stripe";
import { format } from "../../../helpers/stripe/formatPriceHelper";
import { UserRepository } from "../../user/repository";
import { StripeCreateCheckoutApi } from "../api/create-checkout.api";

export class CreateCheckoutStripeService {

    private userRepository:UserRepository

    constructor(private stripeCheckoutApi: StripeCreateCheckoutApi) {
        this.userRepository = new UserRepository();
    }
    
    async execute(
        price: string,
        userName: string,
        paymentMode: Stripe.Checkout.SessionCreateParams.Mode = 'payment'
    ) {
        
        let formattedPrice = format(price); 
        let user:any = await this.userRepository.getByEmailOrUserName("", userName);

        let params = {
            line_items: [
                {
                    price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Recharge',
                    },
                    unit_amount: formattedPrice,
                    },
                    quantity: 1,
                },
            ],
            mode: paymentMode,
            metadata: {
                user_id: user._id.toHexString()
            },
            success_url: process.env.STRIPE_SUCCESSFUL_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        }

        return await this.stripeCheckoutApi.execute(params);

    }

}