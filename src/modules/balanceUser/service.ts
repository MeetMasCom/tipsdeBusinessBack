
import { ERR_400, OK_200 } from "../../constants/messages";
import EmailHelper from "../../helpers/emailHelper";
import { BalanceUserI, RechargeI, RetreatI, ReviewRechargeI, ReviewRetreatI } from "../../interfaces/balanceUser";
import { BilleteraRepository } from "../billeteraE/repository";
import { BilleteraURepository } from "../billeteraU/repository";
import { UserRepository } from "../user/repository";
import { BalanceUserRepository } from "./repository";

export class BalanceUserService {
  private repo: BalanceUserRepository;

  constructor() {
    this.repo = new BalanceUserRepository();
  }


  getAll = async (userId: string): Promise<RechargeI[]> => {
    try {
      return await this.repo.getAllRechargByUserId(userId);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getBalanceUser = async (userId: string): Promise<BalanceUserI[]> => {
    try {
      return [await this.repo.getAllByUserId(userId)];
    } catch (error) {
      throw new Error(ERR_400);
    }
  };



  getByUserId = async (userId: string, walletId: string): Promise<BalanceUserI> => {
    try {
      return await this.repo.getByUserId(userId, walletId);
    } catch (error) {
      throw new Error(error as string);
    }
  };


  update = async (id: string, payload: BalanceUserI): Promise<BalanceUserI> => {
    try {
      let balance: number = 0;
      const validBalanceUser = await this.repo.getById(id);
      if (validBalanceUser) balance = Number(validBalanceUser.balance);
      payload.balance = balance + Number(payload.balance);
      await this.repo.update(id, payload);
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  recharge = async (payload: RechargeI): Promise<string> => {
    try {
      await this.repo.createRecharge(payload);
      return 'Solicitud de recarga enviada...'
    } catch (error) {
      throw new Error(error as string);
    }
  };

  reviewRecharge = async (payload: ReviewRechargeI): Promise<string> => {
    try {
      //console.log(payload);
      const emailHelper = new EmailHelper();
      const recharg = await this.repo.getRechargeById(payload.id);
      const findUser = await new UserRepository().getById(recharg.userId);
      await this.repo.reviewRecharge(payload);

      //aprobado
      if (payload.status == 1) {
        //actualizar saldo 
        const data: BalanceUserI = {
          userId: findUser._id!,
          balance: payload.value,
        }
        await this.update(findUser._id!, data);
      }

      emailHelper.reviewRecharg(
        findUser.userName,
        recharg.hash,
        payload.remark,
        findUser.email,
        payload.status
      );

      return OK_200;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  reviewRetreat = async (payload: ReviewRetreatI): Promise<string> => {
    try {
      const emailHelper = new EmailHelper();
      const retreat = await this.repo.getRetreatById(payload.id);
      const findUser = await new UserRepository().getById(retreat.userId);
      await this.repo.reviewRetreat(payload);

      //aprobado
      if (payload.status == 1) {
        //actualizar saldo 
      }

      emailHelper.reviewRetreat(
        findUser.userName,
        retreat._id!,
        payload.remark,
        findUser.email,
        payload.status,
        payload.file,
        payload.value
      );

      return OK_200;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  retreat = async (payload: RetreatI): Promise<string> => {
    try {
      const userBalance = await this.repo.getAllByUserId(payload.userId);
      if (!userBalance) throw new Error("No tiene saldo para retirar...");

      const walletU = (await new BilleteraURepository().getById(payload.walletId))[0];
      if (!walletU) throw new Error("No tiene información de billetera usuario...");

      const walletE = await new BilleteraRepository().getById(walletU.tipo!);
      if (!walletE) throw new Error("No tiene información de billetera empresa...");

      const user = await new UserRepository().getById(payload.userId);
      if (!user) throw new Error("No tiene información de usuario...");

      if (Number(payload.amount) < Number(walletE.minimo))
        throw new Error("Valor mínimo para retirar es $ " + walletE.minimo + "...");

      switch (user.type) {
        case 0:
          if (Number(payload.amount) > Number(walletE.maxRetiroB))
            throw new Error("Valor máximo para retirar por usuario Bronce es $ " + walletE.maxRetiroB + "...");
          break;
        case 1:
          if (Number(payload.amount) > Number(walletE.maxRetiroP))
            throw new Error("Valor máximo para retirar por usuario Plata es $ " + walletE.maxRetiroP + "...");
          break;
        case 2:
          if (Number(payload.amount) > Number(walletE.maxRetiroO))
            throw new Error("Valor máximo para retirar por usuario Oro es $ " + walletE.maxRetiroO + "...");
          break;
        case 3:
          if (Number(payload.amount) > Number(walletE.maxRetiroD))
            throw new Error("Valor máximo para retirar por usuario Diamante es $ " + walletE.maxRetiroD + "...");
          break;
      }

      if (Number(userBalance.balance) < Number(payload.amount))
        throw new Error("Saldo insuficiente...");

      await this.repo.createRetreat(payload);
      return 'Solicitud de retiro enviada...'
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getAllRetreatByUser = async (userId: string): Promise<RetreatI[]> => {
    try {
      return await this.repo.getAllRetreatByUser(userId);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getAllRetreat = async (): Promise<RetreatI[]> => {
    try {
      const data = await this.repo.getAllRetreat();
      let response: RetreatI[] = [];
      await Promise.all(data.map(async (element) => {
        const user = await new UserRepository().getById(element.userId);
        const walletU = await new BilleteraURepository().getById(element.walletId);
        response.push({
          _id: element._id,
          userId: element.userId,
          userName: user.userName,
          walletId: element.walletId,
          amount: element.amount,
          remark: element.remark,
          file: element.file,
          status: element.status,
          createdAt: element.createdAt,
          updatedAt: element.updatedAt,
          dir: walletU[0].dir,
          detalle: walletU[0].detalle,
          tag: walletU[0].tag

        })
        return element;
      }));

      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  };




  updateBalance = async (Id: string,payload:BalanceUserI): Promise<BalanceUserI> => {
    try {
     await this.repo.update(Id,payload);
     return await this.repo.getById(Id);
    } catch (error) {
      throw new Error(error as string);
    }
  };
}
