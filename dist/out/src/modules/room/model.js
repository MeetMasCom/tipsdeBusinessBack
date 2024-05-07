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
exports.roomModelMongo = exports.roomSchema = void 0;
const mongoose_1 = require("mongoose");
exports.roomSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true
    },
    hotel_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: 1
    },
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
    },
    dimension: {
        type: String,
    },
    type: {
        type: String,
        required: 1,
    },
    price: {
        type: (Array),
    },
    description: {
        type: String,
        required: 1,
    },
    photo: {
        type: (Array),
    },
    actualPrice: {
        type: String,
    },
    service: {
        type: (Array),
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const roomModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("room", exports.roomSchema, "room"); });
exports.roomModelMongo = roomModelMongo;
