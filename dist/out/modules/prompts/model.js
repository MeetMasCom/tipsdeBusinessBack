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
exports.promptsUserModelMongo = exports.promptsUserSchema = exports.promptsPriceModelMongo = exports.promptsPriceSchema = exports.promptsModelMongo = exports.promptsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.promptsSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    userCourse: {
        type: (Array),
        required: true,
    },
    state: {
        type: Number,
        require: true,
        default: 0
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const promptsModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("prompts", exports.promptsSchema, "prompts"); });
exports.promptsModelMongo = promptsModelMongo;
exports.promptsPriceSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true
    },
    price: {
        type: Number,
        required: true,
    },
    state: {
        type: Number,
        require: true,
        default: 0
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const promptsPriceModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("promptsPrice", exports.promptsPriceSchema, "promptsPrice"); });
exports.promptsPriceModelMongo = promptsPriceModelMongo;
exports.promptsUserSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true
    },
    packageId: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    price: {
        type: Number,
        required: true,
    },
    state: {
        type: Number,
        require: true,
        default: 0
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const promptsUserModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("promptsUser", exports.promptsUserSchema, "promptsUser"); });
exports.promptsUserModelMongo = promptsUserModelMongo;
