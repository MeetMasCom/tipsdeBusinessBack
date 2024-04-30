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
exports.tipsModelMongo = exports.tipsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.tipsSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    user_id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    video: {
        type: String,
    },
    userCourse: {
        type: (Array),
        required: true,
    },
    imagen: {
        type: String,
    },
    state: {
        type: Number,
        default: 1,
    },
    dateView: {
        type: Date,
        required: false,
    }
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const tipsModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("tips", exports.tipsSchema, "tips"); });
exports.tipsModelMongo = tipsModelMongo;
