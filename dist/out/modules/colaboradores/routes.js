"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var colaboradorRoutes = (0, express_1.Router)();
colaboradorRoutes.route("/getAllSpam").get(controler_1.getAllSpamController);
colaboradorRoutes.route("/getDetailSpam/:id").get(controler_1.getDetailSpamController);
colaboradorRoutes.route("/addSpam").post(controler_1.createColaboradorController);
//el que denuncia
colaboradorRoutes.route("/getByIdSpam/:id").get(controler_1.getByIdSpamController);
//al que denuncian
colaboradorRoutes.route("/getUserSpam/:id").get(controler_1.getUserSpamController);
colaboradorRoutes.route("/updateSpam/:id").post(controler_1.updateSpamController);
exports.default = colaboradorRoutes;
