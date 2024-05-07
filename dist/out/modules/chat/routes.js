"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var chatRoutes = (0, express_1.Router)();
chatRoutes.get("/messages", controller_1.getMessaguesController);
chatRoutes.get("/messages/users", controller_1.getAllUsersMessaguesController);
chatRoutes.post("/messages", controller_1.saveMessaguesController);
exports.default = chatRoutes;
