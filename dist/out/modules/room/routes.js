"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var roomRoutes = (0, express_1.Router)();
var multer_1 = __importDefault(require("../../libs/multer"));
//userRoutes.route("/roomRegister").post(createRoomController);
roomRoutes.route("/getByIdHotelRoom/:id").get(controler_1.getByIdHotelRoomController);
roomRoutes.route("/getRoomById/:id").get(controler_1.getRoomByIdController);
roomRoutes.route("/roomRegister")
    .post(multer_1.default.array('archivo.File'), controler_1.createRoomController);
roomRoutes.route("/imagesRegister")
    .post(multer_1.default.single('image'), controler_1.createImageRoomController);
roomRoutes.route("/registerPrice/:id").post(controler_1.AddPriceRoomController);
roomRoutes.route("/updatePrice/:id").post(controler_1.UpdatePriceRoomController);
exports.default = roomRoutes;
