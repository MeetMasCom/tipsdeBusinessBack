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
exports.addFollowingsController = exports.addFollowersController = exports.getProfileByIdController = exports.addSocialNController = exports.addProfileController = exports.getAllProfileController = exports.getUserProfileIdController = exports.createProfileController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createProfileController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const profileService = new service_1.ProfileService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield profileService.saveProfile(payload),
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
exports.createProfileController = createProfileController;
const getUserProfileIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body.profile;
        const profileService = new service_1.ProfileService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield profileService.getProfileId(id, payload),
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
exports.getUserProfileIdController = getUserProfileIdController;
const getAllProfileController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profileService = new service_1.ProfileService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield profileService.getAllProfile(),
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
exports.getAllProfileController = getAllProfileController;
const addProfileController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const postService = new service_1.ProfileService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield postService.addProfile(id, payload),
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
exports.addProfileController = addProfileController;
const addSocialNController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const postService = new service_1.ProfileService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield postService.addSocialN(id, payload),
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
exports.addSocialNController = addSocialNController;
const getProfileByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const profileService = new service_1.ProfileService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield profileService.getProfileById(id),
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
exports.getProfileByIdController = getProfileByIdController;
const addFollowersController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const postService = new service_1.ProfileService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield postService.addFollowers(id, payload),
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
exports.addFollowersController = addFollowersController;
const addFollowingsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const postService = new service_1.ProfileService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield postService.addFollowings(id, payload),
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
exports.addFollowingsController = addFollowingsController;
