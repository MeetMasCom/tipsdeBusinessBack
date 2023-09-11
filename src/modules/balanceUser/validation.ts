import { Joi } from "express-validation";
import { validNumero, validString, validStringEmpty } from "../../constants/validations";

export const getBalanceUserValidation = {
  params: Joi.object({
    id: validString("id", 255),
  }),
};

export const rechargeValidation = {
  body: Joi.object({
    walletId: validString("dir", 255),
    userId: validString("dir", 255),
    dir: validString("dir", 255),
    hash: validString("hash", 255),
    amount: validNumero("amount"),
    detail: validString("detail", 255),
    file: Joi.string().required()
  }),
};


export const reviewRechargeValidation = {
  body: Joi.object({
    id: validString("id", 255),
    remark: validStringEmpty("remark", 255),
    status: validNumero("status"),
    value: validNumero("value"),
  }),
};

