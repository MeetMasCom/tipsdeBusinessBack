import { ObjectId } from "mongoose";
import { ERR_400 } from "../../constants/messages";
import { TopicI } from "../../interfaces/topic.interface";
import { TopicRepository} from "./repository";


export class TopicService {
  private repo: TopicRepository;

  constructor() {
    this.repo = new TopicRepository();
  }

   
  saveTopic = async (params:TopicI): Promise<TopicI> => {
    try {
      return await this.repo.saveTopic(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  
  getTopicByIdModule = async (id: string): Promise<TopicI[]> => {
    try {
      return await this.repo.getTopicByIdModule(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getTopicById = async (id: string): Promise<TopicI[]> => {
    try {
      return await this.repo.getTopicById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
 


}


