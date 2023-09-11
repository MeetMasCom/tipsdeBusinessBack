import { Joi } from "express-validation";

export const validString = (propiedad: string, maximoCaracteres: number) =>
  Joi.string()
    .required()
    .min(1)
    .max(maximoCaracteres)
    .messages({
      "any.required": `"${propiedad}" es requerido`,
      "string.empty": `"${propiedad}" es requerido`,
      "string.base": `"${propiedad}" debe ser texto'`,
      "string.min": `"${propiedad}" debe estar en el rango de 1 a ${maximoCaracteres} caracteres`,
      "string.max": `"${propiedad}" debe estar en el rango de 1 a ${maximoCaracteres} caracteres`,
    });

export const validStringNoRequired = (
  propiedad: string,
  maximoCaracteres: number
) =>
  Joi.string()
    .min(1)
    .max(maximoCaracteres)
    .messages({
      "any.required": `"${propiedad}" es requerido`,
      "string.empty": `"${propiedad}" es requerido`,
      "string.base": `"${propiedad}" debe ser texto'`,
      "string.min": `"${propiedad}" debe estar en el rango de 1 a ${maximoCaracteres} caracteres`,
      "string.max": `"${propiedad}" debe estar en el rango de 1 a ${maximoCaracteres} caracteres`,
    });

export const validStringNoMaxLength = (propiedad: string) =>
  Joi.string()
    .min(1)
    .messages({
      "any.required": `"${propiedad}" es requerido`,
      "string.empty": `"${propiedad}" es requerido`,
      "string.base": `"${propiedad}" debe ser texto'`,
    });

export const validStringEmpty = (propiedad: string, maximoCaracteres: number) =>
  Joi.string()
    .min(1)
    .max(maximoCaracteres)
    .allow("")
    .messages({
      "any.required": `"${propiedad}" es requerido`,
      "string.empty": `"${propiedad}" es requerido`,
      "string.base": `"${propiedad}" debe ser texto'`,
      "string.min": `"${propiedad}" debe estar en el rango de 1 a ${maximoCaracteres} caracteres`,
      "string.max": `"${propiedad}" debe estar en el rango de 1 a ${maximoCaracteres} caracteres`,
    });

export const validNumero = (propiedad: string) =>
  Joi.number()
    .required()
    .integer()
    .min(0)
    .messages({
      "any.required": `"${propiedad}" es requerida`,
      "number.base": `"${propiedad}" debe ser número`,
    });

export const validNumeroEmpty = (nombrePropiedad: string) =>
  Joi.number()
    .integer()
    .min(0)
    .max(99999999999)
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "number.base": `"${nombrePropiedad}" debe ser número`,
      "number.min": `"${nombrePropiedad}" debe ser mayor a 0`,
      "number.max": `"${nombrePropiedad}" debe ser menor o igual a 99999999999`,
    });

export const validFechaDesde = (nombrePropiedad: string) =>
  Joi.date()
    .required()
    .empty()
    .iso()
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "date.empty": `"${nombrePropiedad}" debe ser válido`,
      "date.base": `"${nombrePropiedad}" debe ser fecha`,
      "date.format": `"${nombrePropiedad}" debe ser válido (YYYY-MM-DD)`,
    });

export const validFechaHasta = (
  nombrePropiedad: string,
  nombrePropiedadFechaDesde: string
) =>
  Joi.date()
    .required()
    .empty()
    .iso()
    .min(Joi.ref(nombrePropiedadFechaDesde))
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "date.empty": `"${nombrePropiedad}" debe ser válido`,
      "date.base": `"${nombrePropiedad}" debe ser fecha`,
      "date.format": `"${nombrePropiedadFechaDesde}" debe ser válido (YYYY-MM-DD)`,
      "date.min": `"${nombrePropiedad}" debe ser mayor o igual a "${nombrePropiedadFechaDesde}"`,
    });

export const validEmail = (propiedad: string) =>
  Joi.string()
    .required()
    .email()
    .messages({
      "any.required": `"${propiedad}" es requerido`,
      "string.empty": `"${propiedad}" es requerido`,
      "string.base": `"${propiedad}" debe contener @ y el .'`,
    });

export const validTextoEmpty = (
  nombrePropiedad: string,
  maxCaracteres: number
) =>
  Joi.string()
    .required()
    .regex(/^([a-zA-ZáÁéÉíÍóÓúÚñÑ0-9]+[\s.,;:\-_'#$%&()[\]]*)+$/i)
    .max(maxCaracteres)
    .allow("")
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "string.base": `"${nombrePropiedad}" debe ser texto`,
      "string.max": `"${nombrePropiedad}" debe ingresar máximo ${maxCaracteres} caracteres`,
    });

export const validObjectEmpty = (nombrePropiedad: string, obj: any) =>
  Joi.object(obj)
    .required()
    .allow(null)
    .messages({
      "any:required": `"${nombrePropiedad}" es requerido`,
      "object.base": `"${nombrePropiedad}" debe ser un objeto`,
    });

export const valid12Enteros2Decimales = (valor: any, helper: any) => {
  const regEx = /^(\d{1,12})([.]\d{1,2})?$/i;
  if (!regEx.test(valor)) return helper.error("decimal.invalid");
  return valor;
};

export const customValidDecimal12Ent2Dec = (nombrePropiedad: string) =>
  Joi.number()
    .required()
    .custom(valid12Enteros2Decimales)
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "number.base": `"${nombrePropiedad}" debe ser número`,
      "decimal.invalid": `"${nombrePropiedad}" debe ingresar máximo 12 enteros y 2 decimales`,
    });

