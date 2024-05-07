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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enviroment_1 = require("./constants/enviroment");
var messages_1 = require("./constants/messages");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var responseHelper_1 = require("./helpers/responseHelper");
var errorHelper_1 = require("./helpers/errorHelper");
var routes_1 = __importDefault(require("./modules/user/routes"));
var routes_2 = __importDefault(require("./modules/country/routes"));
var routes_3 = __importDefault(require("./modules/catalogue/routes"));
var routes_4 = __importDefault(require("./modules/fad/routes"));
var routes_5 = __importDefault(require("./modules/comment/routes"));
var routes_6 = __importDefault(require("./modules/star/routes"));
var routes_7 = __importDefault(require("./modules/hotel/routes"));
var routes_8 = __importDefault(require("./modules/room/routes"));
var routes_9 = __importDefault(require("./modules/service/routes"));
var routes_10 = __importDefault(require("./modules/typeRoom/routes"));
var routes_11 = __importDefault(require("./modules/billeteraE/routes"));
var routes_12 = __importDefault(require("./modules/billeteraU/routes"));
var routes_13 = __importDefault(require("./modules/post/routes"));
var routes_14 = __importDefault(require("./modules/profile/routes"));
var routes_15 = __importDefault(require("./modules/like/routes"));
var routes_16 = __importDefault(require("./modules/courses/routes"));
var routes_17 = __importDefault(require("./modules/package/routes"));
var routes_18 = __importDefault(require("./modules/admin/routes"));
var routes_19 = __importDefault(require("./modules/spam/routes"));
var routes_20 = __importDefault(require("./modules/notification/routes"));
var routes_21 = __importDefault(require("./modules/ads/routes"));
var routes_22 = __importDefault(require("./modules/balanceCompany/routes"));
var routes_23 = __importDefault(require("./modules/balanceUser/routes"));
var routes_24 = __importDefault(require("./modules/recordsTransactions/routes"));
var routes_25 = __importDefault(require("./modules/membership/routes"));
var routes_26 = __importDefault(require("./modules/chat/routes"));
var routes_27 = __importDefault(require("./modules/likePost/routes"));
var routes_28 = __importDefault(require("./modules/feedback/routes"));
var routes_29 = __importDefault(require("./modules/modules/routes"));
var routes_30 = __importDefault(require("./modules/topics/routes"));
var routes_31 = __importDefault(require("./modules/students/routes"));
var routes_32 = __importDefault(require("./modules/subscribers/routes"));
var routes_33 = __importDefault(require("./modules/tips/routes"));
var routes_34 = __importDefault(require("./modules/references/routes"));
var routes_35 = __importDefault(require("./modules/prompts/routes"));
var routes_36 = __importDefault(require("./modules/subprompts/routes"));
var routes_37 = __importDefault(require("./modules/questions/routes"));
var routes_38 = __importDefault(require("./modules/colaboradores/routes"));
var routes_39 = __importDefault(require("./modules/cupon/routes"));
var routes_40 = __importDefault(require("./modules/cuponUser/routes"));
var routes_41 = __importDefault(require("./modules/audiolibro/routes"));
var path_1 = __importDefault(require("path"));
var MainServer = /** @class */ (function () {
    function MainServer() {
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
    MainServer.prototype.routes = function () {
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
        this.app.use(this.apiPaths.audiolibro, routes_41.default);
        this.app.get("/api", function (req, res) {
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
    };
    MainServer.prototype.middlewares = function () {
        //Cors
        this.app.use((0, cors_1.default)());
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "1";
        this.app.use(express_1.default.json({ limit: "1gb" }));
        this.app.use(express_1.default.urlencoded({ limit: "1gb", extended: true }));
    };
    MainServer.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, this.host, function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                process.env.TZ = "America/Guayaquil";
                console.info("Server on ".concat(this.host, ":").concat(this.port));
                return [2 /*return*/];
            });
        }); });
    };
    return MainServer;
}());
var server = new MainServer();
server.listen();
