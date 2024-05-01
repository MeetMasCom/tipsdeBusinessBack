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
exports.wrapErrorValidation = exports.serviceResponse = void 0;
const express_validation_1 = require("express-validation");
const messages_1 = require("../constants/messages");
/**
 * Create structure for response api rest.
 * @param {ServiceResponseI} objServiceResponse - Api Rest object.
 * @return "Response with structure {"data":any | null, "message": string}"
 */
const serviceResponse = (objServiceResponse) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    objServiceResponse.res.statusCode = (_a = objServiceResponse.statusCode) !== null && _a !== void 0 ? _a : 200;
    if (objServiceResponse.statusCode >= 400 /* CodigosHttpEnum.badRequest */) {
        const data = {
            errorMessage: objServiceResponse.message,
            errorCode: objServiceResponse.res.statusCode,
            url: objServiceResponse.req.originalUrl,
            method: objServiceResponse.req.method,
            params: objServiceResponse.req.params,
            query: objServiceResponse.req.query,
            body: objServiceResponse.req.body,
            headers: objServiceResponse.req["headers"],
        };
    }
    return objServiceResponse.res.json({
        data: (_b = objServiceResponse.data) !== null && _b !== void 0 ? _b : null,
        message: (_c = objServiceResponse.message) !== null && _c !== void 0 ? _c : messages_1.OK_200,
    });
});
exports.serviceResponse = serviceResponse;
/**
 * Wrap para obtener errores de validation (express-validation)
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns
 */
const wrapErrorValidation = (err, _req, res, _) => {
    var _a, _b;
    if (err instanceof express_validation_1.ValidationError) {
        const objServiceResponse = {
            statusCode: err.statusCode,
            data: null,
            res,
            req: _req,
            message: "",
        };
        let msj = [];
        if (err.details.body) {
            msj = (_a = err.details.body) === null || _a === void 0 ? void 0 : _a.map((e) => e.message);
        }
        if (err.details.query) {
            msj = (_b = err.details.query) === null || _b === void 0 ? void 0 : _b.map((e) => e.message);
        }
        msj === null || msj === void 0 ? void 0 : msj.forEach((element) => {
            objServiceResponse.message += element;
        });
        return (0, exports.serviceResponse)(objServiceResponse);
    }
    return res.status(500).json(err);
};
exports.wrapErrorValidation = wrapErrorValidation;
