import { Router } from "express";

const moduleRoutes = Router();

import upload from "../../libs/multer";
import {
  createModuleController,
  getModuleByIdCourseController,
  getModuleByIdController,
  getModulesAnTopicController,
  createTestController,
  getTestByIdController,
  createAnswerController,
  getTestByIdModuleController,
  updateModuleController
} from "./controler";

moduleRoutes.post("/createModule", createModuleController);
moduleRoutes.get("/getModuleByCourse/:id", getModuleByIdCourseController);
moduleRoutes.get("/getModuleById/:id", getModuleByIdController);
moduleRoutes.get("/getModuleAndTopic/:id", getModulesAnTopicController);

moduleRoutes.post("/createTest", createTestController);
moduleRoutes.get("/getTestById/:id", getTestByIdController);
moduleRoutes.get("/getTestByIdModule/:id", getTestByIdModuleController);
moduleRoutes.post("/createAnswer", createAnswerController);

moduleRoutes.route("/updateModule/:id").post(updateModuleController);

export default moduleRoutes;
