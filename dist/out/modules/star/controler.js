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
exports.UpdateStar = exports.getByIdStarController = exports.getStarUserFadId = exports.getAllByIdFadStartController = exports.getByIdUserStartController = exports.createStartController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
var mongoose = require('mongoose');
const createStartController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newStart = {
            user_id: req.body.user_id,
            fad_id: req.body.fad_id,
            qualification: req.body.qualification
        };
        const startService = new service_1.StarService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield startService.save(newStart),
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
exports.createStartController = createStartController;
//estrellas por usuario
const getByIdUserStartController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const starService = new service_1.StarService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield starService.getByIdUser(id),
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
exports.getByIdUserStartController = getByIdUserStartController;
//todas las estrellas por publicacion
const getAllByIdFadStartController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const startService = new service_1.StarService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield startService.getByIdAll(id),
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
exports.getAllByIdFadStartController = getAllByIdFadStartController;
//estrellas por usuario y publicacion
const getStarUserFadId = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var user = new mongoose.Types.ObjectId(req.query.user);
        var fad = new mongoose.Types.ObjectId(req.query.fad);
        const startService = new service_1.StarService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield startService.getStarUserFadId(user, fad),
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
exports.getStarUserFadId = getStarUserFadId;
const getByIdStarController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const starService = new service_1.StarService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield starService.getById(id),
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
exports.getByIdStarController = getByIdStarController;
const UpdateStar = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        console.log("id", id);
        console.log("nueva estrella", payload);
        const starService = new service_1.StarService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield starService.update(id, payload),
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
exports.UpdateStar = UpdateStar;
