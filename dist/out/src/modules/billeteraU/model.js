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
exports.billeteraUModelMongo = exports.billeteraUSchema = void 0;
const mongoose_1 = require("mongoose");
exports.billeteraUSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        require: true,
    },
    detalle: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    },
    dir: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: false,
    },
    alias: {
        type: String,
        required: true,
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const billeteraUModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("billeteraU", exports.billeteraUSchema, "billeteraU"); });
exports.billeteraUModelMongo = billeteraUModelMongo;
