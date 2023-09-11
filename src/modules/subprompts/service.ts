import { ERR_400 } from "../../constants/messages";
import { SubpromptsI } from "../../interfaces/subprompts.interface";
import { SubPromptsRepository} from "./repository";


export class SubPromptSService {
  private repo: SubPromptsRepository;

  constructor() {
    this.repo = new SubPromptsRepository();
  }

  save = async (params:SubpromptsI): Promise<any> => {
    try {
       return await this.repo.save(params);
    } catch (error) {            
      throw new Error(error as string);
    }
  };



  getSubPromptsById = async (id: string): Promise<SubpromptsI[]> => {
    try {
      return await this.repo.getSubPromptsById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
 
}


