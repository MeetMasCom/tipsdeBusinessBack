import { ERR_400 } from "../../constants/messages";
import { PromptsI,PromptsPriceI,PromptsUserI} from "../../interfaces/prompts.interface";
import { RecordsTransactionI } from "../../interfaces/recordsTransactions";
import { RecordsTransactionService } from "../recordsTransactions/service";
import { PromptsRepository} from "./repository";


export class PromptsService {
  private repo: PromptsRepository;

  constructor() {
    this.repo = new PromptsRepository();
  }

  save = async (params:PromptsI): Promise<any> => {
    try {
       return await this.repo.save(params);
    } catch (error) {            
      throw new Error(error as string);
    }
  };

  getMyPrompts = async (id: string): Promise<PromptsI[]> => {
    try {
      return await this.repo.getMyPrompts(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getPromptsById = async (id: string): Promise<PromptsI[]> => {
    try {
      return await this.repo.getPromptsById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
 
  getAllPrompts = async (): Promise<PromptsI[]> => {
    try {
      return await this.repo.getAllPrompts();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updatePrompt = async (id: string, payload: PromptsI): Promise<PromptsI[]> => {
    try {
      await this.repo.updatePrompt(id, payload);
      return await this.repo.getPromptsById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  savePrice = async (params:PromptsPriceI): Promise<any> => {
    try {
       return await this.repo.savePrice(params);
    } catch (error) {            
      throw new Error(error as string);
    }
  };

  getPricePrompts = async (): Promise<PromptsI[]> => {
    try {
      return await this.repo.getPricePrompts();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updatePricePrompt = async (id: string, payload: PromptsI): Promise<PromptsI[]> => {
    try {
      await this.repo.updatePricePrompt(id, payload);
      return await this.repo.getPricePrompts();
    } catch (error) {
      throw new Error(error as string);
    }
  };

  buyPromptUser = async (
    params: PromptsUserI
  ): Promise<PromptsUserI> => {
    try {
      const buyPrompts = await this.repo.buyPromptsUser(params);
      const payload: RecordsTransactionI = {
        value: params.value,
        companyValue: 0,
        referValue: 0,
        detail: `Compra paquete prompts `,
        userId: params.userId,
        status: true,
        typeTransaction: 'Compra paquete prompts',
        walletId: '64815307cd63e1f5a8982369'
      }
      await new RecordsTransactionService().save(payload);
       return buyPrompts;
    } catch (error) {
      throw new Error(error as string);
    }
  };


  getPromptsByUser = async (id: string): Promise<PromptsUserI[]> => {
    try {
      return await this.repo.getPromptsByUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}


