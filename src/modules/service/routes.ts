import { Router } from "express";

import {createServiceController,getAllServiceController,getByIdHotelController,getByIdServiceController } from "./controler";

const serviceRoutes = Router();

import upload from "../../libs/multer";

serviceRoutes.get("/", getAllServiceController);
serviceRoutes.get("/getByIdHotelService/:id", getByIdHotelController);
serviceRoutes.get("/getByIdService/:id", getByIdServiceController);
serviceRoutes.post("/serviceRegister",createServiceController);

export default serviceRoutes;
