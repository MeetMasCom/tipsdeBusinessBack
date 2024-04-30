"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controler_1 = require("./controler");
const countryRoutes = (0, express_1.Router)();
countryRoutes.get("/", controler_1.getAllCountryController);
exports.default = countryRoutes;
