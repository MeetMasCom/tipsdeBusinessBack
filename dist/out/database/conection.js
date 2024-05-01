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
exports.connectionMongo = void 0;
const mongoose_1 = require("mongoose");
const enviroment_1 = require("../constants/enviroment");
const connectionMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(enviroment_1.MONGO_DB_DATABASE);
    try {
        const conectionOptions = {
            dbName: enviroment_1.MONGO_DB_DATABASE,
            user: enviroment_1.MONGO_DB_USERNAME,
            pass: enviroment_1.MONGO_DB_PASSWORD,
        };
        return (0, mongoose_1.createConnection)(`mongodb://${enviroment_1.MONGO_DB_HOST}:${enviroment_1.MONGO_DB_PORT}`, conectionOptions);
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
var mongoose_1 = require("mongoose");
var enviroment_1 = require("../constants/enviroment");
var connectionMongo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var conectionOptions;
    return __generator(this, function (_a) {
        try {
            conectionOptions = {
                dbName: enviroment_1.MONGO_DB_DATABASE,
                //user: MONGO_DB_USERNAME,
                //pass: MONGO_DB_PASSWORD,
            };
            return [2 /*return*/, (0, mongoose_1.createConnection)("mongodb://".concat(enviroment_1.MONGO_DB_HOST, ":").concat(enviroment_1.MONGO_DB_PORT), conectionOptions)];
        }
        catch (error) {
            console.info(error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.connectionMongo = connectionMongo;
