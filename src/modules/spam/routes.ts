import { Router } from "express";

import {
  createSpamController,getUserSpamController,getByIdSpamController,getAllSpamController, getDetailSpamController, updateSpamController
} from "./controler";

const spamRoutes = Router();

spamRoutes.route("/getAllSpam").get(getAllSpamController);
spamRoutes.route("/getDetailSpam/:id").get(getDetailSpamController);

spamRoutes.route("/addSpam").post(createSpamController);
//el que denuncia
spamRoutes.route("/getByIdSpam/:id").get(getByIdSpamController);


//al que denuncian
spamRoutes.route("/getUserSpam/:id").get(getUserSpamController);

spamRoutes.route("/updateSpam/:id").post(updateSpamController);

export default spamRoutes;
