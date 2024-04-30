
import Stripe from 'stripe';

export class StripeApiService {


    execute = () => {

        let stripeInstance = new Stripe('sk_test_51KBTCkA53AudquRteyArGM1so9PUss3EITS2qDIOyzPHYCX9A0iknVbqv1282MI8XNL7LAXVSfoo3pwFasCsOgkb00vuV1No8h');
        
        return stripeInstance.checkout.sessions.create({
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'Test-shirt',
                  },
                  unit_amount: 100,
                },
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: 'http://localhost:4200/success',
            cancel_url: 'http://localhost:4200/cancel',
          });

    }
    
    
}
