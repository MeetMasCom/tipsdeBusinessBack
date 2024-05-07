"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controler_1 = require("./controler");
const feedbackRoutes = (0, express_1.Router)();
feedbackRoutes.route("/createFeedBack").post(controler_1.createFeedBackController);
feedbackRoutes.route("/getFeedBack").get(controler_1.getFeedbackController);
exports.default = feedbackRoutes;
