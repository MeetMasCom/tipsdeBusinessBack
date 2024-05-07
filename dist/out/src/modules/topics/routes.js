"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const topicRoutes = (0, express_1.Router)();
const controler_1 = require("./controler");
//topicRoutes.post("/createTopic",createTopicController);
topicRoutes.get("/getTopicByIdModule/:id", controler_1.getTopicByIdModuleController);
topicRoutes.get("/getTopicById/:id", controler_1.getTopicByIdController);
topicRoutes.post('/createTopic', controler_1.createTopicController);
topicRoutes.route("/updateTopic/:id").post(controler_1.updateTopicController);
exports.default = topicRoutes;
