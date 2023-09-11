import { ERR_400 } from "../../constants/messages";
import { ColaboradorI } from "../../interfaces/colaborador.interface";
import { ColaboradorRepository} from "./repository";


export class ColaboradorService {
  private repo: ColaboradorRepository;

  constructor() {
    this.repo = new ColaboradorRepository();
  }

  save = async (params:ColaboradorI): Promise<ColaboradorI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getAllSpam = async (): Promise<ColaboradorI[]> => {
    try {
      return await this.repo.getAllSpam();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdSpam = async (id: string): Promise<ColaboradorI[]> => {
    try {
      return await this.repo.getByIdSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getDetailSpam = async (id: string): Promise<ColaboradorI[]> => {
    try {
      return await this.repo.getDetailSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  getUserSpam = async (id: string): Promise<ColaboradorI[]> => {
    try {
      return await this.repo.getUserSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateSpam = async (id: string, payload: ColaboradorI): Promise<any> => {
    try {
      return await this.repo.updateSpam(id, payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };



}


