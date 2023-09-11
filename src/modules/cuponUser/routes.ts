import { Router } from "express";

import {
  createCuponUserController,getAllCuponController,
  getByIdAdminCuponController,
  getUserCuponController,
  updateCuponController,
  updateStateController,
  deleteCupoUserController
} from "./controler";

const cuponUserRoutes = Router();

cuponUserRoutes.route("/getAllCupon").get(getAllCuponController);

cuponUserRoutes.route("/addCupon").post(createCuponUserController);

cuponUserRoutes.route("/getByIdAdminCupon/:id").get(getByIdAdminCuponController);


cuponUserRoutes.route("/getUserCupon/:id").get(getUserCuponController);

cuponUserRoutes.route("/updateCupon/:id").post(updateCuponController);
cuponUserRoutes.route("/updateState/:id").post(updateStateController);
cuponUserRoutes.route("/deleteCupoUser/:id").delete(deleteCupoUserController);

export default cuponUserRoutes;
