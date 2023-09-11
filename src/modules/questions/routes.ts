import { Router } from "express";

const questionRoutes = Router();

import upload from "../../libs/multer";
import {createQuestionController,getQuestionByIdController,getQuestionByIdSubPromptsController

} from "./controler";


//topicRoutes.post("/createTopic",createTopicController);
questionRoutes.get("/getQuestionById/:id", getQuestionByIdController);
questionRoutes.get("/getQuestionByIdSubPrompts/:id", getQuestionByIdSubPromptsController);

questionRoutes.route('/addQuestion')
    .post(createQuestionController);

export default questionRoutes;
