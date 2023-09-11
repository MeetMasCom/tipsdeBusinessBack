import { Router } from "express";

import {
  createSubPromptsController,
  getSubPromptsByIdController
} from "./controler";

const subpromptsRoutes = Router();


subpromptsRoutes.route("/addsubPrompts").post(createSubPromptsController);
subpromptsRoutes.route("/getSubPromptsByIDPrompts/:id").get(getSubPromptsByIdController);

export default subpromptsRoutes;
