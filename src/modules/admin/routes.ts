import { Router } from "express";

import {
  createAdminController,
  getAllAdminController,
  getByIdAdminController,
  loginController,
  otpController,
  updateAdminController,
  updateStateController,
  getVerifyTeacher
} from "./controler";

const adminRoutes = Router();

adminRoutes.get("/", getAllAdminController);
adminRoutes.get("/getByIdAdmin/:id", getByIdAdminController);
adminRoutes.post("/adminRegister", createAdminController);
adminRoutes.post("/login", loginController);
adminRoutes.post("/valid-login", otpController);
adminRoutes.route("/updateAdmin/:id").post(updateAdminController);
adminRoutes.route("/updateState/:id").post(updateStateController);
adminRoutes.get("/getverifyTeacher", getVerifyTeacher);
export default adminRoutes;
