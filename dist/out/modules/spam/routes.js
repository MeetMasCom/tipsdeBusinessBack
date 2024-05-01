"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controler_1 = require("./controler");
const spamRoutes = (0, express_1.Router)();
spamRoutes.route("/getAllSpam").get(controler_1.getAllSpamController);
spamRoutes.route("/getDetailSpam/:id").get(controler_1.getDetailSpamController);
spamRoutes.route("/addSpam").post(controler_1.createSpamController);
//el que denuncia
spamRoutes.route("/getByIdSpam/:id").get(controler_1.getByIdSpamController);
//al que denuncian
spamRoutes.route("/getUserSpam/:id").get(controler_1.getUserSpamController);
spamRoutes.route("/updateSpam/:id").post(controler_1.updateSpamController);
exports.default = spamRoutes;
