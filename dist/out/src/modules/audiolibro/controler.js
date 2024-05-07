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
exports.updateAudioLibroController = exports.getAllAudioLibroController = exports.getAudioLibroByIdController = exports.getAudioLibroByIdUserController = exports.createAudioLibroController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createAudioLibroController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        // const newTopic={user_id,title,description,userCourse,imagen,dateView,video} as TipsI;
        console.log(payload);
        const userService = new service_1.AudioLibroService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.saveAudioLibro(payload),
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
exports.createAudioLibroController = createAudioLibroController;
const getAudioLibroByIdUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.AudioLibroService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getAudioLibroByIdUser(id),
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
exports.getAudioLibroByIdUserController = getAudioLibroByIdUserController;
const getAudioLibroByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.AudioLibroService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getAudioLibroById(id),
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
exports.getAudioLibroByIdController = getAudioLibroByIdController;
const getAllAudioLibroController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new service_1.AudioLibroService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getAllAudioLibro(),
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
exports.getAllAudioLibroController = getAllAudioLibroController;
const updateAudioLibroController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        // const newTopic={user_id,title,description,userCourse,imagen,dateView,video} as AudioLibroI;
        //const userService = new TipsService();
        //const updateBilletera = req.body as unknown as TipsI;
        //console.log(newTopic);
        const id = req.params.id;
        const billeteraService = new service_1.AudioLibroService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield billeteraService.updateAudioLibro(id, payload),
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
exports.updateAudioLibroController = updateAudioLibroController;
