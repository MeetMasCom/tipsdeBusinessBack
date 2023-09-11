import { ObjectId } from "mongoose";
import { ERR_400, OK_200 } from "../../constants/messages";
import { TipsI } from "../../interfaces/tips.interface";
import { TipsRepository} from "./repository";


export class TipsService {
  private repo: TipsRepository;

  constructor() {
    this.repo = new TipsRepository();
  }

   
  saveTips = async (params:TipsI): Promise<TipsI> => {
    try {
      return await this.repo.saveTips(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  
  getTipsByIdUser = async (id: string): Promise<TipsI[]> => {
    try {
      return await this.repo.getTipsByIdUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getTipsById = async (id: string): Promise<TipsI[]> => {
    try {
      return await this.repo.getTipsById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getAllTips = async (): Promise<TipsI[]> => {
    try {
      return await this.repo.getAllTips();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
 
  updateTips = async (id: string, params: TipsI): Promise<string> => {
    try {
      await this.repo.updateTips(id, params);
      return OK_200
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


}


