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
exports.answerModelMongo = exports.answerSchema = exports.testModelMongo = exports.testSchema = exports.moduleModelMongo = exports.moduleSchema = void 0;
const mongoose_1 = require("mongoose");
exports.moduleSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    course_id: {
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
    dateView: {
        type: Date,
    },
    test: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const moduleModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("module", exports.moduleSchema, "module"); });
exports.moduleModelMongo = moduleModelMongo;
exports.testSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    module_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    test: {
        type: (Array),
        required: true,
    }
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const testModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("test", exports.testSchema, "test"); });
exports.testModelMongo = testModelMongo;
exports.answerSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, require: true },
    test_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    testanswer: {
        type: (Array),
        require: true,
    }
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
const answerModelMongo = (cnxMongo) => __awaiter(void 0, void 0, void 0, function* () { return cnxMongo.model("answer", exports.answerSchema, "answer"); });
exports.answerModelMongo = answerModelMongo;
