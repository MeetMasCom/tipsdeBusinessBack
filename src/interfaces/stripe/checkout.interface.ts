export interface StripeCheckoutI {

    line_items: StripeCheckoutItemI[];
    mode: string;
    success_url: string;
    cancel_url: string;

}

export interface StripeCheckoutItemI {

    price_data: StripeCheckoutPriceI;
    quantity: number;
 
 }

export interface StripeCheckoutPriceI {

   currency: string;
   product_data: StripeCheckoutProductI;
   unit_amount: number;

}

export interface StripeCheckoutProductI {

    name: string;

}