"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var countryRoutes = (0, express_1.Router)();
countryRoutes.get("/", controler_1.getAllCountryController);
exports.default = countryRoutes;
