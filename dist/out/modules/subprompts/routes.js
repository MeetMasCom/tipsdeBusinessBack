"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controler_1 = require("./controler");
const subpromptsRoutes = (0, express_1.Router)();
subpromptsRoutes.route("/addsubPrompts").post(controler_1.createSubPromptsController);
subpromptsRoutes.route("/getSubPromptsByIDPrompts/:id").get(controler_1.getSubPromptsByIdController);
exports.default = subpromptsRoutes;
