"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var balanceCompanyRoutes = (0, express_1.Router)();
balanceCompanyRoutes.get("/", [], controler_1.getAllController);
balanceCompanyRoutes.get("/rechargs", [], controler_1.getAllRechargsController);
// validateJwtHeader
exports.default = balanceCompanyRoutes;
