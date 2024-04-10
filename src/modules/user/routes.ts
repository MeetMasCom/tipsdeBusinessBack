import { Router } from "express";
import { validate } from "express-validation";
import { validateJwtHeader } from "../../helpers/jwtHelper";
import upload from "../../libs/multer";
import {
  createUserController,
  getCountUserController,
  getUserController,
  getUserValidateController,
  loginController,
  logoutController,
  otpController,
  recoverPasswordController,
  recoverUsernameController,
  resetPasswordController,
  updateUserAddressController,
  updateUserBasicController,
  updateUserMatchController,
  getByIdUserController,
  getAllUserGenderController,
  searchUsersController,
  getUserOnlineController,
  getUserActiveController,
  updateTypeUserController,
  getVerifyTeacher,  
updateAgreementsController,
updateCupoController,
getCupoLimiteController,
getAllUserController,
getUsersincupo,
getReferUserController
} from "./controler";
import {
  createUserValidation,
  getUserValidateValidation,
  getUserValidation,
  loginUserValidation,
  otpUserValidation,
  recoverPassword,
  recoverUsername,
  resetPassword,
  updateUserAddressValidation,
  updateUserBasicValidation,
  updateUserMatchValidation,
  
} from "./validation";
import { get } from "http";

const userRoutes = Router();

userRoutes.post("/", [validate(createUserValidation)], createUserController);
userRoutes.post("/login", [validate(loginUserValidation)], loginController);
userRoutes.post("/valid-login", [validate(otpUserValidation)], otpController);
userRoutes.post(
  "/logout/:id",
  [ validate(getUserValidation)],
  logoutController
);
userRoutes.put(
  "/basic/:id",
  [validate(updateUserBasicValidation)],
  updateUserBasicController
);

userRoutes.put(
  "/address/:id",
  [validateJwtHeader, validate(updateUserAddressValidation)],
  updateUserAddressController
);

userRoutes.put(
  "/match/:id",
  [ validate(updateUserMatchValidation)],
  updateUserMatchController
);

userRoutes.get("/count", getCountUserController);
userRoutes.get(
  "/validate/:search",
  [validate(getUserValidateValidation)],
  getUserValidateController
);
userRoutes.get(
  "/userD/:id", getUserController
);

userRoutes.post(
  "/recover-username",
  [validate(recoverUsername)],
  recoverUsernameController
);

userRoutes.post(
  "/recover-password",
  [validate(recoverPassword)],
  recoverPasswordController
);

userRoutes.post(
  "/reset-password",
  [validate(resetPassword)],
  resetPasswordController
);
userRoutes.put("/agreements/:id", updateAgreementsController);
userRoutes.get("/userById/:id", getByIdUserController);
userRoutes.get("/userByGender/:id", getAllUserGenderController);
userRoutes.get("/userOnline/:id", getUserOnlineController);
userRoutes.get("/userActive/:id", getUserActiveController);
userRoutes.post("/updateTypeUser/:id", updateTypeUserController);
userRoutes.post("/updateCupo", updateCupoController);
userRoutes.get("/getCupoLimite", getCupoLimiteController);
userRoutes.route("/getVerifyTeacher").get(getVerifyTeacher);
userRoutes.get("/getAllUser", getAllUserController);
userRoutes.get("/getUserSinCupon", getUsersincupo);


userRoutes.get("/refers/:id",  getReferUserController);

userRoutes.post("/searchUsers", searchUsersController);

export default userRoutes;
