"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var packageRoutes = (0, express_1.Router)();
packageRoutes.route("/addPackage").post(controler_1.createPackageController);
packageRoutes.route("/getAllPackage").get(controler_1.getAllPackageController);
packageRoutes.route("/getByIdPackage/:id").get(controler_1.getByIdPackageController);
packageRoutes.route("/getActivePackage").get(controler_1.getPackageActivosController);
packageRoutes.route("/updatePackage/:id").post(controler_1.updatePackageController);
packageRoutes.route("/updateSate/:id").post(controler_1.updateStateController);
exports.default = packageRoutes;
