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
exports.visitAdsModelMongo = exports.visitAdsSchema = exports.adsModelMongo = exports.adsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.adsSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    stop: {
        type: Boolean,
        require: true,
        default: false
    },
    userId: {
        type: String,
        require: true,
    },
    type: {
        type: Number,
        require: true,
    },
    age: {
        type: (Array),
        require: true,
    },
    carrer: {
        type: (Array),
        require: true,
    },
    country: {
        type: (Array),
        require: true,
    },
    title: {
        type: String,
        require: false,
    },
    description: {
        type: String,
        require: false,
    },
    link: {
        type: String,
        require: false,
    },
    file: {
        type: String,
        require: true,
    },
    language: {
        type: (Array),
        require: true,
    },
    hobbies: {
        type: (Array),
        required: true,
    },
    gender: {
        type: (Array),
        require: true,
    },
    religion: {
        type: (Array),
        require: true,
    },
    journal: {
        type: (Array),
        require: true,
    },
    dependency: {
        type: (Array),
        require: true,
    },
    state: {
        type: Number,
        required: true,
        default: 1
    },
    package: {
        type: String,
        require: true,
    },
    comentary: {
        type: String,
        require: false,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const adsModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("ads", exports.adsSchema, "ads"); });
exports.adsModelMongo = adsModelMongo;
exports.visitAdsSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    userId: {
        type: String,
        require: true,
    },
    adsId: {
        type: String,
        require: true,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const visitAdsModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("visitAds", exports.visitAdsSchema, "visitAds"); });
exports.visitAdsModelMongo = visitAdsModelMongo;
