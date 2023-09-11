import { Router } from "express";
import { validate } from "express-validation";
import {createSubscribersController,getByIdCourseSuscriptorsController,getSubscribeStudentController } from "./controler";

const subscribeRoute = Router();

subscribeRoute.get("/subscriberCourse", getByIdCourseSuscriptorsController);
subscribeRoute.post("/subscribeRegister", createSubscribersController);
subscribeRoute.route("/getSubscribeStudent/:id").get(getSubscribeStudentController);

export default subscribeRoute;
