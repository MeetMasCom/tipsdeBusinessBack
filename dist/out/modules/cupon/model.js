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
exports.cuponModelMongo = exports.cuponSchema = void 0;
const mongoose_1 = require("mongoose");
exports.cuponSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: 1
    },
    cantidad: {
        type: Number,
        required: false
    },
    porcentaje: {
        type: Number,
        required: false
    },
    state: {
        type: Number,
        require: true,
        default: 0
    },
    codigo: {
        type: Number,
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const cuponModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("cupon", exports.cuponSchema, "cupon"); });
exports.cuponModelMongo = cuponModelMongo;
