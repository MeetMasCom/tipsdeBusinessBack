"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var likeRoutes = (0, express_1.Router)();
likeRoutes.route("/addLike").post(controler_1.createLikeController);
//usuario que me han dado like
likeRoutes.route("/getByIdLike/:id").get(controler_1.getByIdLikeController);
likeRoutes.route("/getUserLike/:id").get(controler_1.getUserLikeController);
likeRoutes.route("/updateLike/:id").post(controler_1.updateLikeController);
//usuarios a los que di like
likeRoutes.route("/getMyLike/:id").get(controler_1.getMyLikesController);
likeRoutes.route("/verificarLike/:id/:idL").get(controler_1.verificarLikeController);
exports.default = likeRoutes;
