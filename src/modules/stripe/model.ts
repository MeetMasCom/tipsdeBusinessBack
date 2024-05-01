import { Connection, Schema } from "mongoose";

export const colaboradorSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      payment_intent:{
        type: String,
        required: true
      },
      userId: {
        type: String,
        require: true,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );

  export const stripeTransactionsModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("stripeTransactions", colaboradorSchema, "stripeTransactions");