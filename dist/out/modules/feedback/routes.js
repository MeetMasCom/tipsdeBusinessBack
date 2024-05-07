"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var feedbackRoutes = (0, express_1.Router)();
feedbackRoutes.route("/createFeedBack").post(controler_1.createFeedBackController);
feedbackRoutes.route("/getFeedBack").get(controler_1.getFeedbackController);
exports.default = feedbackRoutes;
