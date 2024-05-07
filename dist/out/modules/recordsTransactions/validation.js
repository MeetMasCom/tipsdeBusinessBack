"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecordsTransactionsValidation = void 0;
var express_validation_1 = require("express-validation");
var validations_1 = require("../../constants/validations");
exports.getRecordsTransactionsValidation = {
    query: express_validation_1.Joi.object({
        walletId: (0, validations_1.validString)("walletId", 255),
        userId: (0, validations_1.validString)("userId", 255),
    }),
};
