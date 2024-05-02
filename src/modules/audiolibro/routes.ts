import { Router } from "express";

const audiolibroRoutes = Router();

import upload from "../../libs/multer";
import {createAudioLibroController, getAudioLibroByIdController,getAudioLibroByIdUserController,getAllAudioLibroController,updateAudioLibroController

} from "./controler";


//topicRoutes.post("/createTopic",createTopicController);
audiolibroRoutes.get("/getAudioLibroByIdUser/:id", getAudioLibroByIdUserController);
audiolibroRoutes.get("/getAudioLibroById/:id", getAudioLibroByIdController);
audiolibroRoutes.get("/getAllAudioLibro", getAllAudioLibroController);
audiolibroRoutes.post('/createAudioLibro',createAudioLibroController);
audiolibroRoutes.route("/updateAudioLibro/:id").post(updateAudioLibroController);

export default audiolibroRoutes;
