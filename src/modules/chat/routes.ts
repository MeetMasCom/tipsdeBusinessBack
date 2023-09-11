import { Router } from "express";
import { validateJwtHeader } from "../../helpers/jwtHelper";
import { getAllUsersMessaguesController, getMessaguesController, saveMessaguesController } from "./controller";

const chatRoutes = Router();

chatRoutes.get("/messages", [validateJwtHeader], getMessaguesController);
chatRoutes.get("/messages/users", [validateJwtHeader], getAllUsersMessaguesController);
chatRoutes.post("/messages", [validateJwtHeader], saveMessaguesController);

export default chatRoutes;

