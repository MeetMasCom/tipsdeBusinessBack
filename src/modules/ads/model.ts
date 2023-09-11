import { Connection, Schema } from "mongoose";
import { AdsI, VisitAdsI } from "../../interfaces/ads.interface";

export const adsSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    stop: {
      type: Boolean,
      require: true,
      default: false
    },
    userId: {
      type: String,
      require: true,
    },
    type: {
      type: Number,
      require: true,
    },
    age: {
      type: Array<string>,
      require: true,
    },
    carrer: {
      type: Array<string>,
      require: true,
    },
    country: {
      type: Array<string>,
      require: true,
    },
    title: {
      type: String,
      require: false,
    },
    description: {
      type: String,
      require: false,
    },
    link: {
      type: String,
      require: false,
    },
    file: {
      type: String,
      require: true,
    },
    language: {
      type: Array<string>,
      require: true,
    },
    hobbies: {
      type: Array<string>,
      required: true,
    },
    gender: {
      type: Array<string>,
      require: true,
    },
    religion: {
      type: Array<string>,
      require: true,
    },
    journal: {
      type: Array<string>,
      require: true,
    },
    dependency: {
      type: Array<string>,
      require: true,
    },
    state: {
      type: Number,
      required: true,
      default: 1
    },
    package: {
      type: String,
      require: true,
    },
    comentary: {
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

export const adsModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<AdsI>("ads", adsSchema, "ads");




export const visitAdsSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    userId: {
      type: String,
      require: true,
    },
    adsId: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const visitAdsModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<VisitAdsI>("visitAds", visitAdsSchema, "visitAds");

