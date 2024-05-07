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
exports.countLikePost = exports.deleteLikePost = exports.getLikePostandUserController = exports.createLikePostController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createLikePostController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const likeService = new service_1.LikePostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.save(payload),
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
exports.createLikePostController = createLikePostController;
const getLikePostandUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const idP = req.params.idP;
        const likeService = new service_1.LikePostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.likePostUser(id, idP),
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
exports.getLikePostandUserController = getLikePostandUserController;
const deleteLikePost = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idP = req.params.id;
        const idUL = req.body.idUL;
        console.log("id publicacion", idP);
        console.log("id user like", idUL);
        const likeService = new service_1.LikePostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.deleteLikePost(idP, idUL),
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
exports.deleteLikePost = deleteLikePost;
const countLikePost = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const likeService = new service_1.LikePostService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.countLikePost(id),
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
exports.countLikePost = countLikePost;
