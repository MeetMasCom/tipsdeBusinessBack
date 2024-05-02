"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tipsRoutes = (0, express_1.Router)();
var multer_1 = __importDefault(require("../../libs/multer"));
var controler_1 = require("./controler");
//topicRoutes.post("/createTopic",createTopicController);
tipsRoutes.get("/getTipsByIdUser/:id", controler_1.getTipsByIdUserController);
tipsRoutes.get("/getTipsById/:id", controler_1.getTipsByIdController);
tipsRoutes.get("/getAllTips", controler_1.getAllTipsController);
tipsRoutes.post('/createTips', controler_1.createTipsController);
tipsRoutes.route('/updateTips/:id')
    .post(multer_1.default.single('video'), controler_1.updateTipsController);
exports.default = tipsRoutes;
