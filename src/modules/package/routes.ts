import { Router } from "express";

import {
  createPackageController,
  getAllPackageController,
  getByIdPackageController,
  updatePackageController,
  getPackageActivosController,
  updateStateController
} from "./controler";

const packageRoutes = Router();


packageRoutes.route("/addPackage").post(createPackageController);

packageRoutes.route("/getAllPackage").get(getAllPackageController);

packageRoutes.route("/getByIdPackage/:id").get(getByIdPackageController);
packageRoutes.route("/getActivePackage").get(getPackageActivosController);

packageRoutes.route("/updatePackage/:id").post(updatePackageController);
packageRoutes.route("/updateSate/:id").post(updateStateController);

export default packageRoutes;
