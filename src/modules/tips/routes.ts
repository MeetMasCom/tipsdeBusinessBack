import { Router } from "express";

const tipsRoutes = Router();

import upload from "../../libs/multer";
import {createTipsController, getTipsByIdController,getTipsByIdUserController,getAllTipsController,updateTipsController

} from "./controler";


//topicRoutes.post("/createTopic",createTopicController);
tipsRoutes.get("/getTipsByIdUser/:id", getTipsByIdUserController);
tipsRoutes.get("/getTipsById/:id", getTipsByIdController);
tipsRoutes.get("/getAllTips", getAllTipsController);
tipsRoutes.post('/createTips',createTipsController);
tipsRoutes.route("/updateTips/:id").post(updateTipsController);

export default tipsRoutes;
