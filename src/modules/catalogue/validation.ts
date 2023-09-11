import { Joi } from "express-validation";
import { validString } from "../../constants/validations";

export const createCatalogueValidation = {
  body: Joi.object({
    code: validString("code", 255),
    name: validString("name", 255),
    parentCatalogueId: validString("parentCatalogueId", 255).allow(null),
  }),
};

export const getByOptionsValidation = {
  query: Joi.object({
    code: validString("code", 255),
  }),
};
