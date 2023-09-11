import { ERR_400 } from "../../constants/messages";
import { CommentI } from "../../interfaces/comment.interface";
import { CommentRepository} from "./repository";


export class CommentService {
  private repo: CommentRepository;

  constructor() {
    this.repo = new CommentRepository();
  }

  save = async (params: CommentI): Promise<CommentI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getByIdFad = async (id:Object): Promise<CommentI[]> => {
    try {
      return await this.repo.getByIdFad(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}
