import { Router } from "express";

import {
  createNotificationController,
  getByIdUserNotificationController,
  getUserLikeController,
  updateSateController,
} from "./controler";

const notificationRoutes = Router();


notificationRoutes.route("/addNotification").post(createNotificationController);

notificationRoutes.route("/getNotificationByIdUser/:id").get(getByIdUserNotificationController);

notificationRoutes.route("/getUserLike/:id").get(getUserLikeController);

notificationRoutes.route("/updateNotification/:id").post(updateSateController);

export default notificationRoutes;
