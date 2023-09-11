import { ERR_400 } from "../../constants/messages";
import { CatalogueI } from "../../interfaces/catalogue.interface";
import { CatalogueRepository } from "./repository";

export class CatalogueService {
  private repo: CatalogueRepository;

  constructor() {
    this.repo = new CatalogueRepository();
  }

  getAll = async (): Promise<CatalogueI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByOptions = async (code: string): Promise<CatalogueI[]> => {
    try {
      const catalogue = await this.repo.getByCode(code);      
      if (!catalogue) {
        throw new Error(ERR_400);
      }
      return await this.repo.getByOptions(catalogue._id!);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  create = async (payload: CatalogueI): Promise<CatalogueI> => {
    try {
      return await this.repo.save(payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}
