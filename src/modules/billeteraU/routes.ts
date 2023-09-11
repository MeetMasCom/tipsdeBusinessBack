import { Router } from "express";

import {
  createBilleteraUserController,
  createOtpController,
  getAllBilleterasUserController,
  getByIdBilleteraUserController,
  getByIdUserBilleteraUserController,
  updateBilleteraUserController,
  validateOtpController,
} from "./controler";
import { validateJwtHeader } from "../../helpers/jwtHelper";

const billeteraURoutes = Router();

billeteraURoutes.get("/", getAllBilleterasUserController);
billeteraURoutes.get("/getByIdBilleteraU/:id",  getByIdBilleteraUserController);
billeteraURoutes.get("/getByIdUserBilleteraU/:id", getByIdUserBilleteraUserController);
billeteraURoutes.put("/updateBilleteraU/:id",  updateBilleteraUserController);
billeteraURoutes.post("/createBilleteraU", createBilleteraUserController);
billeteraURoutes.post("/validOtp",  validateOtpController);
billeteraURoutes.get("/validOtp/:id", createOtpController);

export default billeteraURoutes;
