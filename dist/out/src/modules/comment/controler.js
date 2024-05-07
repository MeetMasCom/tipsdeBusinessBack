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
exports.getByIdFadCommentController = exports.createCommentController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
var mongoose = require('mongoose');
const createCommentController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        console.log(payload);
        const commentService = new service_1.CommentService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield commentService.save(payload),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.createCommentController = createCommentController;
const getByIdFadCommentController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var id = new mongoose.Types.ObjectId(req.query.fad);
        const commentService = new service_1.CommentService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield commentService.getByIdFad(id),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.getByIdFadCommentController = getByIdFadCommentController;
