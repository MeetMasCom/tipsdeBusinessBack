import { Router } from "express";

import {
  createColaboradorController,getUserSpamController,getByIdSpamController,getAllSpamController, getDetailSpamController, updateSpamController
} from "./controler";

const colaboradorRoutes = Router();

colaboradorRoutes.route("/getAllSpam").get(getAllSpamController);
colaboradorRoutes.route("/getDetailSpam/:id").get(getDetailSpamController);

colaboradorRoutes.route("/addSpam").post(createColaboradorController);
//el que denuncia
colaboradorRoutes.route("/getByIdSpam/:id").get(getByIdSpamController);


//al que denuncian
colaboradorRoutes.route("/getUserSpam/:id").get(getUserSpamController);

colaboradorRoutes.route("/updateSpam/:id").post(updateSpamController);

export default colaboradorRoutes;
