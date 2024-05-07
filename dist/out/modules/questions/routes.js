"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var questionRoutes = (0, express_1.Router)();
var controler_1 = require("./controler");
//topicRoutes.post("/createTopic",createTopicController);
questionRoutes.get("/getQuestionById/:id", controler_1.getQuestionByIdController);
questionRoutes.get("/getQuestionByIdSubPrompts/:id", controler_1.getQuestionByIdSubPromptsController);
questionRoutes.route('/addQuestion')
    .post(controler_1.createQuestionController);
exports.default = questionRoutes;
