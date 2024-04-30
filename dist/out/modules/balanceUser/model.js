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
exports.retreatUserModelMongo = exports.retreatUserSchema = exports.rechargeUserModelMongo = exports.rechargeUserSchema = exports.balanceUserModelMongo = exports.balanceUserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.balanceUserSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    userId: {
        type: String,
        require: true,
        unique: 1,
    },
    balance: {
        type: Number,
        require: false,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const balanceUserModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("balanceUser", exports.balanceUserSchema, "balanceUser"); });
exports.balanceUserModelMongo = balanceUserModelMongo;
exports.rechargeUserSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
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
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const rechargeUserModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("rechargeUser", exports.rechargeUserSchema, "rechargeUser"); });
exports.rechargeUserModelMongo = rechargeUserModelMongo;
exports.retreatUserSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
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
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const retreatUserModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("retreatUser", exports.retreatUserSchema, "retreatUser"); });
exports.retreatUserModelMongo = retreatUserModelMongo;
