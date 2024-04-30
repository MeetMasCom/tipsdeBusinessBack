import { Router } from "express";
import { createStripeSessionController } from "./controler";

const stripeRoutes:any = Router();

stripeRoutes.route("/checkout").post(createStripeSessionController);

export default stripeRoutes;
