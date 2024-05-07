"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controler_1 = require("./controler");
const stripeRoutes = (0, express_1.Router)();
stripeRoutes.route("/checkout").post(controler_1.createStripeSessionController);
exports.default = stripeRoutes;
