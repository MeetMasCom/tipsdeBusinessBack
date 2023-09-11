import { Connection, Schema } from "mongoose";
import { BalanceCompanyI } from "../../interfaces/balanceCompany";

export const balanceCompanySchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    balance: {
      type: Number,
      require: false,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const balanceCompanyModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<BalanceCompanyI>("balanceCompany", balanceCompanySchema, "balanceCompany");
