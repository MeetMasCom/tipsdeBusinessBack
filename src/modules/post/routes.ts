import { Router } from "express";

const postRoutes = Router();

import upload from "../../libs/multer";
import {
  getPostByIdUserController,
  getPostByTypeController,
  createPostUserController,
  getPostByIdController,
  updateProfileController,
  getPostUserandProfileController,
  getPostProfileUserController,
  getCountPostUserProfileController,
  deletePostController
} from "./controler";

postRoutes.get("/getPostByIdUser/:id", getPostByIdUserController);
postRoutes.get("/postByType/:id", getPostByTypeController);
postRoutes.get("/postById/:id", getPostByIdController);
postRoutes.get("/getPostIdUser/:id", getPostUserandProfileController);
postRoutes.get("/getPostUserProfile", getPostProfileUserController);
postRoutes.get("/getCountPost/:id", getCountPostUserProfileController);
postRoutes.post("/createPost",createPostUserController);
postRoutes.get("/deletePost/:id",deletePostController);

  postRoutes.post("/updateProfile/:id", updateProfileController);

export default postRoutes;
