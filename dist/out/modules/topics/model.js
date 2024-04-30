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
exports.topicModelMongo = exports.topicSchema = void 0;
const mongoose_1 = require("mongoose");
exports.topicSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    module_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const topicModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("topic", exports.topicSchema, "topic"); });
exports.topicModelMongo = topicModelMongo;
