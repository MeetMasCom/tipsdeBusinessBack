import { Router } from "express";

import {createFadController,getAllFadController,getByIdFadController,getByIdUserFadController } from "./controler";

const fadRoutes = Router();

import upload from "../../libs/multer";

fadRoutes.get("/", getAllFadController);
//userRoutes.post("/fadRegister", upload.single('image'),createFadController);
fadRoutes.get("/getByIdFad/:id", getByIdFadController);
fadRoutes.get("/getByIdUserFad/:id", getByIdUserFadController);
fadRoutes.route('/fadRegister')
    .post(upload.single('image'),createFadController);

export default fadRoutes;
