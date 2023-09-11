import { ERR_400 } from "../../constants/messages";
import { FeedBackI } from "../../interfaces/feedback.interface";
import { FeedBackRepository} from "./repository";


export class FeedBackService {
  private repo: FeedBackRepository;

  constructor() {
    this.repo = new FeedBackRepository();
  }

  save = async (params:FeedBackI): Promise<any> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(error as string);
    }
  };


  getFeedBack = async (): Promise<FeedBackI[]> => {
    try {
      return await this.repo.getFeedBack();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
 
}


