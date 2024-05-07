import { Connection, Schema } from "mongoose";
import { RecordsTransactionI } from "../../interfaces/recordsTransactions";

export const recordsTransactionsSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    walletId: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    detail: {
      type: String,
      require: true,
    },
    typeTransaction: {
      type: String,
      require: true,
    },
    referValue: {
      type: Number,
      require: false,
    },
    companyValue: {
      type: Number,
      require: false,
    },
    value: {
      type: Number,
      require: false,
    },
    status: {
      type: Boolean,
      require: false,
      default: true
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const recordsTransactionsModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<RecordsTransactionI>("recordsTransactions", recordsTransactionsSchema, "recordsTransactions");
