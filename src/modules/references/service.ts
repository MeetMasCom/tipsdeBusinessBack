import { ERR_400 } from "../../constants/messages";
import { ReferencesI,ReferencesTipsI } from "../../interfaces/references.interface";
import { ReferencesRepository} from "./repository";


export class Referenceservice {
  private repo: ReferencesRepository;

  constructor() {
    this.repo = new ReferencesRepository();
  }

  save = async (params: ReferencesI): Promise<ReferencesI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };


  getAllReferences = async (): Promise<ReferencesI[]> => {
    try {
      return await this.repo.getAllReferences();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getMyReferences = async (id:Object): Promise<ReferencesI[]> => {
    try {
      return await this.repo.getMyReferences(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdCourse = async (id:Object): Promise<ReferencesI[]> => {
    try {
      return await this.repo.getByIdCourse(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  saveReferencesTips = async (params: ReferencesI): Promise<ReferencesI> => {
    try {
      return await this.repo.saveReferencesTips(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getByIdTips = async (id:Object): Promise<ReferencesI[]> => {
    try {
      return await this.repo.getByIdTips(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}
