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
exports.updateStateController = exports.updatePoliciesHotelController = exports.verifyPoliciesController = exports.commentPoliciesHotelController = exports.getByIdHotelPoliciesController = exports.createPoliciesController = exports.updateHotelController = exports.getByIdServicesHotelController = exports.registerServicesHotelController = exports.getHotelsController = exports.getHotelVerifiedController = exports.getHotelNotVerifiedController = exports.commentDeclineHotelController = exports.declineHotelController = exports.verifyHotelController = exports.getByIdUserHotelController = exports.getByIdHotelController = exports.getAllHotelController = exports.createHotelController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const createHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { user_id, name, ruc, address, phone, web, country, city, stars, manager, detail } = req.body;
        const newFad = { user_id, name, ruc, address, phone, web, country, city, stars, manager, detail, doc: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path };
        const payload = req.body;
        console.log("controlador", newFad);
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.save(newFad),
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
exports.createHotelController = createHotelController;
const getAllHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.getAll(),
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
exports.getAllHotelController = getAllHotelController;
const getByIdHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.getById(id),
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
exports.getByIdHotelController = getByIdHotelController;
const getByIdUserHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.getByIdUser(id),
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
exports.getByIdUserHotelController = getByIdUserHotelController;
const verifyHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.update(id, payload),
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
exports.verifyHotelController = verifyHotelController;
const declineHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.decline(id, payload),
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
exports.declineHotelController = declineHotelController;
const commentDeclineHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { comment } = req.body;
        const newComment = { comment };
        const id = req.params.id;
        const payload = req.body;
        console.log("id", id);
        console.log("payload", newComment);
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.commentdecline(id, newComment),
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
exports.commentDeclineHotelController = commentDeclineHotelController;
const getHotelNotVerifiedController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.getHotelNotVerified(),
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
exports.getHotelNotVerifiedController = getHotelNotVerifiedController;
const getHotelVerifiedController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.getHotelVerified(),
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
exports.getHotelVerifiedController = getHotelVerifiedController;
const getHotelsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.getHotels(),
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
exports.getHotelsController = getHotelsController;
const registerServicesHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.updateServices(id, payload),
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
exports.registerServicesHotelController = registerServicesHotelController;
const getByIdServicesHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.getByIdServices(id),
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
exports.getByIdServicesHotelController = getByIdServicesHotelController;
const updateHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const id = req.params.id;
        const { user_id, name, ruc, address, phone, web, country, city, stars, manager, detail, state } = req.body;
        const newHotel = { user_id, name, ruc, address, phone, web, country, city, stars, manager, detail, state, doc: (_b = req.file) === null || _b === void 0 ? void 0 : _b.path };
        const payload = req.body;
        console.log("id", id);
        console.log("newHotel", newHotel);
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.updateHotel(id, newHotel),
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
exports.updateHotelController = updateHotelController;
const createPoliciesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { hotel_id, policies } = req.body;
        const newFad = { hotel_id, policies };
        //const payload = req.body as unknown as HotelI;
        console.log("controlador", newFad);
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.savePolicies(newFad),
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
exports.createPoliciesController = createPoliciesController;
const getByIdHotelPoliciesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.getByIdPolicies(id),
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
exports.getByIdHotelPoliciesController = getByIdHotelPoliciesController;
const commentPoliciesHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { comment, state } = req.body;
        const newComment = { comment, state };
        const id = req.params.id;
        const payload = req.body;
        console.log("id", id);
        console.log("payload", newComment);
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.commentPolicies(id, newComment),
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
exports.commentPoliciesHotelController = commentPoliciesHotelController;
const verifyPoliciesController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.verifyPolicies(id, payload),
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
exports.verifyPoliciesController = verifyPoliciesController;
const updatePoliciesHotelController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { hotel_id, policies } = req.body;
        const newFad = { policies };
        const id = req.params.id;
        const payload = req.body;
        console.log("id", id);
        console.log("payload", newFad);
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.updatePoliciesHotel(id, newFad),
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
exports.updatePoliciesHotelController = updatePoliciesHotelController;
const updateStateController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const hotelService = new service_1.HotelService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield hotelService.updateState(id, payload),
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
exports.updateStateController = updateStateController;
