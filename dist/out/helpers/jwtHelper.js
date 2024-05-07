"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJwtHeader = exports.JwtHelper = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var enviroment_1 = require("../constants/enviroment");
var messages_1 = require("../constants/messages");
var responseHelper_1 = require("./responseHelper");
var JwtHelper = /** @class */ (function () {
    function JwtHelper() {
    }
    /**
     * Create jwt string
     * @param payload
     * @returns string
     */
    JwtHelper.prototype.create = function (payload) {
        return jwt.sign({ data: __assign({}, payload) }, enviroment_1.KEY_JWT, {
            expiresIn: enviroment_1.TIME_JWT,
        });
    };
    /**
     * Valid token and return payload objetc
     * @param token
     * @returns any
     */
    JwtHelper.prototype.validate = function (token) {
        try {
            return jwt.verify(token, enviroment_1.KEY_JWT);
        }
        catch (error) {
            return null;
        }
    };
    return JwtHelper;
}());
exports.JwtHelper = JwtHelper;
var validateJwtHeader = function (req, res, next) {
    var authHeader = req.headers["authorization"];
    var objServiceResponse = {
        res: res,
        req: req,
        statusCode: 401,
        message: messages_1.ERR_401,
    };
    var jwtHelper = new JwtHelper();
    if (!authHeader)
        return (0, responseHelper_1.serviceResponse)(objServiceResponse);
    var token = authHeader.split("Bearer ")[1];
    var payload = jwtHelper.validate(token);
    if (payload) {
        next();
    }
    else {
        return (0, responseHelper_1.serviceResponse)(objServiceResponse);
    }
};
exports.validateJwtHeader = validateJwtHeader;
