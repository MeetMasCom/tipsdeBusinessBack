"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRechargeValidation = exports.rechargeValidation = exports.getBalanceUserValidation = void 0;
var express_validation_1 = require("express-validation");
var validations_1 = require("../../constants/validations");
exports.getBalanceUserValidation = {
    params: express_validation_1.Joi.object({
        id: (0, validations_1.validString)("id", 255),
    }),
};
exports.rechargeValidation = {
    body: express_validation_1.Joi.object({
        walletId: (0, validations_1.validString)("dir", 255),
        userId: (0, validations_1.validString)("dir", 255),
        dir: (0, validations_1.validString)("dir", 255),
        hash: (0, validations_1.validString)("hash", 255),
        amount: (0, validations_1.validNumero)("amount"),
        detail: (0, validations_1.validString)("detail", 255),
        file: express_validation_1.Joi.string().required()
    }),
};
exports.reviewRechargeValidation = {
    body: express_validation_1.Joi.object({
        id: (0, validations_1.validString)("id", 255),
        remark: (0, validations_1.validStringEmpty)("remark", 255),
        status: (0, validations_1.validNumero)("status"),
        value: (0, validations_1.validNumero)("value"),
    }),
};
