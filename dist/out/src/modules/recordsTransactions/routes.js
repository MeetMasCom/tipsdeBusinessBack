"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwtHelper_1 = require("../../helpers/jwtHelper");
const controler_1 = require("./controler");
const recordsTransactionsRoutes = (0, express_1.Router)();
recordsTransactionsRoutes.get("/", [jwtHelper_1.validateJwtHeader], controler_1.getAllController);
recordsTransactionsRoutes.get("/detail", controler_1.getAllByUserController);
exports.default = recordsTransactionsRoutes;
