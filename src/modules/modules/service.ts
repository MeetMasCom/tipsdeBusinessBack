import { ObjectId } from "mongoose";
import { ERR_400 } from "../../constants/messages";
import { AnswerI, ModuleI, TestI } from "../../interfaces/modules.interface";
import { ModuleRepository} from "./repository";


export class ModuleService {
  private repo: ModuleRepository;

  constructor() {
    this.repo = new ModuleRepository();
  }

   
  saveModule = async (params:ModuleI): Promise<ModuleI> => {
    try {
      return await this.repo.saveModule(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  
  getModuleByIdCourse = async (id: string): Promise<ModuleI[]> => {
    try {
      return await this.repo.getModuleByIdCourse(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getModuleById = async (id: string): Promise<ModuleI[]> => {
    try {
      return await this.repo.getModuleById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


  getModulesAndTopic = async (id: string): Promise<ModuleI[]> => {
    try {
      return await this.repo.getModulesAndTopic(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

    
  saveTest= async (params:TestI): Promise<TestI> => {
    try {
      return await this.repo.saveTest(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getTestById = async (id: string): Promise<TestI[]> => {
    try {
      return await this.repo.getTestById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getTestByIdModule = async (id: string): Promise<TestI[]> => {
    try {
      return await this.repo.getTestByIdModule(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  saveAnswer= async (params:AnswerI): Promise<AnswerI> => {
    try {
      return await this.repo.saveAnswer(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };
}


