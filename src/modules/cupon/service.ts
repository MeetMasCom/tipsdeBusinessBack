import { ERR_400 } from "../../constants/messages";
import { StringHelper } from "../../helpers/stringHelper";
import { CuponI } from "../../interfaces/cupon.interface";
import { CuponRepository} from "./repository";


export class CuponService {
  private repo: CuponRepository;

  constructor() {
    this.repo = new CuponRepository();
  }

  save = async (params:CuponI): Promise<CuponI> => {
    try {
      const stringHelper = new StringHelper();
      const codigo= stringHelper.generateRandomSixDigitNumber();
      params.codigo=codigo;
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getAllSpam = async (): Promise<CuponI[]> => {
    try {
      return await this.repo.getAllSpam();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdSpam = async (id: string): Promise<CuponI[]> => {
    try {
      return await this.repo.getByIdSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getDetailSpam = async (id: string): Promise<CuponI[]> => {
    try {
      return await this.repo.getDetailSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  getUserSpam = async (id: string): Promise<CuponI[]> => {
    try {
      return await this.repo.getUserSpam(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateSpam = async (id: string, payload: CuponI): Promise<any> => {
    try {
      return await this.repo.updateSpam(id, payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


  updateState = async (id: string, payload: CuponI): Promise<any> => {
    try {
      return await this.repo.updateState(id,payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getCuponActivoUser = async (id: string): Promise<CuponI[]> => {
    try {
      return await this.repo.getCuponActivoUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  
  restarCupon = async (id: string,payload:CuponI): Promise<any> => {
    try {
      return await this.repo.restarCupon(id,payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByCodigo = async (codigo: number): Promise<CuponI[]> => {
    try {
      return await this.repo.getByCodigo(codigo);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}


