import { Router } from "express";
import { validateJwtHeader } from "../../helpers/jwtHelper";
import { getAllByUserController, getAllController } from "./controler";
import { validate } from "express-validation";
import { getRecordsTransactionsValidation } from "./validation";

const recordsTransactionsRoutes = Router();

recordsTransactionsRoutes.get("/", [validateJwtHeader], getAllController);
recordsTransactionsRoutes.get("/detail", [validateJwtHeader, validate(getRecordsTransactionsValidation)], getAllByUserController);


export default recordsTransactionsRoutes;
