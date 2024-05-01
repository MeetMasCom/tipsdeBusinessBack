import { Connection, Schema } from "mongoose";
import { ReferralsI, UserI, UserOtpI } from "../../interfaces/user.interface";

export const userSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    userName: {
      type: String,
      require: true,
      unique: 1,
    },
    email: {
      type: String,
      require: true,
      unique: 1,
    },
    country: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    dateBirth: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: false,
      default:null
    },
    state: {
      type: Array,
      require: true,
    },
    type: {
      type: Number,
      require: true,
    },
    sponsorCode: {
      type: String,
      require: true,
    },
    sponsor: {
      type: String,
      require: true,
    },
    terms: {
      type: Boolean,
      required: 1,
    },
    firstname: {
      type: String,
      require: false,
    },
    lastname: {
      type: String,
      require: false,
    },
    identification: {
      type: String,
      require: false,
    },
    weight: {
      type: Number,
      require: false,
    },
    height: {
      type: Number,
      require: false,
    },
    eyeColor: {
      type: String,
      require: false,
    },
    currentResidence: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    ethnicity: {
      type: String,
      require: false,
    },
    religion: {
      type: String,
      require: false,
    },
    policy: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    motherLanguague: {
      type: String,
      require: false,
    },
    languages: {
      type: Array<string>,
      require: false,
    },
    foods: {
      type: Array<string>,
      require: false,
    },
    hobbies: {
      type: Array<string>,
      require: false,
    },
    sports: {
      type: Array<string>,
      require: false,
    },
    tasteOfClothes: {
      type: Array<string>,
      require: false,
    },
    online: {
      type: Boolean,
      require: false,
    },
    gender: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    civil_status: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    drink: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    smoke: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    childs: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    studies: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    body: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    zodiac_sign: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    career: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    sport: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    image: {
      type: String,
      require: false,
      default: "",
    },
    verify: {
      type: Boolean,
      require: true,
      default: false,
    },
    dni: {
      type: String,
      require: false,
    },
    journal: {
      type: String,
      require: false,
    },
    time_work: {
      type: String,
      require: false,
    },
    profile: {
      type: Array<string>,
      require: true,
    },
    rsocials: {
      type: Array<string>,
      require: false,
    },
    preferences: {
      type: Schema.Types.ObjectId,
      require: false,
    },
    age: {
      type: Number,
      require: false,
    },
    followers: {
      type: Array<string>,
      require: false,
    },
    following: {
      type: Array<string>,
      require: false,
    },
    agreements: {
      type: Boolean,
      required: false
    }    ,
    socialAgreements: {
      type: Boolean,
      required: false
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const userModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<UserI>("users", userSchema, "users");

export const userOtpSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    userId: {
      type: String,
      require: true,
    },
    otp: {
      type: Number,
      require: true,
      unique: 1,
    },
    used: {
      type: Boolean,
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

export const userOtpModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<UserOtpI>("userOtp", userOtpSchema, "userOtp");

export const postSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    user_id: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    type: {
      type: Number,
      require: true,
    },
    photo: {
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

export const postModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<UserOtpI>("post", postSchema, "post");

export const referralsSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    userId: {
      type: String,
      require: true,
    },
    level: {
      type: Number,
      require: true,
    },
    referralsId: {
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

export const referralsModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<ReferralsI>("referrals", referralsSchema, "referrals");