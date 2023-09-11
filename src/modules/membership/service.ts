import moment from "moment";
import { ERR_400 } from "../../constants/messages";
import { MembershipI, MembershipUserI } from "../../interfaces/membership";
import { MembershipRepository } from "./repository";
import {BalanceUserRepository} from "../balanceUser/repository";
import { RecordsTransactionService } from "../recordsTransactions/service";
import { RecordsTransactionI } from "../../interfaces/recordsTransactions";

export class MembershipService {
  private repo: MembershipRepository;
  private repoBalance: BalanceUserRepository;

  constructor() {
    this.repo = new MembershipRepository();
    this.repoBalance= new BalanceUserRepository();
  }

  getAllMembership = async (): Promise<MembershipI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getById = async (id: string): Promise<MembershipI> => {
    try {
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  save = async (params: MembershipI): Promise<MembershipI> => {
    try {
      const validMembership = await this.repo.getByCode(params.code);

      if (validMembership) throw new Error("La membresía ya fue registrada.");

      return await this.repo.save(params);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  update = async (id: string, payload: MembershipI): Promise<MembershipI> => {
    try {
      const validMembsership = await this.repo.getById(id);
      if (!validMembsership) throw new Error("La membresía no existe.");
      await this.repo.update(id, payload);
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  saveMembershipUser = async (
    params: MembershipUserI
  ): Promise<MembershipUserI> => {
    try {
      const updateMembership = await this.repo.getMembershipUser(params.userId);

      if (updateMembership !== null) {
        await this.repo.deleteMembershipUser(updateMembership._id!);
      }

      const buyMembership = await this.repo.saveMembershipUser(params);
      const membership = await this.repo.getById(params.membershipId);
      const descuento = params.descuento /100;
      const payload: RecordsTransactionI = {
        value: membership.price-(membership.price*descuento),
        companyValue: 0,
        referValue: 0,
        detail: `Compra membresía ${membership.name}`,
        userId: params.userId,
        status: true,
        typeTransaction: 'Compra membresía',
        walletId: '64815307cd63e1f5a8982369'
      }
      const valor=membership.price-(membership.price*descuento);
      await new RecordsTransactionService().save(payload);
      
      return buyMembership;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  deleteMembershipUser = async (id: string): Promise<string> => {
    try {
      const validMembsership = await this.repo.getMembershipUser(id);
      if (!validMembsership) throw new Error("La membresía no existe.");
      return await this.repo.deleteMembershipUser(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getMembershipUserById = async (userId: string): Promise<MembershipUserI | null> => {
    try {
      const data = await this.repo.getMembershipUser(userId);

      if (!data) { return null; }
      const validDate = moment(data.createdAt).add(1, 'months');
      const currentDate = moment();

      if (currentDate > validDate) {
        await this.repo.updateMembershipUser(data._id!, {
          membershipId: data.membershipId,
          state: false,
          userId: data.userId,
          descuento:0,
          tiempo:data.tiempo
        })
        return null;
      }

      const membership = await this.repo.getById(data.membershipId);

      return {
        membershipId: data.membershipId,
        state: data.state,
        userId: data.userId,
        createdAt: data.createdAt,
        name: membership.name,
        descuento:data.descuento,
        tiempo:data.tiempo,
      }


    } catch (error) {
      throw new Error(error as string);
    }
  };
}
