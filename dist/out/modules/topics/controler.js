"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopicByIdController = exports.getTopicByIdModuleController = exports.createTopicController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createTopicController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { module_id, title } = req.body;
        const newTopic = { module_id, title, video: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path };
        const userService = new service_1.TopicService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.saveTopic(newTopic),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.createTopicController = createTopicController;
const getTopicByIdModuleController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.TopicService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getTopicByIdModule(id),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.getTopicByIdModuleController = getTopicByIdModuleController;
const getTopicByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.TopicService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getTopicById(id),
            res: resp,
            req: req,
        });
    }
    catch (error) {
        return (0, responseHelper_1.serviceResponse)({
            message: error.message,
            res: resp,
            statusCode: 400,
            req: req,
        });
    }
});
exports.getTopicByIdController = getTopicByIdController;
