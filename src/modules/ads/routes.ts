import { Router } from "express";
import {
  createAdsController,
  deleteAdsController,
  getAdsController,
  getAdsForUserController,
  getAllsAdsController,
  toogleAdsByIdController,
  updateAdsByIdController,
  updateStateAdsController,
  visitAdsController,
} from "./controler";
import { validateJwtHeader } from "../../helpers/jwtHelper";

const adsRoutes = Router();

adsRoutes.post("/", validateJwtHeader, createAdsController);
adsRoutes.get("/getAll", validateJwtHeader, getAllsAdsController);
adsRoutes.get("/getUserAds/:id", validateJwtHeader, getAdsController);
adsRoutes.post("/updateStateAds/:id", validateJwtHeader, updateStateAdsController);
adsRoutes.delete("/deleteAdsById/:id", validateJwtHeader, deleteAdsController);
adsRoutes.post("/updateAdsById/:id", validateJwtHeader, updateAdsByIdController);
adsRoutes.post("/onOffAdsById/:id", validateJwtHeader, toogleAdsByIdController);
adsRoutes.get("/getUserForAds/:id", validateJwtHeader, getAdsForUserController);
adsRoutes.post("/visitAds", validateJwtHeader, visitAdsController);


export default adsRoutes;
// validateJwtHeader