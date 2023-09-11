import { Router } from "express";

import {
  createLikePostController,
  getLikePostandUserController,
  deleteLikePost,
  countLikePost,
} from "./controler";

const likePostRoutes = Router();


likePostRoutes.route("/addLikePost").post(createLikePostController);

likePostRoutes.route("/getLikeUserandPost/:id/:idP").get(getLikePostandUserController);
likePostRoutes.route("/deleteLikeUserandPost/:id").post(deleteLikePost);
likePostRoutes.route("/countLikePost/:id").get(countLikePost);

export default likePostRoutes;
