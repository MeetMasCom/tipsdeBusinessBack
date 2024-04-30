"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moduleRoutes = (0, express_1.Router)();
const controler_1 = require("./controler");
moduleRoutes.post("/createModule", controler_1.createModuleController);
moduleRoutes.get("/getModuleByCourse/:id", controler_1.getModuleByIdCourseController);
moduleRoutes.get("/getModuleById/:id", controler_1.getModuleByIdController);
moduleRoutes.get("/getModuleAndTopic/:id", controler_1.getModulesAnTopicController);
moduleRoutes.post("/createTest", controler_1.createTestController);
moduleRoutes.get("/getTestById/:id", controler_1.getTestByIdController);
moduleRoutes.get("/getTestByIdModule/:id", controler_1.getTestByIdModuleController);
moduleRoutes.post("/createAnswer", controler_1.createAnswerController);
exports.default = moduleRoutes;
