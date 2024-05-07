"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var controler_2 = require("../user/controler");
var hotelRoutes = (0, express_1.Router)();
var multer_1 = __importDefault(require("../../libs/multer"));
hotelRoutes.get("/", controler_1.getAllHotelController);
hotelRoutes.get("/getByIdHotel/:id", controler_1.getByIdHotelController);
hotelRoutes.get("/getByIdUserHotel/:id", controler_1.getByIdUserHotelController);
hotelRoutes.get("/getHotelNoVerified", controler_1.getHotelNotVerifiedController);
hotelRoutes.get("/getHotelVerified", controler_1.getHotelVerifiedController);
hotelRoutes.get("/getHotels", controler_1.getHotelsController);
//hotelRoutes.route("/hotelRegister").post(createHotelController);
hotelRoutes.route("/verifyHotel/:id").post(controler_1.verifyHotelController);
hotelRoutes.route("/declineHotel/:id").post(controler_1.declineHotelController);
hotelRoutes.route("/updateState/:id").post(controler_1.updateStateController);
hotelRoutes.route("/services/:id").post(controler_1.registerServicesHotelController);
hotelRoutes.route("/policies").post(controler_1.createPoliciesController);
hotelRoutes.get("/getByIdPolicies/:id", controler_1.getByIdHotelPoliciesController);
hotelRoutes.route("/commentHotel/:id").post(controler_1.commentDeclineHotelController);
hotelRoutes.route("/commentPolicies/:id").post(controler_1.commentPoliciesHotelController);
hotelRoutes.route("/updatePolicies/:id").post(controler_1.updatePoliciesHotelController);
hotelRoutes.route("/verifyPolicies/:id").post(controler_1.verifyPoliciesController);
hotelRoutes
    .route("/updateHotel/:id")
    .post(multer_1.default.single("archivo"), controler_1.updateHotelController);
hotelRoutes
    .route("/hotelRegister")
    .post(multer_1.default.single("archivo"), controler_1.createHotelController);
hotelRoutes.get("/getAllUser", controler_2.getAllUserController);
exports.default = hotelRoutes;
