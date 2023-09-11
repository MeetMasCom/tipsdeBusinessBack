import { ObjectId } from "mongoose";
import { ERR_400 } from "../../constants/messages";
import { QuestionI } from "../../interfaces/question.interface";
import { QuestionRepository} from "./repository";


export class QuestionService {
  private repo: QuestionRepository;

  constructor() {
    this.repo = new QuestionRepository();
  }

   
  saveTopic = async (params:QuestionI): Promise<QuestionI> => {
    try {
      return await this.repo.saveTopic(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  
  getQuestionByIdSubPrompts = async (id: string): Promise<QuestionI[]> => {
    try {
      return await this.repo.getQuestionByIdSubPrompts(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getQuestionById = async (id: string): Promise<QuestionI[]> => {
    try {
      return await this.repo.getQuestionById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
 


}


