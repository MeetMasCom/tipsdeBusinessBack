"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.referralsModelMongo = exports.referralsSchema = exports.postModelMongo = exports.postSchema = exports.userOtpModelMongo = exports.userOtpSchema = exports.userModelMongo = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
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
        default: null
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
        type: mongoose_1.Schema.Types.ObjectId,
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
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    motherLanguague: {
        type: String,
        require: false,
    },
    languages: {
        type: (Array),
        require: false,
    },
    foods: {
        type: (Array),
        require: false,
    },
    hobbies: {
        type: (Array),
        require: false,
    },
    sports: {
        type: (Array),
        require: false,
    },
    tasteOfClothes: {
        type: (Array),
        require: false,
    },
    online: {
        type: Boolean,
        require: false,
    },
    gender: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    civil_status: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    drink: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    smoke: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    childs: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    studies: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    body: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    zodiac_sign: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    career: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    sport: {
        type: mongoose_1.Schema.Types.ObjectId,
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
        type: (Array),
        require: true,
    },
    rsocials: {
        type: (Array),
        require: false,
    },
    preferences: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: false,
    },
    age: {
        type: Number,
        require: false,
    },
    followers: {
        type: (Array),
        require: false,
    },
    following: {
        type: (Array),
        require: false,
    },
    agreements: {
        type: Boolean,
        required: false
    },
    socialAgreements: {
        type: Boolean,
        required: false
    }
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const userModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("users", exports.userSchema, "users"); });
exports.userModelMongo = userModelMongo;
exports.userOtpSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
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
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const userOtpModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("userOtp", exports.userOtpSchema, "userOtp"); });
exports.userOtpModelMongo = userOtpModelMongo;
exports.postSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const postModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("post", exports.postSchema, "post"); });
exports.postModelMongo = postModelMongo;
exports.referralsSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    userId: {
        type: String,
        require: true,
    },
    level: {
        type: Number,
        require: true,
        unique: 1,
    },
    referralsId: {
        type: String,
        require: true,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const referralsModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("referrals", exports.referralsSchema, "referrals"); });
exports.referralsModelMongo = referralsModelMongo;
