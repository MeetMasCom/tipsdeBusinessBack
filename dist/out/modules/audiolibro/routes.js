"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var audiolibroRoutes = (0, express_1.Router)();
var multer_1 = __importDefault(require("../../libs/multer"));
var controler_1 = require("./controler");
//topicRoutes.post("/createTopic",createTopicController);
audiolibroRoutes.get("/getAudioLibroByIdUser/:id", controler_1.getAudioLibroByIdUserController);
audiolibroRoutes.get("/getAudioLibroById/:id", controler_1.getAudioLibroByIdController);
audiolibroRoutes.get("/getAllAudioLibro", controler_1.getAllAudioLibroController);
audiolibroRoutes.post('/createAudioLibro', controler_1.createAudioLibroController);
audiolibroRoutes.route('/updateAudioLibro/:id')
    .post(multer_1.default.single('video'), controler_1.updateAudioLibroController);
exports.default = audiolibroRoutes;
