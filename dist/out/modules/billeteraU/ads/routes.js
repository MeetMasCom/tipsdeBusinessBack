"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var jwtHelper_1 = require("../../../helpers/jwtHelper");
var adsRoutes = (0, express_1.Router)();
adsRoutes.post("/", jwtHelper_1.validateJwtHeader, controler_1.createAdsController);
adsRoutes.get("/getAll", jwtHelper_1.validateJwtHeader, controler_1.getAllsAdsController);
adsRoutes.get("/getUserAds/:id", jwtHelper_1.validateJwtHeader, controler_1.getAdsController);
adsRoutes.post("/updateStateAds/:id", jwtHelper_1.validateJwtHeader, controler_1.updateStateAdsController);
adsRoutes.delete("/deleteAdsById/:id", jwtHelper_1.validateJwtHeader, controler_1.deleteAdsController);
adsRoutes.post("/updateAdsById/:id", jwtHelper_1.validateJwtHeader, controler_1.updateAdsByIdController);
adsRoutes.post("/onOffAdsById/:id", jwtHelper_1.validateJwtHeader, controler_1.toogleAdsByIdController);
adsRoutes.get("/getUserForAds/:id", jwtHelper_1.validateJwtHeader, controler_1.getAdsForUserController);
adsRoutes.post("/visitAds", jwtHelper_1.validateJwtHeader, controler_1.visitAdsController);
exports.default = adsRoutes;
// validateJwtHeader
