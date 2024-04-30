import { Types } from "mongoose";
import { connectionMongo } from "../../database/conection";
import { StripeTransactionsI } from "../../interfaces/stripe/transactions.interface";
import { stripeTransactionsModelMongo } from "./model";



export class StripeRepository {

    async save(data: StripeTransactionsI) {
        try {
    
          const cnxMongo = await connectionMongo();
          const model = await stripeTransactionsModelMongo(cnxMongo);
          const response = await model.create({
            _id: new Types.ObjectId(),
            ...data
          });
          await cnxMongo.close();
          return response as StripeTransactionsI;
        } catch (error) {
          throw new Error(error as string);
        }
      }

      async getByUserId(userId: string) {
        try {
          const cnxMongo = await connectionMongo();
          const model = await stripeTransactionsModelMongo(cnxMongo);
          const response = await model.find({ userId }).exec();
          await cnxMongo.close();
          return response as StripeTransactionsI[];
        } catch (error) {
          throw new Error(error as string);
        }
      }

      async getByPaymentIntent(paymentIntent: string) {
        try {
          const cnxMongo = await connectionMongo();
          const model = await stripeTransactionsModelMongo(cnxMongo);
          const response = await model.findOne({ payment_intent: paymentIntent }).exec();
          await cnxMongo.close();
          return response as StripeTransactionsI;
        } catch (error) {
          throw new Error(error as string);
        }
      }

}