"use strict";
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
const jwt = __importStar(require("jsonwebtoken"));
const enviroment_1 = require("../constants/enviroment");
const messages_1 = require("../constants/messages");
const responseHelper_1 = require("./responseHelper");
class JwtHelper {
    /**
     * Create jwt string
     * @param payload
     * @returns string
     */
    create(payload) {
        return jwt.sign({ data: Object.assign({}, payload) }, enviroment_1.KEY_JWT, {
            expiresIn: enviroment_1.TIME_JWT,
        });
    }
    /**
     * Valid token and return payload objetc
     * @param token
     * @returns any
     */
    validate(token) {
        try {
            return jwt.verify(token, enviroment_1.KEY_JWT);
        }
        catch (error) {
            return null;
        }
    }
}
exports.JwtHelper = JwtHelper;
const validateJwtHeader = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const objServiceResponse = {
        res,
        req: req,
        statusCode: 401,
        message: messages_1.ERR_401,
    };
    const jwtHelper = new JwtHelper();
    if (!authHeader)
        return (0, responseHelper_1.serviceResponse)(objServiceResponse);
    const token = authHeader.split("Bearer ")[1];
    const payload = jwtHelper.validate(token);
    if (payload) {
        next();
    }
    else {
        return (0, responseHelper_1.serviceResponse)(objServiceResponse);
    }
};
exports.validateJwtHeader = validateJwtHeader;
