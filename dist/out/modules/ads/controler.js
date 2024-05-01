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
exports.visitAdsController = exports.getAdsForUserController = exports.toogleAdsByIdController = exports.updateAdsByIdController = exports.deleteAdsController = exports.updateStateAdsController = exports.getAdsController = exports.getAllsAdsController = exports.createAdsController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createAdsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const userService = new service_1.AdsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.create(payload),
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
exports.createAdsController = createAdsController;
//AdsI no validados
const getAllsAdsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adsService = new service_1.AdsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adsService.getAll(),
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
exports.getAllsAdsController = getAllsAdsController;
const getAdsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const adsService = new service_1.AdsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adsService.getById(id),
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
exports.getAdsController = getAdsController;
const updateStateAdsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const adsService = new service_1.AdsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adsService.updateStateAds(id, payload),
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
exports.updateStateAdsController = updateStateAdsController;
const deleteAdsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const adsService = new service_1.AdsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adsService.deleteById(id),
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
exports.deleteAdsController = deleteAdsController;
const updateAdsByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const adsService = new service_1.AdsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adsService.updateAdsById(id, payload),
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
exports.updateAdsByIdController = updateAdsByIdController;
const toogleAdsByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const adsService = new service_1.AdsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adsService.onOffAdsById(id, payload),
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
exports.toogleAdsByIdController = toogleAdsByIdController;
const getAdsForUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const adsService = new service_1.AdsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adsService.getAdsForUser(id),
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
exports.getAdsForUserController = getAdsForUserController;
const visitAdsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const adsService = new service_1.AdsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield adsService.visitAds(data),
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
exports.visitAdsController = visitAdsController;
