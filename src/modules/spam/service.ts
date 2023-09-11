import { ERR_400 } from "../../constants/messages";
import { SpamI } from "../../interfaces/spam.interface";
import { SpamRepository} from "./repository";


export class SpamService {
  private repo: SpamRepository;

  constructor() {
    this.repo = new SpamRepository();
  }

  save = async (params:SpamI): Promise<SpamI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getAllSpam = async (): Promise<SpamI[]> => {
    try {
      return await this.repo.getAllSpam();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdSpam = async (id: string): Promise<SpamI[]> => {
    try {
      return await this.repo.getByIdSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getDetailSpam = async (id: string): Promise<SpamI[]> => {
    try {
      return await this.repo.getDetailSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  getUserSpam = async (id: string): Promise<SpamI[]> => {
    try {
      return await this.repo.getUserSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateSpam = async (id: string, payload: SpamI): Promise<any> => {
    try {
      return await this.repo.updateSpam(id, payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };



}


