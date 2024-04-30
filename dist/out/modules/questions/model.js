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
exports.questionModelMongo = exports.questionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.questionSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    subprompts_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const questionModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("question", exports.questionSchema, "question"); });
exports.questionModelMongo = questionModelMongo;
