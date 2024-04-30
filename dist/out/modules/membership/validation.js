"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMembershipUserValidation = exports.updateMembershipValidation = exports.createMembershipValidation = exports.getMembershipValidation = void 0;
const express_validation_1 = require("express-validation");
const validations_1 = require("../../constants/validations");
exports.getMembershipValidation = {
    params: express_validation_1.Joi.object({
        id: (0, validations_1.validString)("id", 255),
    }),
};
exports.createMembershipValidation = {
    body: express_validation_1.Joi.object({
        code: (0, validations_1.validString)("code", 255),
        name: (0, validations_1.validString)("name", 255),
        price: (0, validations_1.validNumero)("price"),
        descuento: (0, validations_1.validNumero)("descuento"),
        description: (0, validations_1.validString)("validNumero", 255),
    }),
};
exports.updateMembershipValidation = {
    params: express_validation_1.Joi.object({
        id: (0, validations_1.validString)("id", 255),
    }),
    body: express_validation_1.Joi.object({
        name: (0, validations_1.validString)("name", 255),
        price: (0, validations_1.customValidDecimal12Ent2Dec)("price"),
        description: express_validation_1.Joi.string().required(),
        state: express_validation_1.Joi.boolean().required(),
    }),
};
exports.createMembershipUserValidation = {
    body: express_validation_1.Joi.object({
        userId: (0, validations_1.validString)("userId", 255),
        membershipId: (0, validations_1.validString)("membershipId", 255),
        descuento: (0, validations_1.validNumero)("descuento"),
        tiempo: (0, validations_1.validNumero)("descuento"),
    }),
};
