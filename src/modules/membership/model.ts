import { Connection, Schema } from "mongoose";
import { MembershipI, MembershipUserI } from "../../interfaces/membership";

export const membershipSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    code: {
      type: String,
      require: true,
      unique: 1,
    },
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    state: {
      type: Boolean,
      require: true,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const membershipModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<MembershipI>("memberships", membershipSchema, "memberships");

export const membershipUserSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    userId: {
      type: String,
      require: true,
    },
    membershipId: {
      type: String,
      require: true,
    },
    state: {
      type: Boolean,
      require: true,
      default: true,
    },
    descuento:{
      type:Number
    },    
      tiempo:{
        type:Number,
      }
    
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const membershipUserModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<MembershipUserI>(
    "membershipUser",
    membershipUserSchema,
    "membershipUser"
  );
