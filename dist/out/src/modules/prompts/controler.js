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
exports.getPromptsByUserController = exports.buyPromptController = exports.updatePromptPriceController = exports.getPricePromptsController = exports.addPromptsPriceController = exports.updatePromptController = exports.getAllPromptsController = exports.getPromptsByIdController = exports.getMyPromptsController = exports.createPromptsController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createPromptsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const likeService = new service_1.PromptsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.save(payload),
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
exports.createPromptsController = createPromptsController;
const getMyPromptsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const likeService = new service_1.PromptsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.getMyPrompts(id),
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
exports.getMyPromptsController = getMyPromptsController;
const getPromptsByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const likeService = new service_1.PromptsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.getPromptsById(id),
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
exports.getPromptsByIdController = getPromptsByIdController;
const getAllPromptsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const likeService = new service_1.PromptsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.getAllPrompts(),
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
exports.getAllPromptsController = getAllPromptsController;
const updatePromptController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const userService = new service_1.PromptsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.updatePrompt(id, payload),
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
exports.updatePromptController = updatePromptController;
const addPromptsPriceController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const likeService = new service_1.PromptsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.savePrice(payload),
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
exports.addPromptsPriceController = addPromptsPriceController;
const getPricePromptsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const likeService = new service_1.PromptsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.getPricePrompts(),
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
exports.getPricePromptsController = getPricePromptsController;
const updatePromptPriceController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const userService = new service_1.PromptsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.updatePricePrompt(id, payload),
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
exports.updatePromptPriceController = updatePromptPriceController;
const buyPromptController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const membershipService = new service_1.PromptsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield membershipService.buyPromptUser(payload),
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
exports.buyPromptController = buyPromptController;
const getPromptsByUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const likeService = new service_1.PromptsService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield likeService.getPromptsByUser(id),
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
exports.getPromptsByUserController = getPromptsByUserController;
