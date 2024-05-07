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
exports.UpdatePriceRoomController = exports.AddPriceRoomController = exports.createImageRoomController = exports.getRoomByIdController = exports.getByIdHotelRoomController = exports.createRoomController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createRoomController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        console.log("payload", payload);
        const roomService = new service_1.RoomService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield roomService.save(payload),
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
exports.createRoomController = createRoomController;
const getByIdHotelRoomController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const roomService = new service_1.RoomService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield roomService.getByIdHotelRoom(id),
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
exports.getByIdHotelRoomController = getByIdHotelRoomController;
const getRoomByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const roomService = new service_1.RoomService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield roomService.getRoomById(id),
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
exports.getRoomByIdController = getRoomByIdController;
const createImageRoomController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
        return (0, responseHelper_1.serviceResponse)({
            data: image,
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
exports.createImageRoomController = createImageRoomController;
const AddPriceRoomController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const roomService = new service_1.RoomService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield roomService.addPriceRoom(id, payload),
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
exports.AddPriceRoomController = AddPriceRoomController;
const UpdatePriceRoomController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log("id room", id);
        const payload = req.body;
        const roomService = new service_1.RoomService();
        console.log(payload);
        return (0, responseHelper_1.serviceResponse)({
            data: yield roomService.updatePriceRoom(id, payload),
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
exports.UpdatePriceRoomController = UpdatePriceRoomController;
