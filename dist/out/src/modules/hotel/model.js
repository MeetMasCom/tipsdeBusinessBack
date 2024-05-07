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
exports.policiesModelMongo = exports.policiesSchema = exports.hotelModelMongo = exports.hotelSchema = void 0;
const mongoose_1 = require("mongoose");
exports.hotelSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: 1
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: 1,
    },
    phone: {
        type: String,
        require: true
    },
    detail: {
        type: String,
    },
    comment: {
        type: String,
    },
    ruc: {
        type: String,
        required: true
    },
    web: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: 1,
    },
    city: {
        type: String,
        required: 1,
    },
    stars: {
        type: Number,
        required: 1,
    },
    manager: {
        type: String,
        required: 1,
    },
    state: {
        type: Number,
        default: 0
    },
    services: {
        type: (Array),
    },
    policies: {
        type: (Array),
    },
    doc: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const hotelModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("hotel", exports.hotelSchema, "hotel"); });
exports.hotelModelMongo = hotelModelMongo;
exports.policiesSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true
    },
    hotel_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: 1
    },
    policies: {
        type: (Array),
        required: 1
    },
    comment: {
        type: String,
    },
    state: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const policiesModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("policies", exports.policiesSchema, "policies"); });
exports.policiesModelMongo = policiesModelMongo;
