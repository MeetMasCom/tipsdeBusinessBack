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
exports.deleteMembershipUserController = exports.createMembershipUserController = exports.getMembershipUserController = exports.updateMembershipController = exports.createMembershipController = exports.getMembershipByIdController = exports.getMembershipController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const getMembershipController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const membershipService = new service_1.MembershipService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield membershipService.getAllMembership(),
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
exports.getMembershipController = getMembershipController;
const getMembershipByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const membershipService = new service_1.MembershipService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield membershipService.getById(id),
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
exports.getMembershipByIdController = getMembershipByIdController;
const createMembershipController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const membershipService = new service_1.MembershipService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield membershipService.save(payload),
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
exports.createMembershipController = createMembershipController;
const updateMembershipController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const membershipService = new service_1.MembershipService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield membershipService.update(id, payload),
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
exports.updateMembershipController = updateMembershipController;
const getMembershipUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const membershipService = new service_1.MembershipService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield membershipService.getMembershipUserById(id),
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
exports.getMembershipUserController = getMembershipUserController;
const createMembershipUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const membershipService = new service_1.MembershipService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield membershipService.saveMembershipUser(payload),
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
exports.createMembershipUserController = createMembershipUserController;
const deleteMembershipUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const membershipService = new service_1.MembershipService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield membershipService.deleteMembershipUser(id),
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
exports.deleteMembershipUserController = deleteMembershipUserController;
