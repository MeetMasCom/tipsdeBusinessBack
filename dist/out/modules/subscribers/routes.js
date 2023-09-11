"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var subscribeRoute = (0, express_1.Router)();
subscribeRoute.get("/subscriberCourse", controler_1.getByIdCourseSuscriptorsController);
subscribeRoute.post("/subscribeRegister", controler_1.createSubscribersController);
subscribeRoute.route("/getSubscribeStudent/:id").get(controler_1.getSubscribeStudentController);
exports.default = subscribeRoute;
