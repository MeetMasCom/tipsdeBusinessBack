"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var fadRoutes = (0, express_1.Router)();
var multer_1 = __importDefault(require("../../libs/multer"));
fadRoutes.get("/", controler_1.getAllFadController);
//userRoutes.post("/fadRegister", upload.single('image'),createFadController);
fadRoutes.get("/getByIdFad/:id", controler_1.getByIdFadController);
fadRoutes.get("/getByIdUserFad/:id", controler_1.getByIdUserFadController);
fadRoutes.route('/fadRegister')
    .post(multer_1.default.single('image'), controler_1.createFadController);
exports.default = fadRoutes;
