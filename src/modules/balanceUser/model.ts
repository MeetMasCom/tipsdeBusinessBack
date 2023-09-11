import { Connection, Schema } from "mongoose";
import { BalanceUserI, RechargeI, RetreatI } from "../../interfaces/balanceUser";

export const balanceUserSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    userId: {
      type: String,
      require: true,
      unique: 1,
    },
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

export const balanceUserModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<BalanceUserI>("balanceUser", balanceUserSchema, "balanceUser");


export const rechargeUserSchema = new Schema<any>(
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
    dir: {
      type: String,
      require: true,
    },
    hash: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    detail: {
      type: String,
      require: true,
    },
    status: {
      type: Number,
      require: false,
      default: 0
    },
    remark: {
      type: String,
      require: false,
    },
    file: {
      type: String,
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

export const rechargeUserModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<RechargeI>("rechargeUser", rechargeUserSchema, "rechargeUser");


export const retreatUserSchema = new Schema<any>(
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
    amount: {
      type: Number,
      require: true,
    },
    status: {
      type: Number,
      require: false,
      default: 0
    },
    remark: {
      type: String,
      require: false,
    },
    file: {
      type: String,
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

export const retreatUserModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<RetreatI>("retreatUser", retreatUserSchema, "retreatUser");

