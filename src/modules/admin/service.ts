import moment from "moment";
import { ERR_400 } from "../../constants/messages";
import { BcryptHelper } from "../../helpers/bcryptHelper";
import EmailHelper from "../../helpers/emailHelper";
import { JwtHelper } from "../../helpers/jwtHelper";
import { StringHelper } from "../../helpers/stringHelper";
import { AdminAuthI, AdminI,LoginAdminI } from "../../interfaces/admin.interface";
import { UserValidOtpI } from "../../interfaces/user.interface";
import { AdminRepository} from "./repository";
import { TIME_EXPIRE } from "../../constants/enviroment";


export class AdminService {
  private repo: AdminRepository;

  constructor() {
    this.repo = new AdminRepository();
  }

  save = async (params:AdminI): Promise<AdminI> => {
    try {
      const bcryptHelper = new BcryptHelper();
      params.password = await bcryptHelper.encrypt(params.password!);
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };



  login = async (params: LoginAdminI): Promise<AdminAuthI> => {
    try {
      const jwtHelper = new JwtHelper();
      const bcryptHelper = new BcryptHelper();
      const stringHelper = new StringHelper();
      const emailHelper = new EmailHelper();
      const findUser = await this.repo.getByEmailOrUserName(
        "",
        params.userName
      );
      if (!findUser) throw new Error("Creedenciales incorrectas");

      const validPassword = await bcryptHelper.compare(
        params.password,
        findUser.password!
      );

      if (!validPassword) throw new Error("Creedenciales incorrectas");

      const userOpt = await this.repo.saveOtp({
        used: false,
        otp: stringHelper.generateRandomSixDigitNumber(),
        userId: findUser._id!,
      });

      emailHelper.loginUser(
        findUser.userName,
        userOpt.otp,
        findUser.email
      );

      const token = jwtHelper.create({
        userId: findUser._id,
        userName: findUser.userName,
        state: findUser.state,
      });

      delete findUser.password;

      const user: AdminI = {
        _id: findUser._id,
        userName: findUser.userName,
        email: findUser.email,
        sponsorCode: findUser.sponsorCode,
        state: findUser.state,
        rol:findUser.rol
      };


      return { user, token };
    } catch (error) {
      throw new Error(error as string);
    }
  };

  validOpt = async (params: UserValidOtpI): Promise<AdminAuthI> => {
    try {
      const jwtHelper = new JwtHelper();
      const findUser = await this.repo.getByEmailOrUserName(
        "",
        params.userName
      );
      if (!findUser) throw new Error("Creedenciales incorrectas");

      params.userId = findUser._id;
      const opt = await this.repo.validOtp(params);
      if (!opt) throw new Error("Creedenciales incorrectas");

      const timeStampOpt = moment(opt.createdAt).format();
      const maxTimeStamp = moment(opt.createdAt)
        .add(TIME_EXPIRE, "minute")
        .format();

      await this.repo.updateOtp(opt._id!, true);

      if (!moment().isBetween(timeStampOpt, maxTimeStamp)) {
        throw new Error(
          "Código de verificación expirado, vuela a iniciar sesión"
        );
      }

      const token = jwtHelper.create({
        userId: findUser._id,
        userName: findUser.userName,
        state: findUser.state,
      });

      delete findUser.password;

      const user: AdminI = {
        _id: findUser._id,
        userName: findUser.userName,
        email: findUser.email,
        sponsorCode: findUser.sponsorCode,
        state: findUser.state,
        rol:findUser.rol
      };


      return { user, token };
    } catch (error) {
      throw new Error(error as string);
    }
  };



  getAll = async (): Promise<AdminI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getById = async (id: string): Promise<AdminI[]> => {
    try {
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByRol = async (id: string): Promise<AdminI[]> => {
    try {
      return await this.repo.getByRol(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdUser = async (id: string): Promise<AdminI[]> => {
    try {
      return await this.repo.getByIdUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateAdmin = async (id: string, payload: AdminI): Promise<any> => {
    try {
      return await this.repo.updateAdmin(id,payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateState = async (id: string, payload: AdminI): Promise<any> => {
    try {
      return await this.repo.updateState(id,payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}


