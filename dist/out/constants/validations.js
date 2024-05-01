"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validUrl = exports.customValidDecimal10Ent4DecYMin = exports.customValidDecimal10Ent4Dec = exports.valid10Enteros4Decimales = exports.validFechaNull = exports.validFechaNoNull = exports.validMes = exports.validAnio = exports.validCheck = exports.validNumeroNull = exports.validOpcionesNumeros = exports.validOpciones = exports.validArrayNumber = exports.validArray = exports.customValidDecimal12Ent2Dec = exports.valid12Enteros2Decimales = exports.validObjectEmpty = exports.validTextoEmpty = exports.validEmail = exports.validFechaHasta = exports.validFechaDesde = exports.validNumeroEmpty = exports.validNumero = exports.validStringEmpty = exports.validStringNoMaxLength = exports.validStringNoRequired = exports.validString = void 0;
const express_validation_1 = require("express-validation");
const validString = (propiedad, maximoCaracteres) => express_validation_1.Joi.string()
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
exports.validString = validString;
const validStringNoRequired = (propiedad, maximoCaracteres) => express_validation_1.Joi.string()
    .min(1)
    .max(maximoCaracteres)
    .messages({
    "any.required": `"${propiedad}" es requerido`,
    "string.empty": `"${propiedad}" es requerido`,
    "string.base": `"${propiedad}" debe ser texto'`,
    "string.min": `"${propiedad}" debe estar en el rango de 1 a ${maximoCaracteres} caracteres`,
    "string.max": `"${propiedad}" debe estar en el rango de 1 a ${maximoCaracteres} caracteres`,
});
exports.validStringNoRequired = validStringNoRequired;
const validStringNoMaxLength = (propiedad) => express_validation_1.Joi.string()
    .min(1)
    .messages({
    "any.required": `"${propiedad}" es requerido`,
    "string.empty": `"${propiedad}" es requerido`,
    "string.base": `"${propiedad}" debe ser texto'`,
});
exports.validStringNoMaxLength = validStringNoMaxLength;
const validStringEmpty = (propiedad, maximoCaracteres) => express_validation_1.Joi.string()
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
exports.validStringEmpty = validStringEmpty;
const validNumero = (propiedad) => express_validation_1.Joi.number()
    .required()
    .integer()
    .min(0)
    .messages({
    "any.required": `"${propiedad}" es requerida`,
    "number.base": `"${propiedad}" debe ser número`,
});
exports.validNumero = validNumero;
const validNumeroEmpty = (nombrePropiedad) => express_validation_1.Joi.number()
    .integer()
    .min(0)
    .max(99999999999)
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "number.base": `"${nombrePropiedad}" debe ser número`,
    "number.min": `"${nombrePropiedad}" debe ser mayor a 0`,
    "number.max": `"${nombrePropiedad}" debe ser menor o igual a 99999999999`,
});
exports.validNumeroEmpty = validNumeroEmpty;
const validFechaDesde = (nombrePropiedad) => express_validation_1.Joi.date()
    .required()
    .empty()
    .iso()
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "date.empty": `"${nombrePropiedad}" debe ser válido`,
    "date.base": `"${nombrePropiedad}" debe ser fecha`,
    "date.format": `"${nombrePropiedad}" debe ser válido (YYYY-MM-DD)`,
});
exports.validFechaDesde = validFechaDesde;
const validFechaHasta = (nombrePropiedad, nombrePropiedadFechaDesde) => express_validation_1.Joi.date()
    .required()
    .empty()
    .iso()
    .min(express_validation_1.Joi.ref(nombrePropiedadFechaDesde))
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "date.empty": `"${nombrePropiedad}" debe ser válido`,
    "date.base": `"${nombrePropiedad}" debe ser fecha`,
    "date.format": `"${nombrePropiedadFechaDesde}" debe ser válido (YYYY-MM-DD)`,
    "date.min": `"${nombrePropiedad}" debe ser mayor o igual a "${nombrePropiedadFechaDesde}"`,
});
exports.validFechaHasta = validFechaHasta;
const validEmail = (propiedad) => express_validation_1.Joi.string()
    .required()
    .email()
    .messages({
    "any.required": `"${propiedad}" es requerido`,
    "string.empty": `"${propiedad}" es requerido`,
    "string.base": `"${propiedad}" debe contener @ y el .'`,
});
exports.validEmail = validEmail;
const validTextoEmpty = (nombrePropiedad, maxCaracteres) => express_validation_1.Joi.string()
    .required()
    .regex(/^([a-zA-ZáÁéÉíÍóÓúÚñÑ0-9]+[\s.,;:\-_'#$%&()[\]]*)+$/i)
    .max(maxCaracteres)
    .allow("")
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "string.base": `"${nombrePropiedad}" debe ser texto`,
    "string.max": `"${nombrePropiedad}" debe ingresar máximo ${maxCaracteres} caracteres`,
});
exports.validTextoEmpty = validTextoEmpty;
const validObjectEmpty = (nombrePropiedad, obj) => express_validation_1.Joi.object(obj)
    .required()
    .allow(null)
    .messages({
    "any:required": `"${nombrePropiedad}" es requerido`,
    "object.base": `"${nombrePropiedad}" debe ser un objeto`,
});
exports.validObjectEmpty = validObjectEmpty;
const valid12Enteros2Decimales = (valor, helper) => {
    const regEx = /^(\d{1,12})([.]\d{1,2})?$/i;
    if (!regEx.test(valor))
        return helper.error("decimal.invalid");
    return valor;
};
exports.valid12Enteros2Decimales = valid12Enteros2Decimales;
const customValidDecimal12Ent2Dec = (nombrePropiedad) => express_validation_1.Joi.number()
    .required()
    .custom(exports.valid12Enteros2Decimales)
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "number.base": `"${nombrePropiedad}" debe ser número`,
    "decimal.invalid": `"${nombrePropiedad}" debe ingresar máximo 12 enteros y 2 decimales`,
});
exports.customValidDecimal12Ent2Dec = customValidDecimal12Ent2Dec;
const validArray = (nombrePropiedad, obj) => express_validation_1.Joi.array()
    .required()
    .items(express_validation_1.Joi.object(obj))
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "array.base": `"${nombrePropiedad}" debe ser un array`,
});
exports.validArray = validArray;
const validArrayNumber = (nombrePropiedad) => express_validation_1.Joi.array()
    .required()
    .items(express_validation_1.Joi.number())
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "array.base": `"${nombrePropiedad}" debe ser un array`,
});
exports.validArrayNumber = validArrayNumber;
const validOpciones = (nombrePropiedad, opciones, leyendaDeOpciones) => express_validation_1.Joi.string()
    .required()
    .valid(...opciones)
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "any.only": `"${nombrePropiedad}" debe estar entre: ${leyendaDeOpciones}`,
});
exports.validOpciones = validOpciones;
const validOpcionesNumeros = (nombrePropiedad, opciones, leyendaDeOpciones) => express_validation_1.Joi.number()
    .required()
    .valid(...opciones)
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "any.only": `"${nombrePropiedad}" debe estar entre: ${leyendaDeOpciones}`,
});
exports.validOpcionesNumeros = validOpcionesNumeros;
const validNumeroNull = (nombrePropiedad) => express_validation_1.Joi.number()
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
exports.validNumeroNull = validNumeroNull;
const validCheck = (nombrePropiedad) => express_validation_1.Joi.number()
    .valid(0, 1)
    .required()
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "number.base": `"${nombrePropiedad}" debe ser número`,
    "any.only": `"${nombrePropiedad}" debe estar entre 0 o 1`,
});
exports.validCheck = validCheck;
const validAnio = (nombrePropiedad) => express_validation_1.Joi.number()
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
exports.validAnio = validAnio;
const validMes = (nombrePropiedad) => express_validation_1.Joi.number()
    .valid(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
    .required()
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "number.base": `"${nombrePropiedad}" debe ser númerico`,
    "any.only": `"${nombrePropiedad}" debe estar en el rango de 1 - 12`,
});
exports.validMes = validMes;
const validFechaNoNull = (nombrePropiedad) => express_validation_1.Joi.date()
    .required()
    .iso()
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "date.base": `"${nombrePropiedad}" debe ser fecha`,
    "date.format": `"${nombrePropiedad}" debe ser válido (YYYY-MM-DD)`,
});
exports.validFechaNoNull = validFechaNoNull;
const validFechaNull = (nombrePropiedad) => express_validation_1.Joi.date()
    .required()
    .iso()
    .allow(null)
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "date.base": `"${nombrePropiedad}" debe ser fecha`,
    "date.format": `"${nombrePropiedad}" debe ser válido (YYYY-MM-DD)`,
});
exports.validFechaNull = validFechaNull;
const valid10Enteros4Decimales = (valor, helper) => {
    const regEx = /^(\d{1,10})([.]\d{1,4})?$/i;
    if (!regEx.test(valor))
        return helper.error("decimal.invalid");
    return valor;
};
exports.valid10Enteros4Decimales = valid10Enteros4Decimales;
const customValidDecimal10Ent4Dec = (nombrePropiedad) => express_validation_1.Joi.number()
    .required()
    .custom(exports.valid10Enteros4Decimales)
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "number.base": `"${nombrePropiedad}" debe ser número`,
    "decimal.invalid": `"${nombrePropiedad}" debe ingresar máximo 10 enteros y 4 decimales`,
});
exports.customValidDecimal10Ent4Dec = customValidDecimal10Ent4Dec;
const customValidDecimal10Ent4DecYMin = (nombrePropiedad, nombrePropiedadMin) => express_validation_1.Joi.number()
    .required()
    .custom(exports.valid10Enteros4Decimales)
    .min(express_validation_1.Joi.ref(nombrePropiedadMin))
    .messages({
    "any.required": `"${nombrePropiedad}" es requerido`,
    "number.base": `"${nombrePropiedad}" debe ser número`,
    "decimal.invalid": `"${nombrePropiedad}" debe ingresar máximo 10 enteros y 4 decimales`,
    "number.min": `"${nombrePropiedad}" debe ser mayor o igual a "${nombrePropiedadMin}"`,
});
exports.customValidDecimal10Ent4DecYMin = customValidDecimal10Ent4DecYMin;
const validUrl = (propiedad, maximoCaracteres) => express_validation_1.Joi.string()
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
exports.validUrl = validUrl;
