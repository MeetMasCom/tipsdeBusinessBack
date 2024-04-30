import { Joi } from "express-validation";
import { validString } from "../../constants/validations";

export const getRecordsTransactionsValidation = {
  query: Joi.object({
    userId: validString("userId", 255),
  }),
};
