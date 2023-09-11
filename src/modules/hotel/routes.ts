import { Router } from "express";

import {
  createHotelController,
  getAllHotelController,
  getByIdHotelController,
  verifyHotelController,
  getHotelNotVerifiedController,
  getByIdUserHotelController,
  registerServicesHotelController,
  declineHotelController,
  commentDeclineHotelController,
  updateHotelController,
  createPoliciesController,
  getHotelVerifiedController,
  getByIdHotelPoliciesController,
  commentPoliciesHotelController,
  verifyPoliciesController,
  getHotelsController, 
  updatePoliciesHotelController,
  updateStateController
} from "./controler";
import {getAllUserController} from '../user/controler';

const hotelRoutes = Router();

import upload from "../../libs/multer";
import multer from "multer";

hotelRoutes.get("/", getAllHotelController);
hotelRoutes.get("/getByIdHotel/:id", getByIdHotelController);
hotelRoutes.get("/getByIdUserHotel/:id", getByIdUserHotelController);
hotelRoutes.get("/getHotelNoVerified", getHotelNotVerifiedController);
hotelRoutes.get("/getHotelVerified", getHotelVerifiedController);
hotelRoutes.get("/getHotels", getHotelsController);
//hotelRoutes.route("/hotelRegister").post(createHotelController);
hotelRoutes.route("/verifyHotel/:id").post(verifyHotelController);
hotelRoutes.route("/declineHotel/:id").post(declineHotelController);
hotelRoutes.route("/updateState/:id").post(updateStateController);
hotelRoutes.route("/services/:id").post(registerServicesHotelController);
hotelRoutes.route("/policies").post(createPoliciesController);
hotelRoutes.get("/getByIdPolicies/:id", getByIdHotelPoliciesController);
hotelRoutes.route("/commentHotel/:id").post(commentDeclineHotelController);
hotelRoutes.route("/commentPolicies/:id").post(commentPoliciesHotelController);
hotelRoutes.route("/updatePolicies/:id").post(updatePoliciesHotelController);
hotelRoutes.route("/verifyPolicies/:id").post(verifyPoliciesController);
hotelRoutes
  .route("/updateHotel/:id")
  .post(upload.single("archivo"), updateHotelController);
  hotelRoutes
  .route("/hotelRegister")
  .post(upload.single("archivo"), createHotelController);

  hotelRoutes.get(
    "/getAllUser",
    getAllUserController
  );

export default hotelRoutes;
