import { Router } from "express";

import {
  createPromptsController,
  getMyPromptsController,
  getPromptsByIdController,
  getAllPromptsController,
  updatePromptController
} from "./controler";

const promptsRoutes = Router();


promptsRoutes.route("/addPrompts").post(createPromptsController);
promptsRoutes.route("/getPromptsById/:id").get(getPromptsByIdController);
promptsRoutes.route("/getMyPrompts/:id").get(getMyPromptsController);
promptsRoutes.route("/getAllPrompts").get(getAllPromptsController);
promptsRoutes.route("/updatePrompt/:id").post(updatePromptController);


export default promptsRoutes;
