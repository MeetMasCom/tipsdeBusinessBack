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
exports.getByIdTipReferencesController = exports.createReferenceTipsController = exports.getByIdCourseReferencesController = exports.getMyReferencesController = exports.getAllReferencesController = exports.createReferenceController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
var mongoose = require('mongoose');
const createReferenceController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        console.log(payload);
        const commentService = new service_1.Referenceservice();
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
exports.createReferenceController = createReferenceController;
const getAllReferencesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var id = new mongoose.Types.ObjectId(req.query.id);
        const commentService = new service_1.Referenceservice();
        return (0, responseHelper_1.serviceResponse)({
            data: yield commentService.getAllReferences(),
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
exports.getAllReferencesController = getAllReferencesController;
const getMyReferencesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var id = new mongoose.Types.ObjectId(req.query.id);
        const commentService = new service_1.Referenceservice();
        return (0, responseHelper_1.serviceResponse)({
            data: yield commentService.getMyReferences(id),
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
exports.getMyReferencesController = getMyReferencesController;
const getByIdCourseReferencesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var id = new mongoose.Types.ObjectId(req.query.id);
        const commentService = new service_1.Referenceservice();
        return (0, responseHelper_1.serviceResponse)({
            data: yield commentService.getByIdCourse(id),
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
exports.getByIdCourseReferencesController = getByIdCourseReferencesController;
const createReferenceTipsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        console.log(payload);
        const commentService = new service_1.Referenceservice();
        return (0, responseHelper_1.serviceResponse)({
            data: yield commentService.saveReferencesTips(payload),
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
exports.createReferenceTipsController = createReferenceTipsController;
const getByIdTipReferencesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var id = new mongoose.Types.ObjectId(req.query.id);
        const commentService = new service_1.Referenceservice();
        return (0, responseHelper_1.serviceResponse)({
            data: yield commentService.getByIdTips(id),
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
exports.getByIdTipReferencesController = getByIdTipReferencesController;