export const validArray = (nombrePropiedad: string, obj: any) =>
  Joi.array()
    .required()
    .items(Joi.object(obj))
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "array.base": `"${nombrePropiedad}" debe ser un array`,
    });

export const validArrayNumber = (nombrePropiedad: string) =>
  Joi.array()
    .required()
    .items(Joi.number())
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "array.base": `"${nombrePropiedad}" debe ser un array`,
    });

export const validOpciones = (
  nombrePropiedad: string,
  opciones: string[],
  leyendaDeOpciones: string
) =>
  Joi.string()
    .required()
    .valid(...opciones)
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "any.only": `"${nombrePropiedad}" debe estar entre: ${leyendaDeOpciones}`,
    });

export const validOpcionesNumeros = (
  nombrePropiedad: string,
  opciones: number[],
  leyendaDeOpciones: string
) =>
  Joi.number()
    .required()
    .valid(...opciones)
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "any.only": `"${nombrePropiedad}" debe estar entre: ${leyendaDeOpciones}`,
    });

export const validNumeroNull = (nombrePropiedad: string) =>
  Joi.number()
    .integer()
    .min(0)
    .max(99999999999)
    .allow(null)
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "number.base": `"${nombrePropiedad}" debe ser número`,
      "number.min": `"${nombrePropiedad}" debe ser mayor a 0`,
      "number.max": `"${nombrePropiedad}" debe ser menor o igual a 99999999999`,
    });

export const validCheck = (nombrePropiedad: string) =>
  Joi.number()
    .valid(0, 1)
    .required()
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "number.base": `"${nombrePropiedad}" debe ser número`,
      "any.only": `"${nombrePropiedad}" debe estar entre 0 o 1`,
    });

export const validAnio = (nombrePropiedad: string) =>
  Joi.number()
    .required()
    .integer()
    .min(1920)
    .max(9999)
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "number.base": `"${nombrePropiedad}" debe ser número`,
      "number.min": `"${nombrePropiedad}" debe ser mayor o igual a 1920`,
      "number.max": `"${nombrePropiedad}" debe ser menor o igual a 9999`,
    });

export const validMes = (nombrePropiedad: string) =>
  Joi.number()
    .valid(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
    .required()
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "number.base": `"${nombrePropiedad}" debe ser númerico`,
      "any.only": `"${nombrePropiedad}" debe estar en el rango de 1 - 12`,
    });

export const validFechaNoNull = (nombrePropiedad: string) =>
  Joi.date()
    .required()
    .iso()
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "date.base": `"${nombrePropiedad}" debe ser fecha`,
      "date.format": `"${nombrePropiedad}" debe ser válido (YYYY-MM-DD)`,
    });

export const validFechaNull = (nombrePropiedad: string) =>
  Joi.date()
    .required()
    .iso()
    .allow(null)
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "date.base": `"${nombrePropiedad}" debe ser fecha`,
      "date.format": `"${nombrePropiedad}" debe ser válido (YYYY-MM-DD)`,
    });

export const valid10Enteros4Decimales = (valor: any, helper: any) => {
  const regEx = /^(\d{1,10})([.]\d{1,4})?$/i;
  if (!regEx.test(valor)) return helper.error("decimal.invalid");
  return valor;
};

export const customValidDecimal10Ent4Dec = (nombrePropiedad: string) =>
  Joi.number()
    .required()
    .custom(valid10Enteros4Decimales)
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "number.base": `"${nombrePropiedad}" debe ser número`,
      "decimal.invalid": `"${nombrePropiedad}" debe ingresar máximo 10 enteros y 4 decimales`,
    });

export const customValidDecimal10Ent4DecYMin = (
  nombrePropiedad: string,
  nombrePropiedadMin: string
) =>
  Joi.number()
    .required()
    .custom(valid10Enteros4Decimales)
    .min(Joi.ref(nombrePropiedadMin))
    .messages({
      "any.required": `"${nombrePropiedad}" es requerido`,
      "number.base": `"${nombrePropiedad}" debe ser número`,
      "decimal.invalid": `"${nombrePropiedad}" debe ingresar máximo 10 enteros y 4 decimales`,
      "number.min": `"${nombrePropiedad}" debe ser mayor o igual a "${nombrePropiedadMin}"`,
    });

export const validUrl = (propiedad: string, maximoCaracteres: number) =>
  Joi.string()
    .uri()
    .required()
    .min(1)
    .max(maximoCaracteres)
    .messages({
      "any.required": `"${propiedad}" es requerido`,
      "string.empty": `"${propiedad}" es requerido`,
      "string.base": `"${propiedad}" debe ser url válida'`,
      "string.uri": `"${propiedad}" debe ser una url válida'`,
      "string.min": `"${propiedad}" debe estar en el rango de 1 a ${maximoCaracteres} caracteres`,
      "string.max": `"${propiedad}" debe estar en el rango de 1 a ${maximoCaracteres} caracteres`,
    });
