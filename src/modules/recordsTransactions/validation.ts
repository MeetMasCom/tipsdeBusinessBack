import { Joi } from "express-validation";
import { validString } from "../../constants/validations";

export const getRecordsTransactionsValidation = {
  query: Joi.object({
    walletId: validString("walletId", 255),
    userId: validString("userId", 255),
  }),
};
