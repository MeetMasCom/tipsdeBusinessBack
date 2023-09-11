import { Router } from "express";

import {
  createBilleteraController,
  getAllBilleteraController,
  getByIdBilleteraController,
  getByIdUserBilleteraController,
  updateBilleteraEmpresaEstado
} from "./controler";

const billeteraRoutes = Router();


billeteraRoutes.get("/", getAllBilleteraController);
billeteraRoutes.get("/getByIdBilletera/:id", getByIdBilleteraController);
billeteraRoutes.get("/getByIdUserBilletera/:id", getByIdUserBilleteraController);
billeteraRoutes.post("/createBilleteraE", createBilleteraController);
billeteraRoutes.post("/updateBilleteraE/:id", updateBilleteraEmpresaEstado);


export default billeteraRoutes;
