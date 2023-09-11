import { Router } from "express";
import { validateJwtHeader } from "../../helpers/jwtHelper";
import {
  getAllController,
  getAllRetreatController,
  getAllRetreatUserController,
  getBalanceUserController,
  rechargeController,
  retreatController,
  reviewRechargeController,
  reviewRetreatController,
  updateBalance
} from "./controler";
import { validate } from "express-validation";
import {
  getBalanceUserValidation,
  rechargeValidation,
  reviewRechargeValidation,
} from "./validation";

const balanceUserRoutes = Router();

balanceUserRoutes.get(
  "/user/:id",
  [validate(getBalanceUserValidation)],
  getBalanceUserController
);
balanceUserRoutes.post(
  "/recharge",
  [validate(rechargeValidation)],
  rechargeController
);
balanceUserRoutes.post(
  "/review-recharge",
  [validate(reviewRechargeValidation)],
  reviewRechargeController
);

balanceUserRoutes.get("/retreatAll", getAllRetreatController);
balanceUserRoutes.post("/retreat", retreatController);
balanceUserRoutes.get("/retreat/:id", getAllRetreatUserController);
balanceUserRoutes.post("/review-retreat", reviewRetreatController);

balanceUserRoutes.get(
  "/:id",
  [validate(getBalanceUserValidation)],
  getAllController
);

balanceUserRoutes.post("/updateBalance/:id", updateBalance);

export default balanceUserRoutes;
