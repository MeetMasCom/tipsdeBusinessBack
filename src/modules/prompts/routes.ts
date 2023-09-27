import { Router } from "express";

import {
  createPromptsController,
  getMyPromptsController,
  getPromptsByIdController,
  getAllPromptsController,
  updatePromptController,
  addPromptsPriceController,
  getPricePromptsController,
  updatePromptPriceController,
  buyPromptController,
  getPromptsByUserController
} from "./controler";

const promptsRoutes = Router();


promptsRoutes.route("/addPrompts").post(createPromptsController);
promptsRoutes.route("/getPromptsById/:id").get(getPromptsByIdController);
promptsRoutes.route("/getMyPrompts/:id").get(getMyPromptsController);
promptsRoutes.route("/getAllPrompts").get(getAllPromptsController);
promptsRoutes.route("/updatePrompt/:id").post(updatePromptController);
promptsRoutes.route("/addPricePrompts").post(addPromptsPriceController);
promptsRoutes.route("/getPricePrompts").get(getPricePromptsController);
promptsRoutes.route("/updatePricePrompt/:id").post(updatePromptPriceController);
promptsRoutes.route("/buyPrompts").post(buyPromptController);
promptsRoutes.route("/getPromptsByUser/:id").get(getPromptsByUserController);

export default promptsRoutes;
