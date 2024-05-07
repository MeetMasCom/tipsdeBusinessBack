"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var subpromptsRoutes = (0, express_1.Router)();
subpromptsRoutes.route("/addsubPrompts").post(controler_1.createSubPromptsController);
subpromptsRoutes.route("/getSubPromptsByIDPrompts/:id").get(controler_1.getSubPromptsByIdController);
exports.default = subpromptsRoutes;
