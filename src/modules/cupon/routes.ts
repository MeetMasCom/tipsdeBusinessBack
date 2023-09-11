import { Router } from "express";

import {
  createCuponController,getAllCuponController,
  getByIdCuponController,
  getUserCuponController,
  updateCuponController,
  updateStateController,
  getCuponActivoUserController,
  restarCuponController,
  getCuponCodigoController
} from "./controler";

const cuponRoutes = Router();

cuponRoutes.route("/getAllCupon").get(getAllCuponController);

cuponRoutes.route("/addCupon").post(createCuponController);

cuponRoutes.route("/getByIdCupon/:id").get(getByIdCuponController);


cuponRoutes.route("/getUserCupon/:id").get(getUserCuponController);
cuponRoutes.route("/getCuponActivoUser/:id").get(getCuponActivoUserController);

cuponRoutes.route("/updateCupon/:id").post(updateCuponController);
cuponRoutes.route("/updateState/:id").post(updateStateController);
cuponRoutes.route("/restarCupon/:id").post(restarCuponController);
cuponRoutes.route("/validate/:codigo").get(getCuponCodigoController);

export default cuponRoutes;
