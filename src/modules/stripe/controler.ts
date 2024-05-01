import { serviceResponse } from "../../helpers/responseHelper";
import { StripeCreateCheckoutApi } from "./api/create-checkout.api";
import { CreateCheckoutStripeService } from "./services/create-checkout-stripe.service";


export const createStripeSessionController = async (req: Request, resp: Response) => {
    try {

      const payload:any = req.body;
      let stripe = new StripeCreateCheckoutApi(process.env.STRIPE_SECRET_KEY || "");    
      let rechargeStripeService = new CreateCheckoutStripeService(stripe);
      let result = await rechargeStripeService.execute(
        payload.amount,
        payload.username
      );

      return serviceResponse({
        data: result,
        res: resp,
        req: req,
      });

    } catch (error) {

      return serviceResponse({
        message: (error as any).message,
        res: resp,
        statusCode: 400,
        req: req,
      });
      
    }


}