import { Router } from "express";

import {createTypeRoomController,getAllTypeController,getByIdController,getByIdHotelController } from "./controler";

const typeRoomRoutes = Router();

import upload from "../../libs/multer";

typeRoomRoutes.get("/", getAllTypeController);
typeRoomRoutes.get("/getById/:id", getByIdController);
typeRoomRoutes.get("/getTypeHotelId/:id", getByIdHotelController);
typeRoomRoutes.post("/typeRoomRegister",createTypeRoomController);

export default typeRoomRoutes;
