"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var adminRoutes = (0, express_1.Router)();
adminRoutes.get("/", controler_1.getAllAdminController);
adminRoutes.get("/getByIdAdmin/:id", controler_1.getByIdAdminController);
adminRoutes.post("/adminRegister", controler_1.createAdminController);
adminRoutes.post("/login", controler_1.loginController);
adminRoutes.post("/valid-login", controler_1.otpController);
adminRoutes.route("/updateAdmin/:id").post(controler_1.updateAdminController);
adminRoutes.route("/updateState/:id").post(controler_1.updateStateController);
adminRoutes.get("/getverifyTeacher", controler_1.getVerifyTeacher);
exports.default = adminRoutes;
