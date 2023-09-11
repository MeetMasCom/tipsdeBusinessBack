import { Router } from "express";

import {
  createFeedBackController,
  getFeedbackController
} from "./controler";

const feedbackRoutes = Router();


feedbackRoutes.route("/createFeedBack").post(createFeedBackController);

feedbackRoutes.route("/getFeedBack").get(getFeedbackController);
export default feedbackRoutes;
