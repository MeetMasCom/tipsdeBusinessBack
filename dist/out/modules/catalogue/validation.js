"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByOptionsValidation = exports.createCatalogueValidation = void 0;
var express_validation_1 = require("express-validation");
var validations_1 = require("../../constants/validations");
exports.createCatalogueValidation = {
    body: express_validation_1.Joi.object({
        code: (0, validations_1.validString)("code", 255),
        name: (0, validations_1.validString)("name", 255),
        parentCatalogueId: (0, validations_1.validString)("parentCatalogueId", 255).allow(null),
    }),
};
exports.getByOptionsValidation = {
    query: express_validation_1.Joi.object({
        code: (0, validations_1.validString)("code", 255),
    }),
};
