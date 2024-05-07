"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validUrl = exports.customValidDecimal10Ent4DecYMin = exports.customValidDecimal10Ent4Dec = exports.valid10Enteros4Decimales = exports.validFechaNull = exports.validFechaNoNull = exports.validMes = exports.validAnio = exports.validCheck = exports.validNumeroNull = exports.validOpcionesNumeros = exports.validOpciones = exports.validArrayNumber = exports.validArray = exports.customValidDecimal12Ent2Dec = exports.valid12Enteros2Decimales = exports.validObjectEmpty = exports.validTextoEmpty = exports.validEmail = exports.validFechaHasta = exports.validFechaDesde = exports.validNumeroEmpty = exports.validNumero = exports.validStringEmpty = exports.validStringNoMaxLength = exports.validStringNoRequired = exports.validString = void 0;
var express_validation_1 = require("express-validation");
var validString = function (propiedad, maximoCaracteres) {
    return express_validation_1.Joi.string()
        .required()
        .min(1)
        .max(maximoCaracteres)
        .messages({
        "any.required": "\"".concat(propiedad, "\" es requerido"),
        "string.empty": "\"".concat(propiedad, "\" es requerido"),
        "string.base": "\"".concat(propiedad, "\" debe ser texto'"),
        "string.min": "\"".concat(propiedad, "\" debe estar en el rango de 1 a ").concat(maximoCaracteres, " caracteres"),
        "string.max": "\"".concat(propiedad, "\" debe estar en el rango de 1 a ").concat(maximoCaracteres, " caracteres"),
    });
};
exports.validString = validString;
var validStringNoRequired = function (propiedad, maximoCaracteres) {
    return express_validation_1.Joi.string()
        .min(1)
        .max(maximoCaracteres)
        .messages({
        "any.required": "\"".concat(propiedad, "\" es requerido"),
        "string.empty": "\"".concat(propiedad, "\" es requerido"),
        "string.base": "\"".concat(propiedad, "\" debe ser texto'"),
        "string.min": "\"".concat(propiedad, "\" debe estar en el rango de 1 a ").concat(maximoCaracteres, " caracteres"),
        "string.max": "\"".concat(propiedad, "\" debe estar en el rango de 1 a ").concat(maximoCaracteres, " caracteres"),
    });
};
exports.validStringNoRequired = validStringNoRequired;
var validStringNoMaxLength = function (propiedad) {
    return express_validation_1.Joi.string()
        .min(1)
        .messages({
        "any.required": "\"".concat(propiedad, "\" es requerido"),
        "string.empty": "\"".concat(propiedad, "\" es requerido"),
        "string.base": "\"".concat(propiedad, "\" debe ser texto'"),
    });
};
exports.validStringNoMaxLength = validStringNoMaxLength;
var validStringEmpty = function (propiedad, maximoCaracteres) {
    return express_validation_1.Joi.string()
        .min(1)
        .max(maximoCaracteres)
        .allow("")
        .messages({
        "any.required": "\"".concat(propiedad, "\" es requerido"),
        "string.empty": "\"".concat(propiedad, "\" es requerido"),
        "string.base": "\"".concat(propiedad, "\" debe ser texto'"),
        "string.min": "\"".concat(propiedad, "\" debe estar en el rango de 1 a ").concat(maximoCaracteres, " caracteres"),
        "string.max": "\"".concat(propiedad, "\" debe estar en el rango de 1 a ").concat(maximoCaracteres, " caracteres"),
    });
};
exports.validStringEmpty = validStringEmpty;
var validNumero = function (propiedad) {
    return express_validation_1.Joi.number()
        .required()
        .integer()
        .min(0)
        .messages({
        "any.required": "\"".concat(propiedad, "\" es requerida"),
        "number.base": "\"".concat(propiedad, "\" debe ser n\u00FAmero"),
    });
};
exports.validNumero = validNumero;
var validNumeroEmpty = function (nombrePropiedad) {
    return express_validation_1.Joi.number()
        .integer()
        .min(0)
        .max(99999999999)
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "number.base": "\"".concat(nombrePropiedad, "\" debe ser n\u00FAmero"),
        "number.min": "\"".concat(nombrePropiedad, "\" debe ser mayor a 0"),
        "number.max": "\"".concat(nombrePropiedad, "\" debe ser menor o igual a 99999999999"),
    });
};
exports.validNumeroEmpty = validNumeroEmpty;
var validFechaDesde = function (nombrePropiedad) {
    return express_validation_1.Joi.date()
        .required()
        .empty()
        .iso()
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "date.empty": "\"".concat(nombrePropiedad, "\" debe ser v\u00E1lido"),
        "date.base": "\"".concat(nombrePropiedad, "\" debe ser fecha"),
        "date.format": "\"".concat(nombrePropiedad, "\" debe ser v\u00E1lido (YYYY-MM-DD)"),
    });
};
exports.validFechaDesde = validFechaDesde;
var validFechaHasta = function (nombrePropiedad, nombrePropiedadFechaDesde) {
    return express_validation_1.Joi.date()
        .required()
        .empty()
        .iso()
        .min(express_validation_1.Joi.ref(nombrePropiedadFechaDesde))
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "date.empty": "\"".concat(nombrePropiedad, "\" debe ser v\u00E1lido"),
        "date.base": "\"".concat(nombrePropiedad, "\" debe ser fecha"),
        "date.format": "\"".concat(nombrePropiedadFechaDesde, "\" debe ser v\u00E1lido (YYYY-MM-DD)"),
        "date.min": "\"".concat(nombrePropiedad, "\" debe ser mayor o igual a \"").concat(nombrePropiedadFechaDesde, "\""),
    });
};
exports.validFechaHasta = validFechaHasta;
var validEmail = function (propiedad) {
    return express_validation_1.Joi.string()
        .required()
        .email()
        .messages({
        "any.required": "\"".concat(propiedad, "\" es requerido"),
        "string.empty": "\"".concat(propiedad, "\" es requerido"),
        "string.base": "\"".concat(propiedad, "\" debe contener @ y el .'"),
    });
};
exports.validEmail = validEmail;
var validTextoEmpty = function (nombrePropiedad, maxCaracteres) {
    return express_validation_1.Joi.string()
        .required()
        .regex(/^([a-zA-ZáÁéÉíÍóÓúÚñÑ0-9]+[\s.,;:\-_'#$%&()[\]]*)+$/i)
        .max(maxCaracteres)
        .allow("")
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "string.base": "\"".concat(nombrePropiedad, "\" debe ser texto"),
        "string.max": "\"".concat(nombrePropiedad, "\" debe ingresar m\u00E1ximo ").concat(maxCaracteres, " caracteres"),
    });
};
exports.validTextoEmpty = validTextoEmpty;
var validObjectEmpty = function (nombrePropiedad, obj) {
    return express_validation_1.Joi.object(obj)
        .required()
        .allow(null)
        .messages({
        "any:required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "object.base": "\"".concat(nombrePropiedad, "\" debe ser un objeto"),
    });
};
exports.validObjectEmpty = validObjectEmpty;
var valid12Enteros2Decimales = function (valor, helper) {
    var regEx = /^(\d{1,12})([.]\d{1,2})?$/i;
    if (!regEx.test(valor))
        return helper.error("decimal.invalid");
    return valor;
};
exports.valid12Enteros2Decimales = valid12Enteros2Decimales;
var customValidDecimal12Ent2Dec = function (nombrePropiedad) {
    return express_validation_1.Joi.number()
        .required()
        .custom(exports.valid12Enteros2Decimales)
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "number.base": "\"".concat(nombrePropiedad, "\" debe ser n\u00FAmero"),
        "decimal.invalid": "\"".concat(nombrePropiedad, "\" debe ingresar m\u00E1ximo 12 enteros y 2 decimales"),
    });
};
exports.customValidDecimal12Ent2Dec = customValidDecimal12Ent2Dec;
var validArray = function (nombrePropiedad, obj) {
    return express_validation_1.Joi.array()
        .required()
        .items(express_validation_1.Joi.object(obj))
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "array.base": "\"".concat(nombrePropiedad, "\" debe ser un array"),
    });
};
exports.validArray = validArray;
var validArrayNumber = function (nombrePropiedad) {
    return express_validation_1.Joi.array()
        .required()
        .items(express_validation_1.Joi.number())
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "array.base": "\"".concat(nombrePropiedad, "\" debe ser un array"),
    });
};
exports.validArrayNumber = validArrayNumber;
var validOpciones = function (nombrePropiedad, opciones, leyendaDeOpciones) {
    var _a;
    return (_a = express_validation_1.Joi.string()
        .required())
        .valid.apply(_a, opciones).messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "any.only": "\"".concat(nombrePropiedad, "\" debe estar entre: ").concat(leyendaDeOpciones),
    });
};
exports.validOpciones = validOpciones;
var validOpcionesNumeros = function (nombrePropiedad, opciones, leyendaDeOpciones) {
    var _a;
    return (_a = express_validation_1.Joi.number()
        .required())
        .valid.apply(_a, opciones).messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "any.only": "\"".concat(nombrePropiedad, "\" debe estar entre: ").concat(leyendaDeOpciones),
    });
};
exports.validOpcionesNumeros = validOpcionesNumeros;
var validNumeroNull = function (nombrePropiedad) {
    return express_validation_1.Joi.number()
        .integer()
        .min(0)
        .max(99999999999)
        .allow(null)
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "number.base": "\"".concat(nombrePropiedad, "\" debe ser n\u00FAmero"),
        "number.min": "\"".concat(nombrePropiedad, "\" debe ser mayor a 0"),
        "number.max": "\"".concat(nombrePropiedad, "\" debe ser menor o igual a 99999999999"),
    });
};
exports.validNumeroNull = validNumeroNull;
var validCheck = function (nombrePropiedad) {
    return express_validation_1.Joi.number()
        .valid(0, 1)
        .required()
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "number.base": "\"".concat(nombrePropiedad, "\" debe ser n\u00FAmero"),
        "any.only": "\"".concat(nombrePropiedad, "\" debe estar entre 0 o 1"),
    });
};
exports.validCheck = validCheck;
var validAnio = function (nombrePropiedad) {
    return express_validation_1.Joi.number()
        .required()
        .integer()
        .min(1920)
        .max(9999)
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "number.base": "\"".concat(nombrePropiedad, "\" debe ser n\u00FAmero"),
        "number.min": "\"".concat(nombrePropiedad, "\" debe ser mayor o igual a 1920"),
        "number.max": "\"".concat(nombrePropiedad, "\" debe ser menor o igual a 9999"),
    });
};
exports.validAnio = validAnio;
var validMes = function (nombrePropiedad) {
    return express_validation_1.Joi.number()
        .valid(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
        .required()
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "number.base": "\"".concat(nombrePropiedad, "\" debe ser n\u00FAmerico"),
        "any.only": "\"".concat(nombrePropiedad, "\" debe estar en el rango de 1 - 12"),
    });
};
exports.validMes = validMes;
var validFechaNoNull = function (nombrePropiedad) {
    return express_validation_1.Joi.date()
        .required()
        .iso()
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "date.base": "\"".concat(nombrePropiedad, "\" debe ser fecha"),
        "date.format": "\"".concat(nombrePropiedad, "\" debe ser v\u00E1lido (YYYY-MM-DD)"),
    });
};
exports.validFechaNoNull = validFechaNoNull;
var validFechaNull = function (nombrePropiedad) {
    return express_validation_1.Joi.date()
        .required()
        .iso()
        .allow(null)
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "date.base": "\"".concat(nombrePropiedad, "\" debe ser fecha"),
        "date.format": "\"".concat(nombrePropiedad, "\" debe ser v\u00E1lido (YYYY-MM-DD)"),
    });
};
exports.validFechaNull = validFechaNull;
var valid10Enteros4Decimales = function (valor, helper) {
    var regEx = /^(\d{1,10})([.]\d{1,4})?$/i;
    if (!regEx.test(valor))
        return helper.error("decimal.invalid");
    return valor;
};
exports.valid10Enteros4Decimales = valid10Enteros4Decimales;
var customValidDecimal10Ent4Dec = function (nombrePropiedad) {
    return express_validation_1.Joi.number()
        .required()
        .custom(exports.valid10Enteros4Decimales)
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "number.base": "\"".concat(nombrePropiedad, "\" debe ser n\u00FAmero"),
        "decimal.invalid": "\"".concat(nombrePropiedad, "\" debe ingresar m\u00E1ximo 10 enteros y 4 decimales"),
    });
};
exports.customValidDecimal10Ent4Dec = customValidDecimal10Ent4Dec;
var customValidDecimal10Ent4DecYMin = function (nombrePropiedad, nombrePropiedadMin) {
    return express_validation_1.Joi.number()
        .required()
        .custom(exports.valid10Enteros4Decimales)
        .min(express_validation_1.Joi.ref(nombrePropiedadMin))
        .messages({
        "any.required": "\"".concat(nombrePropiedad, "\" es requerido"),
        "number.base": "\"".concat(nombrePropiedad, "\" debe ser n\u00FAmero"),
        "decimal.invalid": "\"".concat(nombrePropiedad, "\" debe ingresar m\u00E1ximo 10 enteros y 4 decimales"),
        "number.min": "\"".concat(nombrePropiedad, "\" debe ser mayor o igual a \"").concat(nombrePropiedadMin, "\""),
    });
};
exports.customValidDecimal10Ent4DecYMin = customValidDecimal10Ent4DecYMin;
var validUrl = function (propiedad, maximoCaracteres) {
    return express_validation_1.Joi.string()
        .uri()
        .required()
        .min(1)
        .max(maximoCaracteres)
        .messages({
        "any.required": "\"".concat(propiedad, "\" es requerido"),
        "string.empty": "\"".concat(propiedad, "\" es requerido"),
        "string.base": "\"".concat(propiedad, "\" debe ser url v\u00E1lida'"),
        "string.uri": "\"".concat(propiedad, "\" debe ser una url v\u00E1lida'"),
        "string.min": "\"".concat(propiedad, "\" debe estar en el rango de 1 a ").concat(maximoCaracteres, " caracteres"),
        "string.max": "\"".concat(propiedad, "\" debe estar en el rango de 1 a ").concat(maximoCaracteres, " caracteres"),
    });
};
exports.validUrl = validUrl;
