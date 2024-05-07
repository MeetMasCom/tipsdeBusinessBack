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
exports.deletePostController = exports.getCountPostUserProfileController = exports.updateProfileController = exports.getPostProfileUserController = exports.getPostByTypeController = exports.getPostByIdController = exports.getPostUserandProfileController = exports.getPostByIdUserController = exports.createPostUserController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createPostUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = req.body;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.savePost(newPost),
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
exports.createPostUserController = createPostUserController;
const getPostByIdUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getPostByIdUser(id),
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
exports.getPostByIdUserController = getPostByIdUserController;
const getPostUserandProfileController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getPostUserProfile(id),
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
exports.getPostUserandProfileController = getPostUserandProfileController;
const getPostByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getPostById(id),
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
exports.getPostByIdController = getPostByIdController;
const getPostByTypeController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getPostByType(id),
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
exports.getPostByTypeController = getPostByTypeController;
const getPostProfileUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        const profile = req.query.profile;
        const userService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getPostProfileUserId(id, profile),
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
exports.getPostProfileUserController = getPostProfileUserController;
const updateProfileController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const postService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield postService.updateProfile(id, payload),
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
exports.updateProfileController = updateProfileController;
const getCountPostUserProfileController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const profile = req.query.profile;
        const postService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield postService.getCountPost(id, profile),
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
exports.getCountPostUserProfileController = getCountPostUserProfileController;
const deletePostController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const postService = new service_1.PostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield postService.deletePost(id),
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
exports.deletePostController = deletePostController;
