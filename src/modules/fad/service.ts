import { ERR_400 } from "../../constants/messages";
import { FadI } from "../../interfaces/fad.interface";
import { FadRepository} from "./repository";


export class FadService {
  private repo: FadRepository;

  constructor() {
    this.repo = new FadRepository();
  }

  save = async (params:FadI): Promise<FadI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getAll = async (): Promise<FadI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getById = async (id: string): Promise<FadI[]> => {
    try {
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdUser = async (id: string): Promise<FadI[]> => {
    try {
      return await this.repo.getByIdUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}


