"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controler_1 = require("./controler");
const studentRoutes = (0, express_1.Router)();
studentRoutes.route("/addStudent").post(controler_1.createStudentCourseController);
studentRoutes
    .route("/getStudentByIdCourse/:id")
    .get(controler_1.getStudentByIdCourseController);
studentRoutes.route("/getCoursesByCategoria/:idS").get(controler_1.getCourseByCategoriaController);
studentRoutes.route("/getValidStudent/:id").get(controler_1.getValidStudentController);
studentRoutes.route("/getCurseByStudent/:id").get(controler_1.getCourseByUserController);
//studentRoutes.route("/getCurseByStudentM/:id").get(getCourseByStudentController);
exports.default = studentRoutes;
