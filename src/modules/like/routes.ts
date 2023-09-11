import { Router } from "express";

import {
  createLikeController,
  getByIdLikeController,
  getUserLikeController,
  updateLikeController,
  getMyLikesController,
  verificarLikeController
} from "./controler";

const likeRoutes = Router();


likeRoutes.route("/addLike").post(createLikeController);


//usuario que me han dado like
likeRoutes.route("/getByIdLike/:id").get(getByIdLikeController);

likeRoutes.route("/getUserLike/:id").get(getUserLikeController);


likeRoutes.route("/updateLike/:id").post(updateLikeController);


//usuarios a los que di like
likeRoutes.route("/getMyLike/:id").get(getMyLikesController);

likeRoutes.route("/verificarLike/:id/:idL").get(verificarLikeController);

export default likeRoutes;
