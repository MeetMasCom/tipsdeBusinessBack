import { Router } from "express";
import { validate } from "express-validation";
import {createStartController,getByIdUserStartController,getAllByIdFadStartController, getStarUserFadId,UpdateStar } from "./controler";

const starRoutes = Router();

starRoutes.post("/starRegister", createStartController);
starRoutes.get("/getByIdUserStart/:id", getByIdUserStartController);
starRoutes.get("/getAllByIdFadStart/:id", getAllByIdFadStartController);
starRoutes.get("/getStarUserFadId", getStarUserFadId);
starRoutes.post("/updateStar/:id", UpdateStar);

export default starRoutes;
