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
exports.membershipUserModelMongo = exports.membershipUserSchema = exports.membershipModelMongo = exports.membershipSchema = void 0;
const mongoose_1 = require("mongoose");
exports.membershipSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
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
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const membershipModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("memberships", exports.membershipSchema, "memberships"); });
exports.membershipModelMongo = membershipModelMongo;
exports.membershipUserSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
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
    descuento: {
        type: Number
    },
    tiempo: {
        type: Number,
    }
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const membershipUserModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () {
    return cnxMongo.model("membershipUser", exports.membershipUserSchema, "membershipUser");
});
exports.membershipUserModelMongo = membershipUserModelMongo;
