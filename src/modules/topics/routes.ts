import { Router } from "express";

const topicRoutes = Router();

import upload from "../../libs/multer";
import {
    createTopicController, getTopicByIdController, getTopicByIdModuleController

} from "./controler";


//topicRoutes.post("/createTopic",createTopicController);
topicRoutes.get("/getTopicByIdModule/:id", getTopicByIdModuleController);
topicRoutes.get("/getTopicById/:id", getTopicByIdController);
topicRoutes.post('/createTopic',createTopicController);

export default topicRoutes;
