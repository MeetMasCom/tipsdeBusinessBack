import { ERR_400 } from "../../constants/messages";
import { PromptsI } from "../../interfaces/prompts.interface";
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


}


