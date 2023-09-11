
import { ERR_400 } from "../../constants/messages";
import { BalanceCompanyI } from "../../interfaces/balanceCompany";
import { RechargeI } from "../../interfaces/balanceUser";
import { UserService } from "../user/service";
import { BalanceCompanyRepository } from "./repository";

export class BalanceCompanyService {
  private repo: BalanceCompanyRepository;

  constructor() {
    this.repo = new BalanceCompanyRepository();
  }

  getAll = async (): Promise<BalanceCompanyI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getAllRechargs = async (): Promise<RechargeI[]> => {
    try {
      const data = await this.repo.getAllRechargs();
      const userService = new UserService();
      let response: RechargeI[] = [];
      await Promise.all(data.map(async (element) => {
        const result = await userService.getById(element.userId);
        element.user = `${result.firstname} ${result.lastname}`;
        response.push({
          id: element.id,
          user: `${result.userName}`,
          amount: element.amount,
          createdAt: element.createdAt,
          detail: element.detail,
          dir: element.dir,
          hash: element.hash,
          updatedAt: element.updatedAt,
          userId: element.userId,
          walletId: element.walletId,
          status: element.status,
          file: element.file
        })
        return element;
      }));
      return response;
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

}
