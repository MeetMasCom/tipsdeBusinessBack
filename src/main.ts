import { HOST, PORT } from "./constants/enviroment";
import { OK_200 } from "./constants/messages";
import cors from "cors";
import express from "express";
import { wrapErrorValidation } from "./helpers/responseHelper";
import { wrapperError } from "./helpers/errorHelper";
import userRoutes from "./modules/user/routes";
import countryRoutes from "./modules/country/routes";
import catalogueRoutes from "./modules/catalogue/routes";
import fadRoutes from "./modules/fad/routes";
import commentRoute from "./modules/comment/routes";
import starRoutes from "./modules/star/routes";
import hotelRoutes from "./modules/hotel/routes";
import roomRoutes from "./modules/room/routes";
import serviceRoutes from "./modules/service/routes";
import typeRoomRoutes from "./modules/typeRoom/routes";
import billeteraRoutes from "./modules/billeteraE/routes";
import billeteraURoutes from "./modules/billeteraU/routes";
import postRoutes from "./modules/post/routes";
import profileRoutes from "./modules/profile/routes";
import likeRoutes from "./modules/like/routes";
import courseRoutes from "./modules/courses/routes";
import packageRoutes from './modules/package/routes';
import adminRoutes  from "./modules/admin/routes";
import spamRoutes  from "./modules/spam/routes";
import notificationRoutes from "./modules/notification/routes";
import adsRoutes from "./modules/ads/routes";
import balanceCompanyRoutes from "./modules/balanceCompany/routes";
import balanceUserRoutes from "./modules/balanceUser/routes";
import recordsTransactionsRoutes from "./modules/recordsTransactions/routes";
import membershipRoutes from "./modules/membership/routes";
import chatsRoutes from "./modules/chat/routes";
import likePostRoutes from "./modules/likePost/routes"; 
import feedbackRoutes from "./modules/feedback/routes";
import moduleRoutes from "./modules/modules/routes";
import topicRoutes from "./modules/topics/routes";
import studentRoutes from "./modules/students/routes";
import subscribeRoute from "./modules/subscribers/routes";
import tipsRoutes from "./modules/tips/routes";
import referencesRoute from "./modules/references/routes";
import promptsRoutes from "./modules/prompts/routes";
import subpromptsRoutes from "./modules/subprompts/routes";
import questionRoutes from "./modules/questions/routes";
import colaboradorRoutes from "./modules/colaboradores/routes"; 
import cuponRoutes from "./modules/cupon/routes";
import cuponUserRoutes from "./modules/cuponUser/routes";
import audiolibroRoutes from "./modules/audiolibro/routes";
import path from "path";
import stripeRoutes from "./modules/stripe/routes";

class MainServer {
  private app!: express.Application;
  private host!: string;
  private port!: number;
  private apiPaths = {
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
    package:"/api/package",
    ads: "/api/ads",
    like: "/api/like",
    membership: "/api/membsership",
    balanceCompany: "/api/balanceCompany",
    balanceUser: "/api/balanceUser",
    recordsTransactions: "/api/recordsTransactions",
    chat: "/api/chat",
    admin: "/api/admin",
    spam:"/api/spam",
    notification:"/api/notification",
    likeP:"/api/likeP",
    feedback:"/api/feedback",
    course:"/api/course",
    module:"/api/module",
    topic:"/api/topic",
    student:"/api/student",
    subscribe:"/api/subscribe",
    tips:"/api/tips",
    references:"/api/references",
    prompts:"/api/prompts",
    subprompts:"/api/subprompts",
    question:"/api/question",
    colaborador:"/api/colaborador",
    cupon:"/api/cupon",
    cuponUser:"/api/cuponUser",
    stripe:"/api/stripe",
    audiolibro:"/api/audiolibro",
  };

  constructor() {
    this.app = express();
    this.middlewares();
    this.port = Number(PORT);
    this.host = HOST;
    this.routes();
  }

