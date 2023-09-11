"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var courseRoutes = (0, express_1.Router)();
var controler_1 = require("./controler");
courseRoutes.post("/createCourse", controler_1.createCourseController);
courseRoutes.get("/getCourseByIdUser/:id", controler_1.getCourseByIdUserController);
courseRoutes.get("/getCourseById/:id", controler_1.getCourseByIdController);
exports.default = courseRoutes;
