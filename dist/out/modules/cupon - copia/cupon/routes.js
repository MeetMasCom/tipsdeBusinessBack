"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var cuponRoutes = (0, express_1.Router)();
cuponRoutes.route("/getAllCupon").get(controler_1.getAllCuponController);
cuponRoutes.route("/addCupon").post(controler_1.createCuponController);
//el que denuncia
cuponRoutes.route("/getByIdCupon/:id").get(controler_1.getByIdCuponController);
//al que denuncian
cuponRoutes.route("/getUserCupon/:id").get(controler_1.getUserCuponController);
cuponRoutes.route("/updateCupon/:id").post(controler_1.updateCuponController);
cuponRoutes.route("/updateState/:id").post(controler_1.updateStateController);
exports.default = cuponRoutes;
