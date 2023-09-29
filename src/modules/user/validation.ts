import { Joi } from "express-validation";
import {
  validFechaDesde,
  validNumero,
  validString,
  validStringEmpty,
} from "../../constants/validations";

export const getUserValidation = {
  params: Joi.object({
    id: validString("id", 255),
  }),
};

export const getUserValidateValidation = {
  params: Joi.object({
    search: validString("search", 255),
  }),
};

export const createUserValidation = {
  body: Joi.object({
    userName: validString("userName", 255),
    email: validString("email", 255),
    country: validString("country", 255),
    dateBirth: validFechaDesde("dateBirth"),
    password: validString("password", 255),
    terms: Joi.boolean().required(),
    gender: validString("gender", 255),
    sponsor: validStringEmpty("sponsor", 255)
    //preferences: validString("preferences", 255),
  }),
};

export const updateUserBasicValidation = {
  params: Joi.object({
    id: validString("id", 255),
  }),
  body: Joi.object({
    firstname: validString("firstname", 255),
    lastname: validString("lastname", 255),
    description: validString("description", 255),
    studies: validString("studies", 255),
    motherLanguague: validString("motherLanguague", 255),
    image: Joi.string().required(),
    journal: validString("journal", 255),
    time_work: validString("time_work", 255),
  }),
};

export const updateUserAddressValidation = {
  params: Joi.object({
    id: validString("id", 255),
  }),
  body: Joi.object({
    identification: validString("identification", 255),
    address: validString("currentResidence", 255),
    primaryStreet: validString("primaryStreet", 255),
    secondaryStreet: validString("secondaryStreet", 255),
    reference: validString("reference", 255),
  }),
};

export const updateUserMatchValidation = {
  params: Joi.object({
    id: validString("id", 255),
  }),
  body: Joi.object({
    //identification: validString("identification", 255),
    currentResidence: validString("currentResidence", 255),
    //gender: validString("gender", 255),
    //weight: validNumero("weight"),
    //height: validNumero("weight"),
    //eyeColor: validString("eyeColor", 255),
   // ethnicity: validString("ethnicity", 255),
   // religion: validString("religion", 255),
    policy: validString("policy", 255),
    languages: Joi.array(),
    //foods: Joi.array(),
    //hobbies: Joi.array(),
    city: validString("city", 255),
    //tasteOfClothes: Joi.array(),
    //civil_status: validString("civil_status", 255),
    //drink: validString("drink", 255),
    //smoke: validString("smoke", 255),
    //childs: validString("childs", 255),
    //studies: validString("studies", 255),
    //body: validString("body", 255),
    //zodiac_sign: validString("zodiac_sign", 255),
    career: validString("career", 255),
    sport: validString("sport", 255),
  }),
};

export const loginUserValidation = {
  body: Joi.object({
    userName: validString("userName", 255),
    password: validString("password", 255),
  }),
};

export const otpUserValidation = {
  body: Joi.object({
    userName: validString("userName", 255),
    otp: validNumero("otp"),
  }),
};

export const recoverUsername = {
  body: Joi.object({
    mail: validString("mail", 255),
  }),
};

export const recoverPassword = {
  body: Joi.object({
    username: validString("username", 255),
  }),
};

export const resetPassword = {
  body: Joi.object({
    username: validString("username", 255),
    password: validString("password", 255),
    code: validString("code", 255),
  }),
};
