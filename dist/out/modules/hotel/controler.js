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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStateController = exports.updatePoliciesHotelController = exports.verifyPoliciesController = exports.commentPoliciesHotelController = exports.getByIdHotelPoliciesController = exports.createPoliciesController = exports.updateHotelController = exports.getByIdServicesHotelController = exports.registerServicesHotelController = exports.getHotelsController = exports.getHotelVerifiedController = exports.getHotelNotVerifiedController = exports.commentDeclineHotelController = exports.declineHotelController = exports.verifyHotelController = exports.getByIdUserHotelController = exports.getByIdHotelController = exports.getAllHotelController = exports.createHotelController = void 0;
var responseHelper_1 = require("../../helpers/responseHelper");
var service_1 = require("./service");
var createHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, user_id, name, ruc, address, phone, web, country, city, stars, manager, detail, newFad, payload, hotelService, _b, error_1;
    var _c;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                _a = req.body, user_id = _a.user_id, name = _a.name, ruc = _a.ruc, address = _a.address, phone = _a.phone, web = _a.web, country = _a.country, city = _a.city, stars = _a.stars, manager = _a.manager, detail = _a.detail;
                newFad = { user_id: user_id, name: name, ruc: ruc, address: address, phone: phone, web: web, country: country, city: city, stars: stars, manager: manager, detail: detail, doc: (_d = req.file) === null || _d === void 0 ? void 0 : _d.path };
                payload = req.body;
                console.log("controlador", newFad);
                hotelService = new service_1.HotelService();
                _b = responseHelper_1.serviceResponse;
                _c = {};
                return [4 /*yield*/, hotelService.save(newFad)];
            case 1: return [2 /*return*/, _b.apply(void 0, [(_c.data = _e.sent(),
                        _c.res = resp,
                        _c.req = req,
                        _c)])];
            case 2:
                error_1 = _e.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_1.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createHotelController = createHotelController;
var getAllHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var hotelService, _a, error_2;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.getAll()];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_2 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_2.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllHotelController = getAllHotelController;
var getByIdHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, hotelService, _a, error_3;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.getById(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_3 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_3.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getByIdHotelController = getByIdHotelController;
var getByIdUserHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, hotelService, _a, error_4;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.getByIdUser(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_4 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_4.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getByIdUserHotelController = getByIdUserHotelController;
var verifyHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, hotelService, _a, error_5;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.update(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_5 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_5.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.verifyHotelController = verifyHotelController;
var declineHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, hotelService, _a, error_6;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.decline(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_6 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_6.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.declineHotelController = declineHotelController;
var commentDeclineHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var comment, newComment, id, payload, hotelService, _a, error_7;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                comment = req.body.comment;
                newComment = { comment: comment };
                id = req.params.id;
                payload = req.body;
                console.log("id", id);
                console.log("payload", newComment);
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.commentdecline(id, newComment)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_7 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_7.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.commentDeclineHotelController = commentDeclineHotelController;
var getHotelNotVerifiedController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var hotelService, _a, error_8;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.getHotelNotVerified()];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_8 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_8.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getHotelNotVerifiedController = getHotelNotVerifiedController;
var getHotelVerifiedController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var hotelService, _a, error_9;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.getHotelVerified()];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_9 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_9.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getHotelVerifiedController = getHotelVerifiedController;
var getHotelsController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var hotelService, _a, error_10;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.getHotels()];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_10 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_10.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getHotelsController = getHotelsController;
var registerServicesHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, hotelService, _a, error_11;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.updateServices(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_11 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_11.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.registerServicesHotelController = registerServicesHotelController;
var getByIdServicesHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, hotelService, _a, error_12;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.getByIdServices(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_12 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_12.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getByIdServicesHotelController = getByIdServicesHotelController;
var updateHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, user_id, name, ruc, address, phone, web, country, city, stars, manager, detail, state, newHotel, payload, hotelService, _b, error_13;
    var _c;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, user_id = _a.user_id, name = _a.name, ruc = _a.ruc, address = _a.address, phone = _a.phone, web = _a.web, country = _a.country, city = _a.city, stars = _a.stars, manager = _a.manager, detail = _a.detail, state = _a.state;
                newHotel = { user_id: user_id, name: name, ruc: ruc, address: address, phone: phone, web: web, country: country, city: city, stars: stars, manager: manager, detail: detail, state: state, doc: (_d = req.file) === null || _d === void 0 ? void 0 : _d.path };
                payload = req.body;
                console.log("id", id);
                console.log("newHotel", newHotel);
                hotelService = new service_1.HotelService();
                _b = responseHelper_1.serviceResponse;
                _c = {};
                return [4 /*yield*/, hotelService.updateHotel(id, newHotel)];
            case 1: return [2 /*return*/, _b.apply(void 0, [(_c.data = _e.sent(),
                        _c.res = resp,
                        _c.req = req,
                        _c)])];
            case 2:
                error_13 = _e.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_13.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateHotelController = updateHotelController;
var createPoliciesController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hotel_id, policies, newFad, hotelService, _b, error_14;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                _a = req.body, hotel_id = _a.hotel_id, policies = _a.policies;
                newFad = { hotel_id: hotel_id, policies: policies };
                //const payload = req.body as unknown as HotelI;
                console.log("controlador", newFad);
                hotelService = new service_1.HotelService();
                _b = responseHelper_1.serviceResponse;
                _c = {};
                return [4 /*yield*/, hotelService.savePolicies(newFad)];
            case 1: return [2 /*return*/, _b.apply(void 0, [(_c.data = _d.sent(),
                        _c.res = resp,
                        _c.req = req,
                        _c)])];
            case 2:
                error_14 = _d.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_14.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createPoliciesController = createPoliciesController;
var getByIdHotelPoliciesController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, hotelService, _a, error_15;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.getByIdPolicies(id)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_15 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_15.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getByIdHotelPoliciesController = getByIdHotelPoliciesController;
var commentPoliciesHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, comment, state, newComment, id, payload, hotelService, _b, error_16;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                _a = req.body, comment = _a.comment, state = _a.state;
                newComment = { comment: comment, state: state };
                id = req.params.id;
                payload = req.body;
                console.log("id", id);
                console.log("payload", newComment);
                hotelService = new service_1.HotelService();
                _b = responseHelper_1.serviceResponse;
                _c = {};
                return [4 /*yield*/, hotelService.commentPolicies(id, newComment)];
            case 1: return [2 /*return*/, _b.apply(void 0, [(_c.data = _d.sent(),
                        _c.res = resp,
                        _c.req = req,
                        _c)])];
            case 2:
                error_16 = _d.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_16.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.commentPoliciesHotelController = commentPoliciesHotelController;
var verifyPoliciesController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, hotelService, _a, error_17;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.verifyPolicies(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_17 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_17.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.verifyPoliciesController = verifyPoliciesController;
var updatePoliciesHotelController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hotel_id, policies, newFad, id, payload, hotelService, _b, error_18;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, , 3]);
                _a = req.body, hotel_id = _a.hotel_id, policies = _a.policies;
                newFad = { policies: policies };
                id = req.params.id;
                payload = req.body;
                console.log("id", id);
                console.log("payload", newFad);
                hotelService = new service_1.HotelService();
                _b = responseHelper_1.serviceResponse;
                _c = {};
                return [4 /*yield*/, hotelService.updatePoliciesHotel(id, newFad)];
            case 1: return [2 /*return*/, _b.apply(void 0, [(_c.data = _d.sent(),
                        _c.res = resp,
                        _c.req = req,
                        _c)])];
            case 2:
                error_18 = _d.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_18.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updatePoliciesHotelController = updatePoliciesHotelController;
var updateStateController = function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var id, payload, hotelService, _a, error_19;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                id = req.params.id;
                payload = req.body;
                hotelService = new service_1.HotelService();
                _a = responseHelper_1.serviceResponse;
                _b = {};
                return [4 /*yield*/, hotelService.updateState(id, payload)];
            case 1: return [2 /*return*/, _a.apply(void 0, [(_b.data = _c.sent(),
                        _b.res = resp,
                        _b.req = req,
                        _b)])];
            case 2:
                error_19 = _c.sent();
                return [2 /*return*/, (0, responseHelper_1.serviceResponse)({
                        message: error_19.message,
                        res: resp,
                        statusCode: 400,
                        req: req,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateStateController = updateStateController;
