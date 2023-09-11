import moment from "moment";
import { ERR_400, OK_200 } from "../../constants/messages";
import EmailHelper from "../../helpers/emailHelper";
import { StringHelper } from "../../helpers/stringHelper";
import { BilleteraUserI, ValidateOtpI } from "../../interfaces/billeteraU.interface";
import { BilleteraRepository } from "../billeteraE/repository";
import { UserRepository } from "../user/repository";
import { BilleteraURepository } from "./repository";
import { TIME_EXPIRE } from "../../constants/enviroment";


export class BilleteraUService {
  private repo: BilleteraURepository;

  constructor() {
    this.repo = new BilleteraURepository();
  }

  save = async (params: BilleteraUserI): Promise<BilleteraUserI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  update = async (id: string, params: BilleteraUserI): Promise<string> => {
    try {
      params.estado = true;
      delete params.tipoWalletC;
      await this.repo.update(id, params);
      return OK_200
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


  getAll = async (): Promise<BilleteraUserI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };



  getById = async (id: string): Promise<BilleteraUserI[]> => {
    try {
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


  getByIdUser = async (id: string): Promise<BilleteraUserI[]> => {
    try {
      const walletU = await this.repo.getByIdUser(id);
      let response: BilleteraUserI[] = [];

      await Promise.all(walletU.map(async (element) => {
        const result = await new BilleteraRepository().getById(element.tipo);
        response.push({
          tipoWalletC: result.alias,
          _id: element._id,
          userId: element.userId,
          detalle: element.detalle,
          dir: element.dir,
          estado: element.estado,
          tipo: element.tipo,
          tag: element.tag,
          alias: element.alias
        })
        return element;
      }));
      return response;
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  createOtp = async (id: string): Promise<string> => {
    try {
      const stringHelper = new StringHelper();
      const emailHelper = new EmailHelper();

      const findUser = await new UserRepository().getById(
        id
      );
      if (!findUser) throw new Error("Creedenciales incorrectas");

      const userOpt = await new UserRepository().saveOtp({
        used: false,
        otp: stringHelper.generateRandomSixDigitNumber(),
        userId: id,
      });

      emailHelper.loginUser(
        findUser.userName,
        userOpt.otp,
        findUser.email
      );
      return `Se ha enviado un código de verificación al correo ${stringHelper.hideEmail(
        findUser.email
      )}`;
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  validOpt = async (data: ValidateOtpI): Promise<string> => {
    try {

      const opt = await new UserRepository().validOtp({
        userId: data.userId,
        otp: Number(data.otp),
        userName: ""
      });

      if (!opt) throw new Error("Creedenciales incorrectas");

      const timeStampOpt = moment(opt.createdAt).format();
      const maxTimeStamp = moment(opt.createdAt)
        .add(TIME_EXPIRE, "minute")
        .format();

      await new UserRepository().updateOtp(opt._id!, true);

      if (!moment().isBetween(timeStampOpt, maxTimeStamp)) {
        throw new Error(
          "Código de verificación expirado, vuela a intentarlo"
        );
      }

      return OK_200;
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


}


