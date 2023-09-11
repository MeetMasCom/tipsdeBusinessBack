import { Router } from "express";

const courseRoutes = Router();

import upload from "../../libs/multer";
import {
  createCourseController,
  getCourseByIdUserController,
  getCourseByIdController,
  getAllCoursesController,
  getAllInLiveController,
  getCourseByCategoriaController,
  getCourseByUserController,
  getCourseByUserStudent,
  getTopCoursesController,
  buyCourseUserController,
  verifyCourseUserController,
  updateStateController
} from "./controler";
import { get } from "http";

courseRoutes.post("/createCourse", createCourseController);
courseRoutes.get("/getCourseByIdUser/:id", getCourseByIdUserController);
courseRoutes.get("/getCourseById/:id", getCourseByIdController);
courseRoutes.get("/getAllCourses", getAllCoursesController);
courseRoutes.get("/getAllInLive", getAllInLiveController);
courseRoutes.get("/getCourseByCategoria", getCourseByCategoriaController);
courseRoutes.get("/getCourseByUser", getCourseByUserController);
courseRoutes.get("/getCourseByUserStudent", getCourseByUserStudent);
courseRoutes.get("/getTopCourses", getTopCoursesController);
courseRoutes.post("/buyCourse",buyCourseUserController);
courseRoutes.route("/updateState/:id").post(updateStateController);
courseRoutes.get("/verifyCourseUser/:id", verifyCourseUserController);

export default courseRoutes;
