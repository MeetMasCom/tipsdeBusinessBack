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
exports.getReferUserController = exports.getUsersincupo = exports.getCupoLimiteController = exports.updateCupoController = exports.updateAgreementsController = exports.getVerifyTeacher = exports.updateTypeUserController = exports.getUserActiveController = exports.getUserOnlineController = exports.searchUsersController = exports.updateSocialsNController = exports.getAllUserGenderController = exports.getAllUserController = exports.getByIdUserController = exports.resetPasswordController = exports.recoverPasswordController = exports.recoverUsernameController = exports.logoutController = exports.updateUserMatchController = exports.updateUserAddressController = exports.updateUserBasicController = exports.otpController = exports.loginController = exports.createUserController = exports.getUserValidateController = exports.getCountUserController = exports.getUserController = void 0;
const responseHelper_1 = require("../../helpers/responseHelper");
const service_1 = require("./service");
const getUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getById(id),
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
exports.getUserController = getUserController;
const getCountUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getCountUser(),
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
exports.getCountUserController = getCountUserController;
const getUserValidateController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.params.search;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getUserValidate(search),
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
exports.getUserValidateController = getUserValidateController;
const createUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        //console.log(payload);
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.save(payload),
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
exports.createUserController = createUserController;
const loginController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        //console.log(payload);
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.login(payload),
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
exports.loginController = loginController;
const otpController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.validOpt(payload),
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
exports.otpController = otpController;
const updateUserBasicController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.updateBasic(id, payload),
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
exports.updateUserBasicController = updateUserBasicController;
const updateUserAddressController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.updateAddress(id, payload),
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
exports.updateUserAddressController = updateUserAddressController;
const updateUserMatchController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.updateMatch(id, payload),
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
exports.updateUserMatchController = updateUserMatchController;
const logoutController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.logout(id),
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
exports.logoutController = logoutController;
const recoverUsernameController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mail = req.body.mail;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.recoverUsername(mail),
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
exports.recoverUsernameController = recoverUsernameController;
const recoverPasswordController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.recoverPassword(username),
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
exports.recoverPasswordController = recoverPasswordController;
const resetPasswordController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.resetPassword(payload),
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
exports.resetPasswordController = resetPasswordController;
const getByIdUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getByIdUser(id),
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
exports.getByIdUserController = getByIdUserController;
const getAllUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getAllUser(),
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
exports.getAllUserController = getAllUserController;
const getAllUserGenderController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getUserGender(id),
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
exports.getAllUserGenderController = getAllUserGenderController;
const updateSocialsNController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.updateMatch(id, payload),
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
exports.updateSocialsNController = updateSocialsNController;
const searchUsersController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getAllUserSearch(payload),
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
exports.searchUsersController = searchUsersController;
const getUserOnlineController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getUserOnline(id),
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
exports.getUserOnlineController = getUserOnlineController;
const getUserActiveController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getUserActive(id),
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
exports.getUserActiveController = getUserActiveController;
const updateTypeUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const payload = req.body;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.updateTypeUser(id, payload),
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
exports.updateTypeUserController = updateTypeUserController;
const getVerifyTeacher = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.typeUser;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getVerifyTeacher(id),
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
exports.getVerifyTeacher = getVerifyTeacher;
const updateAgreementsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const agreements = req.body.agreements;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.updateAgreements(id, agreements),
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
exports.updateAgreementsController = updateAgreementsController;
const updateCupoController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.updateCupo(payload),
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
exports.updateCupoController = updateCupoController;
const getCupoLimiteController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getCupoLimite(),
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
exports.getCupoLimiteController = getCupoLimiteController;
const getUsersincupo = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.usersincupo(),
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
exports.getUsersincupo = getUsersincupo;
const getReferUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userService = new service_1.UserService();
        return (0, responseHelper_1.serviceResponse)({
            data: yield userService.getReferUser(id),
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
exports.getReferUserController = getReferUserController;
