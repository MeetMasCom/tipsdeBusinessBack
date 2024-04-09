import { Router } from "express";
import { validateJwtHeader } from "../../helpers/jwtHelper";
import { getAllUsersMessaguesController, getMessaguesController, saveMessaguesController } from "./controller";

const chatRoutes = Router();

chatRoutes.get("/messages",  getMessaguesController);
chatRoutes.get("/messages/users", getAllUsersMessaguesController);
chatRoutes.post("/messages",  saveMessaguesController);

export default chatRoutes;

