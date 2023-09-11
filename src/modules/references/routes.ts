import { Router } from "express";
import { validate } from "express-validation";
import {
  createReferenceController,
  getByIdCourseReferencesController,
  createReferenceTipsController,
  getByIdTipReferencesController,
  getAllReferencesController,
  getMyReferencesController
} from "./controler";

const referencesRoute = Router();

referencesRoute.get("/getAllReferences", getAllReferencesController);
referencesRoute.get("/getMyReferences", getMyReferencesController);
referencesRoute.get("/referencesByIdCourse", getByIdCourseReferencesController);
referencesRoute.post("/referencesRegister", createReferenceController);
referencesRoute.get("/referencesByIdTips", getByIdTipReferencesController);
referencesRoute.post("/referencesRegisterTips", createReferenceTipsController);

export default referencesRoute;
