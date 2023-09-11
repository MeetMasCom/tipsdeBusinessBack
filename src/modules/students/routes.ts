import { Router } from "express";

import {
  createStudentCourseController,
  getStudentByIdCourseController,
  getValidStudentController,
  getCourseByUserController,
  getCourseByStudentController,
  getCourseByCategoriaController
} from "./controler";

const studentRoutes = Router();

studentRoutes.route("/addStudent").post(createStudentCourseController);
studentRoutes
  .route("/getStudentByIdCourse/:id")
  .get(getStudentByIdCourseController);

studentRoutes.route("/getCoursesByCategoria/:idS").get(getCourseByCategoriaController);
studentRoutes.route("/getValidStudent/:id").get(getValidStudentController);
studentRoutes.route("/getCurseByStudent/:id").get(getCourseByUserController);
//studentRoutes.route("/getCurseByStudentM/:id").get(getCourseByStudentController);
export default studentRoutes;
