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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.referralsModelMongo = exports.referralsSchema = exports.postModelMongo = exports.postSchema = exports.userOtpModelMongo = exports.userOtpSchema = exports.userModelMongo = exports.userSchema = void 0;
var mongoose_1 = require("mongoose");
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
    typeUser: {
        type: Number,
        require: true,
        default: 0,
    },
    teacher: {
        type: Number,
        require: true,
        default: 0,
    },
    colaborador: {
        type: Number,
        require: true,
        default: 0,
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
    city: {
        type: String,
        require: false,
    },
    profile: {
        type: (Array),
        require: false,
    },
    rsociales: {
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
    },
    cupo: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
var userModelMongo = function (cnxMongo) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, cnxMongo.model("users", exports.userSchema, "users")];
}); }); };
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
var userOtpModelMongo = function (cnxMongo) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, cnxMongo.model("userOtp", exports.userOtpSchema, "userOtp")];
}); }); };
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
var postModelMongo = function (cnxMongo) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, cnxMongo.model("post", exports.postSchema, "post")];
}); }); };
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
var referralsModelMongo = function (cnxMongo) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, cnxMongo.model("referrals", exports.referralsSchema, "referrals")];
}); }); };
exports.referralsModelMongo = referralsModelMongo;
