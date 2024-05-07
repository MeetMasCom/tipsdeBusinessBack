"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controler_1 = require("./controler");
const starRoutes = (0, express_1.Router)();
starRoutes.post("/starRegister", controler_1.createStartController);
starRoutes.get("/getByIdUserStart/:id", controler_1.getByIdUserStartController);
starRoutes.get("/getAllByIdFadStart/:id", controler_1.getAllByIdFadStartController);
starRoutes.get("/getStarUserFadId", controler_1.getStarUserFadId);
starRoutes.post("/updateStar/:id", controler_1.UpdateStar);
exports.default = starRoutes;
