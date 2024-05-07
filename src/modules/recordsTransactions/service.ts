
import { ERR_400 } from "../../constants/messages";
import { RecordsTransactionI } from "../../interfaces/recordsTransactions";
import { RecordsTransactionRepository } from "./repository";

export class RecordsTransactionService {
  private repo: RecordsTransactionRepository;

  constructor() {
    this.repo = new RecordsTransactionRepository();
  }


  getAll = async (): Promise<RecordsTransactionI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByUserId = async (userId: string, walletId: string): Promise<RecordsTransactionI[]> => {
    try {
      return await this.repo.getByUserId(userId, walletId);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  save = async (payload: RecordsTransactionI): Promise<RecordsTransactionI> => {
    try {
      return await this.repo.save(payload);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  update = async (id: string, payload: RecordsTransactionI): Promise<RecordsTransactionI> => {
    try {
      const validRecord = await this.repo.getById(id);
      if (!validRecord) throw new Error("Registro no existe.");
      await this.repo.update(id, payload);
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };


}
