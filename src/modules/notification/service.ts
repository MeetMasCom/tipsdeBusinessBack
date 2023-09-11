import { ERR_400 } from "../../constants/messages";
import { NotificationI } from "../../interfaces/notificacion.inteface";
import { NotificationRepository} from "./repository";


export class NotificationService {
  private repo: NotificationRepository;

  constructor() {
    this.repo = new NotificationRepository();
  }

  save = async (params:NotificationI): Promise<NotificationI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getByIdLike = async (id: string): Promise<NotificationI[]> => {
    try {
      return await this.repo.getByIdLike(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdUser = async (id: string): Promise<NotificationI[]> => {
    try {
      return await this.repo.getByIdUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  getUserLike = async (id: string): Promise<NotificationI[]> => {
    try {
      return await this.repo.getUserLike(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateState = async (id: string): Promise<any> => {
    try {
      return await this.repo.updateState(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };



}


