"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var commentRoute = (0, express_1.Router)();
commentRoute.get("/commentByIdFad", controler_1.getByIdFadCommentController);
commentRoute.post("/commentRegister", controler_1.createCommentController);
exports.default = commentRoute;
