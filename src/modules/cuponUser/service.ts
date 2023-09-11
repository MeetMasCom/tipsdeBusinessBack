import { ERR_400 } from "../../constants/messages";
import { StringHelper } from "../../helpers/stringHelper";
import { CuponUserI } from "../../interfaces/cuponUser.interface";
import { CuponUserRepository} from "./repository";


export class CuponUserService {
  private repo: CuponUserRepository;

  constructor() {
    this.repo = new CuponUserRepository();
  }

  save = async (params:CuponUserI): Promise<CuponUserI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getAllSpam = async (): Promise<CuponUserI[]> => {
    try {
      return await this.repo.getAllSpam();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdSpam = async (id: string): Promise<CuponUserI[]> => {
    try {
      return await this.repo.getByIdSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getDetailSpam = async (id: string): Promise<CuponUserI[]> => {
    try {
      return await this.repo.getDetailSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  getUserSpam = async (id: string): Promise<CuponUserI[]> => {
    try {
      return await this.repo.getUserSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateSpam = async (id: string, payload: CuponUserI): Promise<any> => {
    try {
      return await this.repo.updateSpam(id, payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


  updateState = async (id: string, payload: CuponUserI): Promise<any> => {
    try {
      return await this.repo.updateState(id,payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  deleteCupoUser= async (id: string): Promise<any> => {
    try {
      return await this.repo.deleteCupoUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

}


