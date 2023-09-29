import {
  TIME_EXPIRE,
  USER_STATE,
  USER_TYPE,
} from "../../constants/enviroment";
import { BcryptHelper } from "../../helpers/bcryptHelper";
import EmailHelper from "../../helpers/emailHelper";
import { StringHelper } from "../../helpers/stringHelper";
import { ERR_400, OK_200 } from "../../constants/messages";
import {
  LoginUserI,
  ReferralsI,
  ResetPasswordI,
  UserAuthI,
  UserCountI,
  UserExtraI,
  UserI,
  UserValidOtpI,
} from "../../interfaces/user.interface";
import { UserRepository } from "./repository";
import moment from "moment";
import { JwtHelper } from "../../helpers/jwtHelper";
import { CountryRepository } from "../country/repository";
import { PostI } from "../../interfaces/post.interface";
import { SearchUsers } from "../../interfaces/user.interface";
import { count } from "console";

export class UserService {
  private repo: UserRepository;
  private countryRepo: CountryRepository;

  constructor() {
    this.repo = new UserRepository();
    this.countryRepo = new CountryRepository();
  }

  getById = async (id: string): Promise<UserI> => {
    try {
      const response = await this.repo.getById(id);
      response.password = "xxxxxxxxxxxxxxxxxx";
      const country = await this.countryRepo.getById(response.country!);
      console.log(country);
     // response.country = country.name;
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getUserValidate = async (search: string): Promise<UserI> => {
    try {
      const response = await this.repo.getByEmailOrUserName(search, search);
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getCountUser = async (): Promise<UserCountI> => {
    try {
      const users = await this.repo.getAll();
      const response: UserCountI = {
        total: users.length,
        men: 0,
        woman: 0,
        online: 0,
      };
      users.forEach((user) => {
        if (user.online) response.online++;
        if (user.gender == "M") response.men++;
        if (user.gender == "F") response.woman++;
      });
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  logout = async (id: string): Promise<number> => {
    try {
      const response = await this.repo.online(id, false);
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  save = async (params: UserI): Promise<UserI> => {
    try {
      const bcryptHelper = new BcryptHelper();

      const validUser = await this.repo.getByEmailOrUserName(
        params.email,
        params.userName
      );

      if (validUser)
        throw new Error("El usuario o email ya fueron registrados.");

      params.password = await bcryptHelper.encrypt(params.password!);
      params.state = [USER_STATE];
      params.type = USER_TYPE;
      params.sponsorCode = params.userName;

      params.age =
        new Date().getFullYear() - new Date(params.dateBirth).getFullYear();

      const response = await this.repo.save(params);

      const sponsor = params.sponsor;
      delete params.sponsor;

      if (sponsor != undefined) {
        const userId = (await this.repo.getByEmailOrUserName("", sponsor))
          ._id as string;
    
        const level = (await this.repo.getReferUser(userId)).length + 1;
       
        if (level < 7) {
          const refer: ReferralsI = {
            userId,
            referralsId: response._id!,
            level,
          };
          await this.repo.saveReferUser(refer);
        }
      }

      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  login = async (params: LoginUserI): Promise<UserAuthI> => {
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

      const user: UserI = {
        _id: findUser._id,
        dateBirth: findUser.dateBirth,
        userName: findUser.userName,
        email: findUser.email,
        sponsorCode: findUser.sponsorCode,
        state: findUser.state,
        type: findUser.type,
        agreements: findUser.agreements
      };

      await this.repo.online(findUser._id!, true);

      return { user, token };
    } catch (error) {
      throw new Error(error as string);
    }
  };

  validOpt = async (params: UserValidOtpI): Promise<UserAuthI> => {
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

      const user: UserI = {
        _id: findUser._id,
        dateBirth: findUser.dateBirth,
        userName: findUser.userName,
        email: findUser.email,
        sponsorCode: findUser.sponsorCode,
        state: findUser.state,
        type: findUser.type,
        agreements: findUser.agreements
      };

      await this.repo.online(findUser._id!, true);

      return { user, token };
    } catch (error) {
      throw new Error(error as string);
    }
  };

  updateBasic = async (id: string, payload: UserExtraI): Promise<UserI> => {
    try {
      const validUser = await this.repo.getById(id);
      if (!validUser) throw new Error("El usuario no existe.");
      if (!validUser.state?.includes(1)) validUser.state!.push(1);
      payload = { state: validUser.state, ...payload } as UserI;
      await this.repo.update(id, payload);
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  updateAddress = async (id: string, payload: UserExtraI): Promise<UserI> => {
    try {
      const validUser = await this.repo.getById(id);
      if (!validUser) throw new Error("El usuario no existe.");
      if (!validUser.state?.includes(2)) validUser.state!.push(2);
      payload = { state: validUser.state, ...payload } as UserI;
      await this.repo.update(id, payload);
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  updateMatch = async (id: string, payload: UserExtraI): Promise<UserI> => {
    try {
      
      // const validUserIdentification = await this.repo.getByIdentification(id);
      // if (validUserIdentification)
      //   throw new Error("El número de identificación ya fue registrado.");
       const validUser = await this.repo.getById(id);
       if (!validUser) throw new Error("El usuario no existe.");
      if (!validUser.state?.includes(3)) validUser.state!.push(3);
      payload = { state: validUser.state, ...payload } as UserI;
      await this.repo.update(id, payload);
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  recoverUsername = async (mail: string): Promise<string> => {
    try {
      const emailHelper = new EmailHelper();
      const stringHelper = new StringHelper();

      const validUser = await this.repo.getByEmailOrUserName(mail, "");
      if (!validUser) throw new Error("El usuario no existe.");

      const fullname = `${validUser.firstname != undefined ? validUser.firstname : ""
        } ${validUser.lastname != undefined ? validUser.lastname : ""}`;
      await emailHelper.recoverUsername(fullname, validUser.userName, mail);

      return `Se ha enviado tu usuario al correo ${stringHelper.hideEmail(
        validUser.email
      )}`;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  recoverPassword = async (username: string): Promise<string> => {
    try {
      const emailHelper = new EmailHelper();
      const stringHelper = new StringHelper();

      const validUser = await this.repo.getByEmailOrUserName("", username);
      if (!validUser) throw new Error("El usuario no existe.");

      const userOpt = await this.repo.saveOtp({
        used: false,
        otp: stringHelper.generateRandomSixDigitNumber(),
        userId: validUser._id!,
      });

      await emailHelper.recoverPassword(
        validUser.userName,
        userOpt.otp,
        validUser.email
      );

      return `Se ha enviado un código de verificación al correo ${stringHelper.hideEmail(
        validUser.email
      )}`;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  codigoresetPassword = async (params: ResetPasswordI): Promise<string> => {
    try {
      const bcryptHelper = new BcryptHelper();
      const findUser = await this.repo.getByEmailOrUserName(
        "",
        params.username
      );
      if (!findUser) throw new Error("Usuario no encontrado");

      const otp: UserValidOtpI = {
        otp: params.code,
        userName: params.username,
        userId: findUser._id,
      };

      const opt = await this.repo.validOtp(otp);
      if (!opt) throw new Error("EL Código otp es incorrecto");

      const timeStampOpt = moment(opt.createdAt).format();
      const maxTimeStamp = moment(opt.createdAt)
        .add(TIME_EXPIRE, "minute")
        .format();

      await this.repo.updateOtp(opt._id!, true);

      if (!moment().isBetween(timeStampOpt, maxTimeStamp)) {
        throw new Error("Código de verificación expirado, vuela a intentarlo");
      }

      const password = await bcryptHelper.encrypt(params.password!);

      await this.repo.updatePassword(findUser._id!, password);

      return "Se ha resetado su contraseña con exito.";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  resetPassword = async (params: ResetPasswordI): Promise<string> => {
    try {
      const bcryptHelper = new BcryptHelper();
      const findUser = await this.repo.getByEmailOrUserName(
        "",
        params.username
      );
      if (!findUser) throw new Error("Usuario no encontrado");

      const otp: UserValidOtpI = {
        otp: params.code,
        userName: params.username,
        userId: findUser._id,
      };

      const opt = await this.repo.validOtp(otp);
      if (!opt) throw new Error("EL Código otp es incorrecto");

      const timeStampOpt = moment(opt.createdAt).format();
      const maxTimeStamp = moment(opt.createdAt)
        .add(TIME_EXPIRE, "minute")
        .format();

      await this.repo.updateOtp(opt._id!, true);

      if (!moment().isBetween(timeStampOpt, maxTimeStamp)) {
        throw new Error("Código de verificación expirado, vuela a intentarlo");
      }

      const password = await bcryptHelper.encrypt(params.password!);

      await this.repo.updatePassword(findUser._id!, password);

      return "Se ha resetado su contraseña con exito.";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getByIdUser = async (id: string): Promise<UserI[]> => {
    try {
      return await this.repo.getByIdUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getAllUser = async (): Promise<UserI[]> => {
    try {
      return await this.repo.getAllUser();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getReferUser = async (userId: string): Promise<ReferralsI[]> => {
    try {
      let response: ReferralsI[] = [];
      const data = await this.repo.getReferUser(userId);
      await Promise.all(data.map(async (element) => {
        const result = await new UserRepository().getById(element.referralsId);
        const firstname = result.firstname ?? '------';
        const lastname = result.lastname ?? '------';
        response.push({
          level: element.level,
          user: result.userName,
          name: firstname + ' ' + lastname,
          referralsId: element.referralsId,
          userId: element.userId
        })
        return element;
      }));
      return response;
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


  getUserGender = async (id: string): Promise<UserI[]> => {
    try {
      return await this.repo.getUserGender(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getAllUserSearch = async (body: SearchUsers): Promise<UserI[]> => {
    try {
      return await this.repo.getAllUserSearch(body);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getUserOnline = async (id: string): Promise<UserI[]> => {
    try {
      return await this.repo.getUserOnline(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getUserActive = async (id: string): Promise<UserI[]> => {
    try {
      return await this.repo.getUserActive(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateAgreements = async (id: string, agreements: boolean): Promise<string> => {
    try {
      await this.repo.updateAgreements(id, agreements);
      return OK_200;
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateSocialAgreements = async (id: string, agreements: boolean): Promise<string> => {
    try {
      await this.repo.updateSocialAgreements(id, agreements);
      return OK_200;
    } catch (error) {
      throw new Error(ERR_400);
    }
  };




  updateDNI = async (id: string, payload: UserExtraI): Promise<UserI> => {
    try {
      const validUser = await this.repo.getById(id);
      if (!validUser) throw new Error("El usuario no existe.");
      payload = { state: validUser.state, ...payload } as UserI;
      await this.repo.update(id, payload);
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };


  verifyUser = async (id: string, payload: UserExtraI): Promise<UserI> => {
    try {
      const validUser = await this.repo.getById(id);
      if (!validUser) throw new Error("El usuario no existe.");
      payload = { state: validUser.state, ...payload } as UserI;
      await this.repo.verifyUser(id, payload);
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getUserSocialAgreements = async (): Promise<any> => {
    try {
      return await this.repo.getUserSocialAgreements();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


  updateBalanceRefer = async (userId: string, price: number): Promise<string> => {
    try {
      return OK_200
    } catch (error) {
      throw new Error(error as string);
    }
  };

  updateTypeUser = async (id: string, payload: UserExtraI): Promise<UserI> => {
    try {
      
      // const validUserIdentification = await this.repo.getByIdentification(id);
      // if (validUserIdentification)
      //   throw new Error("El número de identificación ya fue registrado.");
       const validUser = await this.repo.getById(id);
       if (!validUser) throw new Error("El usuario no existe.");
      
      await this.repo.update(id, payload);
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };


  getVerifyTeacher = async (id:string): Promise<UserI[]> => {
    try {
      return await this.repo.getVerifyTeacher(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  
  updateCupo = async (cupo: UserExtraI): Promise<string> => {
    try {
      await this.repo.updateCupo(cupo);
      return OK_200;
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getCupoLimite = async (): Promise<UserI[]> => {
    try {
      return await this.repo.getCupoLimite();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  usersincupo = async (): Promise<UserI[]> => {
    try {
      return await this.repo.usersincupo();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}
