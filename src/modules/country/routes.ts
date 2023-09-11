import { Router } from "express";
import { getAllCountryController } from "./controler";

const countryRoutes = Router();

countryRoutes.get("/", getAllCountryController);    

export default countryRoutes;
