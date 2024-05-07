"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const chatRoutes = (0, express_1.Router)();
chatRoutes.get("/messages", controller_1.getMessaguesController);
chatRoutes.get("/messages/users", controller_1.getAllUsersMessaguesController);
chatRoutes.post("/messages", controller_1.saveMessaguesController);
exports.default = chatRoutes;
