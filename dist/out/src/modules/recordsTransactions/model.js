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
exports.recordsTransactionsModelMongo = exports.recordsTransactionsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.recordsTransactionsSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
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
    stripePaymentIntent: {
        type: String,
        require: false,
    },
    status: {
        type: Boolean,
        require: false,
        default: true
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const recordsTransactionsModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("recordsTransactions", exports.recordsTransactionsSchema, "recordsTransactions"); });
exports.recordsTransactionsModelMongo = recordsTransactionsModelMongo;
