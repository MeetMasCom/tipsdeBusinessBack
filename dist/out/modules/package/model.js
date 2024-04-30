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
exports.packageModelMongo = exports.packageSchema = void 0;
const mongoose_1 = require("mongoose");
exports.packageSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        required: 1
    },
    description: {
        type: String,
        required: true
    },
    visit: {
        type: Number,
        required: true
    },
    state: {
        type: Number,
        require: true,
        default: 0
    },
    valor: {
        type: String,
        require: true,
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const packageModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("package", exports.packageSchema, "package"); });
exports.packageModelMongo = packageModelMongo;
