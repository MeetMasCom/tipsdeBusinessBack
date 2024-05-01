"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controler_1 = require("./controler");
const commentRoute = (0, express_1.Router)();
commentRoute.get("/commentByIdFad", controler_1.getByIdFadCommentController);
commentRoute.post("/commentRegister", controler_1.createCommentController);
exports.default = commentRoute;
