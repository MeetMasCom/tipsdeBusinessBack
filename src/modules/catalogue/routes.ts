import { Router } from "express";
import { validate } from "express-validation";
import { validateJwtHeader } from "../../helpers/jwtHelper";
import {
  addCatalogueController,
  getAllCatalogueController,
  getOptionsCatalogueController,
} from "./controler";
import {
  createCatalogueValidation,
  getByOptionsValidation,
} from "./validation";

const catalogueRoutes = Router();

catalogueRoutes.get("/", getAllCatalogueController);
catalogueRoutes.get(
  "/options",
  [validate(getByOptionsValidation)],
  getOptionsCatalogueController
);
catalogueRoutes.post(
  "/",
  [validateJwtHeader, validate(createCatalogueValidation)],
  addCatalogueController
);

export default catalogueRoutes;
