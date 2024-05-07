"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecordsTransactionsValidation = void 0;
const express_validation_1 = require("express-validation");
const validations_1 = require("../../constants/validations");
exports.getRecordsTransactionsValidation = {
    query: express_validation_1.Joi.object({
        userId: (0, validations_1.validString)("userId", 255),
    }),
};
