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
exports.TIME_JWT = exports.KEY_JWT = exports.TIME_EXPIRE = exports.EMISOR_EMAIL = exports.PASS_EMAIL = exports.USER_EMAIL = exports.PORT_EMAIL = exports.HOST_EMAIL = exports.USER_STATE = exports.USER_TYPE = exports.SALT_ROUNDS = exports.MONGO_DB_PASSWORD = exports.MONGO_DB_USERNAME = exports.MONGO_DB_DATABASE = exports.MONGO_DB_PORT = exports.MONGO_DB_HOST = exports.PORT = exports.HOST = void 0;
var dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.HOST = process.env.HOST || "0.0.0.0";
exports.PORT = process.env.PORT || "8000";
exports.MONGO_DB_HOST = process.env.MONGO_DB_HOST || "0.0.0.0";
exports.MONGO_DB_PORT = Number(process.env.MONGO_DB_PORT) || 27017;
exports.MONGO_DB_DATABASE = process.env.MONGO_DB_DATABASE || "";
exports.MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME || "";
exports.MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || "";
exports.SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
exports.USER_TYPE = Number(process.env.USER_TYPE) || 0;
exports.USER_STATE = Number(process.env.USER_STATE) || 0;
exports.HOST_EMAIL = process.env.HOST_EMAIL || "";
exports.PORT_EMAIL = Number(process.env.PORT_EMAIL) || 465;
exports.USER_EMAIL = process.env.USER_EMAIL || "";
exports.PASS_EMAIL = process.env.PASS_EMAIL || "";
exports.EMISOR_EMAIL = process.env.EMISOR_EMAIL || "";
exports.TIME_EXPIRE = Number(process.env.TIME_EXPIRE) || 10;
exports.KEY_JWT = process.env.KEY_JWT || "";
exports.TIME_JWT = process.env.TIME_JWT || "";
