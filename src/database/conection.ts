import { ConnectOptions, createConnection } from "mongoose";
import {
  MONGO_DB_DATABASE,
  MONGO_DB_USERNAME,
  MONGO_DB_PASSWORD,
  MONGO_DB_HOST,
  MONGO_DB_PORT,
} from "../constants/enviroment";

export const connectionMongo = async () => {
  try {
    const conectionOptions: ConnectOptions = {
      dbName: MONGO_DB_DATABASE,
      //user: MONGO_DB_USERNAME,
      //pass: MONGO_DB_PASSWORD,
    };
    return createConnection(
      `mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}`,
      conectionOptions
    );
  } catch (error) {
    console.info(error);
    throw error;
  }
};
