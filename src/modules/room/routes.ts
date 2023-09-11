import { Router } from "express";

import {
  createRoomController,getByIdHotelRoomController,getRoomByIdController,createImageRoomController,AddPriceRoomController,UpdatePriceRoomController
} from "./controler";

const roomRoutes = Router();

import upload from "../../libs/multer";

//userRoutes.route("/roomRegister").post(createRoomController);
roomRoutes.route("/getByIdHotelRoom/:id").get(getByIdHotelRoomController);
roomRoutes.route("/getRoomById/:id").get(getRoomByIdController);
roomRoutes.route("/roomRegister")
    .post(upload.array('archivo.File'),createRoomController);

    roomRoutes.route("/imagesRegister")
    .post(upload.single('image'),createImageRoomController);

    roomRoutes.route("/registerPrice/:id").post(AddPriceRoomController)
    roomRoutes.route("/updatePrice/:id").post(UpdatePriceRoomController)

export default roomRoutes;
