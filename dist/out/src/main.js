"use strict";
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
const enviroment_1 = require("./constants/enviroment");
const messages_1 = require("./constants/messages");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const responseHelper_1 = require("./helpers/responseHelper");
const errorHelper_1 = require("./helpers/errorHelper");
const routes_1 = __importDefault(require("./modules/user/routes"));
const routes_2 = __importDefault(require("./modules/country/routes"));
const routes_3 = __importDefault(require("./modules/catalogue/routes"));
const routes_4 = __importDefault(require("./modules/fad/routes"));
const routes_5 = __importDefault(require("./modules/comment/routes"));
const routes_6 = __importDefault(require("./modules/star/routes"));
const routes_7 = __importDefault(require("./modules/hotel/routes"));
const routes_8 = __importDefault(require("./modules/room/routes"));
const routes_9 = __importDefault(require("./modules/service/routes"));
const routes_10 = __importDefault(require("./modules/typeRoom/routes"));
const routes_11 = __importDefault(require("./modules/billeteraE/routes"));
const routes_12 = __importDefault(require("./modules/billeteraU/routes"));
const routes_13 = __importDefault(require("./modules/post/routes"));
const routes_14 = __importDefault(require("./modules/profile/routes"));
const routes_15 = __importDefault(require("./modules/like/routes"));
const routes_16 = __importDefault(require("./modules/courses/routes"));
const routes_17 = __importDefault(require("./modules/package/routes"));
const routes_18 = __importDefault(require("./modules/admin/routes"));
const routes_19 = __importDefault(require("./modules/spam/routes"));
const routes_20 = __importDefault(require("./modules/notification/routes"));
const routes_21 = __importDefault(require("./modules/ads/routes"));
const routes_22 = __importDefault(require("./modules/balanceCompany/routes"));
const routes_23 = __importDefault(require("./modules/balanceUser/routes"));
const routes_24 = __importDefault(require("./modules/recordsTransactions/routes"));
const routes_25 = __importDefault(require("./modules/membership/routes"));
const routes_26 = __importDefault(require("./modules/chat/routes"));
const routes_27 = __importDefault(require("./modules/likePost/routes"));
const routes_28 = __importDefault(require("./modules/feedback/routes"));
const routes_29 = __importDefault(require("./modules/modules/routes"));
const routes_30 = __importDefault(require("./modules/topics/routes"));
const routes_31 = __importDefault(require("./modules/students/routes"));
const routes_32 = __importDefault(require("./modules/subscribers/routes"));
const routes_33 = __importDefault(require("./modules/tips/routes"));
const routes_34 = __importDefault(require("./modules/references/routes"));
const routes_35 = __importDefault(require("./modules/prompts/routes"));
const routes_36 = __importDefault(require("./modules/subprompts/routes"));
const routes_37 = __importDefault(require("./modules/questions/routes"));
const routes_38 = __importDefault(require("./modules/colaboradores/routes"));
const routes_39 = __importDefault(require("./modules/cupon/routes"));
const routes_40 = __importDefault(require("./modules/cuponUser/routes"));
const routes_41 = __importDefault(require("./modules/audiolibro/routes"));
const path_1 = __importDefault(require("path"));
const routes_42 = __importDefault(require("./modules/stripe/routes"));
class MainServer {
    constructor() {
        this.apiPaths = {
            user: "/api/user",
            country: "/api/country",
            catalogueRoutes: "/api/catalogue",
            fad: "/api/fad",
            comment: "/api/comment",
            star: "/api/star",
            hotel: "/api/hotel",
            room: "/api/room",
            service: "/api/service",
            type: "/api/type",
            billetera: "/api/billetera",
            billeteraU: "/api/billeteraU",
            post: "/api/post",
            profile: "/api/profile",
            package: "/api/package",
            ads: "/api/ads",
            like: "/api/like",
            membership: "/api/membsership",
            balanceCompany: "/api/balanceCompany",
            balanceUser: "/api/balanceUser",
            recordsTransactions: "/api/recordsTransactions",
            chat: "/api/chat",
            admin: "/api/admin",
            spam: "/api/spam",
            notification: "/api/notification",
            likeP: "/api/likeP",
            feedback: "/api/feedback",
            course: "/api/course",
            module: "/api/module",
            topic: "/api/topic",
            student: "/api/student",
            subscribe: "/api/subscribe",
            tips: "/api/tips",
            references: "/api/references",
            prompts: "/api/prompts",
            subprompts: "/api/subprompts",
            question: "/api/question",
            colaborador: "/api/colaborador",
            cupon: "/api/cupon",
            cuponUser: "/api/cuponUser",
            stripe: "/api/stripe",
            audiolibro: "/api/audiolibro",
        };
        this.app = (0, express_1.default)();
        this.middlewares();
        this.port = Number(enviroment_1.PORT);
        this.host = enviroment_1.HOST;
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.user, routes_1.default);
        this.app.use(this.apiPaths.country, routes_2.default);
        this.app.use(this.apiPaths.catalogueRoutes, routes_3.default);
        this.app.use(this.apiPaths.fad, routes_4.default);
        this.app.use(this.apiPaths.comment, routes_5.default);
        this.app.use(this.apiPaths.star, routes_6.default);
        this.app.use(this.apiPaths.hotel, routes_7.default);
        this.app.use(this.apiPaths.room, routes_8.default);
        this.app.use(this.apiPaths.service, routes_9.default);
        this.app.use(this.apiPaths.type, routes_10.default);
        this.app.use(this.apiPaths.billetera, routes_11.default);
        this.app.use(this.apiPaths.billeteraU, routes_12.default);
        this.app.use(this.apiPaths.post, routes_13.default);
        this.app.use(this.apiPaths.profile, routes_14.default);
        this.app.use(this.apiPaths.package, routes_17.default);
        this.app.use(this.apiPaths.ads, routes_21.default);
        this.app.use(this.apiPaths.like, routes_15.default);
        this.app.use(this.apiPaths.notification, routes_20.default);
        this.app.use(this.apiPaths.admin, routes_18.default);
        this.app.use(this.apiPaths.spam, routes_19.default);
        this.app.use(this.apiPaths.membership, routes_25.default);
        this.app.use(this.apiPaths.balanceCompany, routes_22.default);
        this.app.use(this.apiPaths.balanceUser, routes_23.default);
        this.app.use(this.apiPaths.recordsTransactions, routes_24.default);
        this.app.use(this.apiPaths.chat, routes_26.default);
        this.app.use(this.apiPaths.likeP, routes_27.default);
        this.app.use(this.apiPaths.feedback, routes_28.default);
        this.app.use(this.apiPaths.course, routes_16.default);
        this.app.use(this.apiPaths.module, routes_29.default);
        this.app.use(this.apiPaths.topic, routes_30.default);
        this.app.use(this.apiPaths.student, routes_31.default);
        this.app.use(this.apiPaths.subscribe, routes_32.default);
        this.app.use(this.apiPaths.tips, routes_33.default);
        this.app.use(this.apiPaths.references, routes_34.default);
        this.app.use(this.apiPaths.prompts, routes_35.default);
        this.app.use(this.apiPaths.subprompts, routes_36.default);
        this.app.use(this.apiPaths.question, routes_37.default);
        this.app.use(this.apiPaths.colaborador, routes_38.default);
        this.app.use(this.apiPaths.cupon, routes_39.default);
        this.app.use(this.apiPaths.cuponUser, routes_40.default);
        this.app.use(this.apiPaths.stripe, routes_42.default);
        this.app.use(this.apiPaths.audiolibro, routes_41.default);
        this.app.get("/api", (req, res) => {
            return res.json({
                data: "Welcome, but there is nothing to see here.",
                message: messages_1.OK_200,
            });
        });
        this.app.use("/uploads", express_1.default.static(path_1.default.resolve("uploads")));
        this.app.use(function (err, req, res, next) {
            return (0, errorHelper_1.wrapperError)(err, req, res, next);
        });
        this.app.use(function (err, req, res, next) {
            return (0, responseHelper_1.wrapErrorValidation)(err, req, res, next);
        });
    }
    middlewares() {
        //Cors
        this.app.use((0, cors_1.default)());
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "1";
        this.app.use(express_1.default.json({ limit: "1gb" }));
        this.app.use(express_1.default.urlencoded({ limit: "1gb", extended: true }));
    }
    listen() {
        this.app.listen(this.port, this.host, () => __awaiter(this, void 0, void 0, function* () {
            process.env.TZ = "America/Guayaquil";
            console.info(`Server on ${this.host}:${this.port}`);
        }));
    }
}
const server = new MainServer();
server.listen();
