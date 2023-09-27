import { Joi } from "express-validation";
import { validNumero, validString,customValidDecimal12Ent2Dec } from "../../constants/validations";

export const getMembershipValidation = {
  params: Joi.object({
    id: validString("id", 255),
  }),
};

export const createMembershipValidation = {
  body: Joi.object({
    code: validString("code", 255),
    name: validString("name", 255),
    price: validNumero("price"),
    descuento:validNumero("descuento"),
    description: validString("validNumero", 255),
  }),
};

export const updateMembershipValidation = {
  params: Joi.object({
    id: validString("id", 255),
  }),
  body: Joi.object({
    name: validString("name", 255),
    price: customValidDecimal12Ent2Dec("price"),
    description: Joi.string().required(),
    state: Joi.boolean().required(),
  }),
};

export const createMembershipUserValidation = {
  body: Joi.object({
    userId: validString("userId", 255),
    membershipId: validString("membershipId", 255),
    descuento:validNumero("descuento"),
    tiempo:validNumero("descuento"),
  }),
};

