import { ERR_400 } from "../../constants/messages";
import { ServiceI } from "../../interfaces/service.interface";
import { ServiceRepository} from "./repository";


export class ServiceService {
  private repo: ServiceRepository;

  constructor() {
    this.repo = new ServiceRepository();
  }

  save = async (params:ServiceI): Promise<ServiceI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getAll = async (): Promise<ServiceI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdHotel = async (id: string): Promise<ServiceI[]> => {
    try {
      return await this.repo.getByIdHotel(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdService = async (id: string): Promise<ServiceI[]> => {
    try {
      return await this.repo.getByIdService(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}


