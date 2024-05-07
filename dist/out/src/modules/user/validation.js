"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.recoverPassword = exports.recoverUsername = exports.otpUserValidation = exports.loginUserValidation = exports.updateUserMatchValidation = exports.updateUserAddressValidation = exports.updateUserBasicValidation = exports.createUserValidation = exports.getUserValidateValidation = exports.getUserValidation = void 0;
const express_validation_1 = require("express-validation");
const validations_1 = require("../../constants/validations");
exports.getUserValidation = {
    params: express_validation_1.Joi.object({
        id: (0, validations_1.validString)("id", 255),
    }),
};
exports.getUserValidateValidation = {
    params: express_validation_1.Joi.object({
        search: (0, validations_1.validString)("search", 255),
    }),
};
exports.createUserValidation = {
    body: express_validation_1.Joi.object({
        userName: (0, validations_1.validString)("userName", 255),
        email: (0, validations_1.validString)("email", 255),
        country: (0, validations_1.validString)("country", 255),
        dateBirth: (0, validations_1.validFechaDesde)("dateBirth"),
        password: (0, validations_1.validString)("password", 255),
        terms: express_validation_1.Joi.boolean().required(),
        gender: (0, validations_1.validString)("gender", 255),
        sponsor: (0, validations_1.validStringEmpty)("sponsor", 255)
        //preferences: validString("preferences", 255),
    }),
};
exports.updateUserBasicValidation = {
    params: express_validation_1.Joi.object({
        id: (0, validations_1.validString)("id", 255),
    }),
    body: express_validation_1.Joi.object({
        firstname: (0, validations_1.validString)("firstname", 255),
        lastname: (0, validations_1.validString)("lastname", 255),
        description: (0, validations_1.validString)("description", 255),
        studies: (0, validations_1.validString)("studies", 255),
        motherLanguague: (0, validations_1.validString)("motherLanguague", 255),
        image: express_validation_1.Joi.string().required(),
        journal: (0, validations_1.validString)("journal", 255),
        time_work: (0, validations_1.validString)("time_work", 255),
    }),
};
exports.updateUserAddressValidation = {
    params: express_validation_1.Joi.object({
        id: (0, validations_1.validString)("id", 255),
    }),
    body: express_validation_1.Joi.object({
        identification: (0, validations_1.validString)("identification", 255),
        address: (0, validations_1.validString)("currentResidence", 255),
        primaryStreet: (0, validations_1.validString)("primaryStreet", 255),
        secondaryStreet: (0, validations_1.validString)("secondaryStreet", 255),
        reference: (0, validations_1.validString)("reference", 255),
    }),
};
exports.updateUserMatchValidation = {
    params: express_validation_1.Joi.object({
        id: (0, validations_1.validString)("id", 255),
    }),
    body: express_validation_1.Joi.object({
        //identification: validString("identification", 255),
        currentResidence: (0, validations_1.validString)("currentResidence", 255),
        //gender: validString("gender", 255),
        //weight: validNumero("weight"),
        //height: validNumero("weight"),
        //eyeColor: validString("eyeColor", 255),
        // ethnicity: validString("ethnicity", 255),
        // religion: validString("religion", 255),
        policy: (0, validations_1.validString)("policy", 255),
        languages: express_validation_1.Joi.array(),
        //foods: Joi.array(),
        //hobbies: Joi.array(),
        city: (0, validations_1.validString)("city", 255),
        //tasteOfClothes: Joi.array(),
        //civil_status: validString("civil_status", 255),
        //drink: validString("drink", 255),
        //smoke: validString("smoke", 255),
        //childs: validString("childs", 255),
        //studies: validString("studies", 255),
        //body: validString("body", 255),
        //zodiac_sign: validString("zodiac_sign", 255),
        career: (0, validations_1.validString)("career", 255),
        sport: (0, validations_1.validString)("sport", 255),
    }),
};
exports.loginUserValidation = {
    body: express_validation_1.Joi.object({
        userName: (0, validations_1.validString)("userName", 255),
        password: (0, validations_1.validString)("password", 255),
    }),
};
exports.otpUserValidation = {
    body: express_validation_1.Joi.object({
        userName: (0, validations_1.validString)("userName", 255),
        otp: (0, validations_1.validNumero)("otp"),
    }),
};
exports.recoverUsername = {
    body: express_validation_1.Joi.object({
        mail: (0, validations_1.validString)("mail", 255),
    }),
};
exports.recoverPassword = {
    body: express_validation_1.Joi.object({
        username: (0, validations_1.validString)("username", 255),
    }),
};
exports.resetPassword = {
    body: express_validation_1.Joi.object({
        username: (0, validations_1.validString)("username", 255),
        password: (0, validations_1.validString)("password", 255),
        code: (0, validations_1.validString)("code", 255),
    }),
};
