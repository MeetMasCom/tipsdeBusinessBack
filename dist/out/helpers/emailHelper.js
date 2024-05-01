"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
const nodemailer_express_handlebars_1 = __importDefault(require("nodemailer-express-handlebars"));
const enviroment_1 = require("../constants/enviroment");
class EmailHelper {
    constructor() {
        this.loginUser = (fullName, code, email) => {
            const result = this.sendEmailTemplate("Iniciar Sesión", null, "user_login", {
                fullName,
                code,
                email,
            })
                .then(() => __awaiter(this, void 0, void 0, function* () {
                return "Exito";
            }))
                .catch((err) => __awaiter(this, void 0, void 0, function* () {
                return err;
            }));
            return result;
        };
        this.recoverUsername = (fullName, username, email) => {
            const result = this.sendEmailTemplate("Recuperar Usuario", null, "recover_username", {
                fullName,
                username,
                email,
            })
                .then(() => __awaiter(this, void 0, void 0, function* () {
                return "Exito";
            }))
                .catch((err) => __awaiter(this, void 0, void 0, function* () {
                return err;
            }));
            return result;
        };
        this.recoverPassword = (fullName, code, email) => {
            const result = this.sendEmailTemplate("Recuperar Contraseña", null, "recover_password", {
                fullName,
                code,
                email,
            })
                .then(() => __awaiter(this, void 0, void 0, function* () {
                return "Exito";
            }))
                .catch((err) => __awaiter(this, void 0, void 0, function* () {
                return err;
            }));
            return result;
        };
        this.reviewRecharg = (fullName, code, remark, email, status) => {
            const result = this.sendEmailTemplate("Revisión recarga", null, "review_recharg", {
                fullName,
                code,
                remark,
                email,
                status: status == 1 ? 'Aprobada' : 'Rechazado'
            })
                .then(() => __awaiter(this, void 0, void 0, function* () {
                return "Exito";
            }))
                .catch((err) => __awaiter(this, void 0, void 0, function* () {
                return err;
            }));
            return result;
        };
        this.reviewRetreat = (fullName, code, remark, email, status, photo, amount) => {
            const result = this.sendEmailTemplate("Revisión retiro", null, "review_retreat", {
                fullName,
                code,
                remark,
                email,
                status: status == 1 ? 'Aprobada' : 'Rechazado',
                photo,
                amount
            })
                .then(() => __awaiter(this, void 0, void 0, function* () {
                return "Exito";
            }))
                .catch((err) => __awaiter(this, void 0, void 0, function* () {
                return err;
            }));
            return result;
        };
        this.nodemailerConfig = {
            host: enviroment_1.HOST_EMAIL,
            port: Number(enviroment_1.PORT_EMAIL),
            secure: true,
            auth: {
                user: enviroment_1.USER_EMAIL,
                pass: enviroment_1.PASS_EMAIL,
            },
        };
        this.nodemailer = nodemailer.createTransport(this.nodemailerConfig);
        this.nodemailer.use("compile", (0, nodemailer_express_handlebars_1.default)({
            viewEngine: {
                extname: ".hbs",
                defaultLayout: "main",
                layoutsDir: "views/layouts",
                partialsDir: "views/partials",
            },
            extName: ".hbs",
            viewPath: "views",
        }));
    }
    sendEmailTemplate(titulo, attachments, templateName, contexts) {
        return new Promise((resolve, reject) => {
            const mailOpciones = {
                from: enviroment_1.EMISOR_EMAIL,
                to: contexts.email,
                subject: titulo,
                attachments,
                template: templateName,
                context: contexts,
            };
            this.nodemailer.sendMail(mailOpciones, (error) => {
                if (error)
                    reject(error.message);
                resolve(true);
            });
        });
    }
}
exports.default = EmailHelper;
