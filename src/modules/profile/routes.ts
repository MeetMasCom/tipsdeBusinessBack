import { Router } from "express";

const profileRoutes = Router();

import {
  createProfileController,
  getAllProfileController,
  addProfileController,
  getProfileByIdController,
  getUserProfileIdController,
  addSocialNController,
  addFollowersController,
  addFollowingsController
} from "./controler";

profileRoutes.post("/createProfile", createProfileController);
profileRoutes.get("/getAllProfile", getAllProfileController);
profileRoutes.post("/addProfile/:id", addProfileController);
profileRoutes.get("/profileById/:id", getProfileByIdController);
profileRoutes.get("/profileUser/:id", getUserProfileIdController);
profileRoutes.post("/addSocialN/:id", addSocialNController);
profileRoutes.post("/addFollowers/:id", addFollowersController);
profileRoutes.post("/addFollowings/:id", addFollowingsController);

export default profileRoutes;
