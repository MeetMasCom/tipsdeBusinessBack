import { Router } from "express";
import { validate } from "express-validation";
import {createCommentController,getByIdFadCommentController } from "./controler";

const commentRoute = Router();

commentRoute.get("/commentByIdFad", getByIdFadCommentController);
commentRoute.post("/commentRegister", createCommentController);

export default commentRoute;
