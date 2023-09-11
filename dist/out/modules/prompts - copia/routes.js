"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var promptsRoutes = (0, express_1.Router)();
promptsRoutes.route("/addPrompts").post(controler_1.createPromptsController);
promptsRoutes.route("/getPromptsById/:id").get(controler_1.getPromptsByIdController);
promptsRoutes.route("/getMyPrompts/:id").get(controler_1.getMyPromptsController);
exports.default = promptsRoutes;
