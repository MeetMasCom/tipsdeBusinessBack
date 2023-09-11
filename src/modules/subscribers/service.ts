import { ERR_400 } from "../../constants/messages";
import { SubscribersI } from "../../interfaces/subscribers.interface";
import { CommentRepository} from "./repository";


export class SubscribersService {
  private repo: CommentRepository;

  constructor() {
    this.repo = new CommentRepository();
  }

  save = async (params: SubscribersI): Promise<SubscribersI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getByIdFad = async (id:Object): Promise<SubscribersI[]> => {
    try {
      return await this.repo.getByIdFad(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getSubcribeStudent = async (id: string,student:any): Promise<SubscribersI[]> => {
    try {
      return await this.repo.getSubscribeStudent(id,student);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}
