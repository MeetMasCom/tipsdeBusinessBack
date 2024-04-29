"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var audiolibroRoutes = (0, express_1.Router)();
var controler_1 = require("./controler");
//topicRoutes.post("/createTopic",createTopicController);
audiolibroRoutes.get("/getAudioLibroByIdUser/:id", controler_1.getAudioLibroByIdUserController);
audiolibroRoutes.get("/getAudioLibroById/:id", controler_1.getAudioLibroByIdController);
audiolibroRoutes.get("/getAllAudioLibro", controler_1.getAllAudioLibroController);
audiolibroRoutes.post('/createAudioLibro', controler_1.createAudioLibroController);
audiolibroRoutes.route("/updateAudioLibro/:id").post(controler_1.updateAudioLibroController);
exports.default = audiolibroRoutes;
