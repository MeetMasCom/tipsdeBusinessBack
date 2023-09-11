import * as dotenv from "dotenv";
import { UserStateI, UserTypeI } from "../interfaces/user.interface";
dotenv.config();

export const HOST: string = process.env.HOST || "0.0.0.0";
export const PORT: string = process.env.PORT || "8000";

export const MONGO_DB_HOST: string = process.env.MONGO_DB_HOST || "0.0.0.0";
export const MONGO_DB_PORT: number = Number(process.env.MONGO_DB_PORT) || 27017;
export const MONGO_DB_DATABASE: string = process.env.MONGO_DB_DATABASE || "";
export const MONGO_DB_USERNAME: string = process.env.MONGO_DB_USERNAME || "";
export const MONGO_DB_PASSWORD: string = process.env.MONGO_DB_PASSWORD || "";

export const SALT_ROUNDS: number = Number(process.env.SALT_ROUNDS) || 10;

export const USER_TYPE: UserTypeI =
  (Number(process.env.USER_TYPE) as UserTypeI) || 0;
export const USER_STATE: UserStateI =
  (Number(process.env.USER_STATE) as UserStateI) || 0;

export const HOST_EMAIL: string = process.env.HOST_EMAIL || "";
export const PORT_EMAIL: number = Number(process.env.PORT_EMAIL) || 465;
export const USER_EMAIL: string = process.env.USER_EMAIL || "";
export const PASS_EMAIL: string = process.env.PASS_EMAIL || "";
export const EMISOR_EMAIL: string = process.env.EMISOR_EMAIL || "";

export const TIME_EXPIRE: number = Number(process.env.TIME_EXPIRE) || 10;

export const KEY_JWT: string = process.env.KEY_JWT || "";
export const TIME_JWT: string = process.env.TIME_JWT || "";
