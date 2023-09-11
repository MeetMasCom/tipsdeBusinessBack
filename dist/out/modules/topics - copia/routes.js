"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var topicRoutes = (0, express_1.Router)();
var multer_1 = __importDefault(require("../../libs/multer"));
var controler_1 = require("./controler");
//topicRoutes.post("/createTopic",createTopicController);
topicRoutes.get("/getTopicByIdModule/:id", controler_1.getTopicByIdModuleController);
topicRoutes.get("/getTopicById/:id", controler_1.getTopicByIdController);
topicRoutes.route('/createTopic')
    .post(multer_1.default.single('video'), controler_1.createTopicController);
exports.default = topicRoutes;
