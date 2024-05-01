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
exports.courseUserModelMongo = exports.courseUserSchema = exports.courseModelMongo = exports.courseSchema = void 0;
const mongoose_1 = require("mongoose");
exports.courseSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    userCourse: {
        type: (Array),
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    categoria: {
        type: Number,
        required: true,
    },
    type: {
        type: Number,
        default: 1,
    },
    link: {
        type: String,
    },
    fecha: {
        type: Date,
    },
    state: {
        type: Number,
        default: 1,
    }
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const courseModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("course", exports.courseSchema, "course"); });
exports.courseModelMongo = courseModelMongo;
exports.courseUserSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    userId: {
        type: String,
        require: true,
    },
    courseId: {
        type: String,
        require: true,
    },
    state: {
        type: Boolean,
        require: true,
        default: true,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const courseUserModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () {
    return cnxMongo.model("courseUser", exports.courseUserSchema, "courseUser");
});
exports.courseUserModelMongo = courseUserModelMongo;