  routes() {
    this.app.use(this.apiPaths.user, userRoutes);
    this.app.use(this.apiPaths.country, countryRoutes);
    this.app.use(this.apiPaths.catalogueRoutes, catalogueRoutes);
    this.app.use(this.apiPaths.fad, fadRoutes);
    this.app.use(this.apiPaths.comment, commentRoute);
    this.app.use(this.apiPaths.star, starRoutes);
    this.app.use(this.apiPaths.hotel, hotelRoutes);
    this.app.use(this.apiPaths.room, roomRoutes);
    this.app.use(this.apiPaths.service, serviceRoutes);
    this.app.use(this.apiPaths.type, typeRoomRoutes);
    this.app.use(this.apiPaths.billetera, billeteraRoutes);
    this.app.use(this.apiPaths.billeteraU, billeteraURoutes);
    this.app.use(this.apiPaths.post, postRoutes);
    this.app.use(this.apiPaths.profile, profileRoutes);
    this.app.use(this.apiPaths.package, packageRoutes);
    this.app.use(this.apiPaths.ads, adsRoutes);
    this.app.use(this.apiPaths.like, likeRoutes);
    this.app.use(this.apiPaths.notification, notificationRoutes);
    this.app.use(this.apiPaths.admin, adminRoutes);
    this.app.use(this.apiPaths.spam, spamRoutes);
    this.app.use(this.apiPaths.membership, membershipRoutes);
    this.app.use(this.apiPaths.balanceCompany, balanceCompanyRoutes);
    this.app.use(this.apiPaths.balanceUser, balanceUserRoutes);
    this.app.use(this.apiPaths.recordsTransactions, recordsTransactionsRoutes);
    this.app.use(this.apiPaths.chat, chatsRoutes);
    this.app.use(this.apiPaths.likeP, likePostRoutes);
    this.app.use(this.apiPaths.feedback, feedbackRoutes);
    this.app.use(this.apiPaths.course, courseRoutes);
    this.app.use(this.apiPaths.module, moduleRoutes);
    this.app.use(this.apiPaths.topic, topicRoutes);
    this.app.use(this.apiPaths.student, studentRoutes);
    this.app.use(this.apiPaths.subscribe, subscribeRoute);
    this.app.use(this.apiPaths.tips, tipsRoutes);
    this.app.use(this.apiPaths.references, referencesRoute);
    this.app.use(this.apiPaths.prompts, promptsRoutes);
    this.app.use(this.apiPaths.subprompts, subpromptsRoutes);
    this.app.use(this.apiPaths.question, questionRoutes);
    this.app.use(this.apiPaths.colaborador, colaboradorRoutes);
    this.app.use(this.apiPaths.cupon, cuponRoutes);
    this.app.use(this.apiPaths.cuponUser, cuponUserRoutes);
    this.app.use(this.apiPaths.stripe, stripeRoutes);
    this.app.use(this.apiPaths.audiolibro, audiolibroRoutes);
    this.app.get("/api", (req, res) => {
      return res.json({
        data: "Welcome, but there is nothing to see here.",
        message: OK_200,
      });
    });

    this.app.use("/uploads", express.static(path.resolve("uploads")));

    this.app.use(function (
      err: unknown,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) {
      return wrapperError(err, req, res, next);
    });

    this.app.use(function (
      err: unknown,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) {
      return wrapErrorValidation(err, req, res, next);
    });
  }

  middlewares() {
    //Cors
    this.app.use(cors());
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "1";
    this.app.use(express.json({ limit: "1gb" }));
    this.app.use(express.urlencoded({ limit: "1gb", extended: true }));
  }

  listen() {
    this.app.listen(this.port, this.host, async () => {
      process.env.TZ = "America/Guayaquil";
      console.info(`Server on ${this.host}:${this.port}`);
    });
  }
}

const server = new MainServer();
server.listen();
