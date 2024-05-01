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
exports.billeteraModelMongo = exports.billeteraSchema = void 0;
const mongoose_1 = require("mongoose");
exports.billeteraSchema = new mongoose_1.Schema({
    detalle: {
        type: String,
        required: true
    },
    tipo: {
        type: Number,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    sigla: {
        type: String,
    },
    dir: {
        type: String,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    },
    minimo: {
        type: Number,
        required: true
    },
    tag: {
        type: String,
        required: false
    },
    maxRetiroB: {
        type: Number,
        required: true
    },
    maxRetiroP: {
        type: Number,
        required: true
    },
    maxRetiroO: {
        type: Number,
        required: true
    },
    maxRetiroD: {
        type: Number,
        required: true
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const billeteraModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("billetera", exports.billeteraSchema, "billetera"); });
exports.billeteraModelMongo = billeteraModelMongo;
