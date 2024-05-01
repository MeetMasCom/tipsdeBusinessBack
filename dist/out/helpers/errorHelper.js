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
exports.wrapperError = void 0;
const express_validation_1 = require("express-validation");
const responseHelper_1 = require("./responseHelper");
const wrapperError = (err, _req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    if (["ForbiddenException", "HttpException", "AuthenticationException"].includes(err.constructor.name)) {
        const objServiceResponse = {
            statusCode: err.statusCode,
            data: null,
            res,
            req: _req,
            message: err.constructor.name,
        };
        return (0, responseHelper_1.serviceResponse)(objServiceResponse);
    }
    else if (err instanceof express_validation_1.ValidationError) {
        const message = Object.values(err.details)
            .reduce((a, v) => {
            a.push(...v.map((i) => i.message));
            return a;
        }, [])
            .join(" ");
        const objServiceResponse = {
            statusCode: err.statusCode,
            data: null,
            res,
            req: _req,
            message: message,
        };
        return (0, responseHelper_1.serviceResponse)(objServiceResponse);
    }
    else {
        return res.status(500).json(err);
    }
});
exports.wrapperError = wrapperError;
