"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_environment_file_1 = __importDefault(require("./dotenv-environment-file"));
function getUri(options = "") {
    let uri = `mongodb://${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_DATABASE}`;
    if (process.env.MONGO_DB_USERNAME != "" && process.env.MONGO_DB_PASSWORD != "")
        uri = `mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_DATABASE}`;
    if (options)
        uri += `?${options}`;
    return uri;
}
(0, dotenv_environment_file_1.default)();
exports.default = {
    "uri": getUri("authSource=admin"),
    "collection": "migrations",
    "migrationsPath": "./migrations",
    "templatePath": "./migrations/template.ts",
    "autosync": false
};
