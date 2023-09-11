import { ERR_400 } from "../../constants/messages";
import { PackageI } from "../../interfaces/package.interface";
import { PackageRepository } from "./repository";


export class PackageService {
  private repo: PackageRepository;

  constructor() {
    this.repo = new PackageRepository();
  }

  save = async (params: PackageI): Promise<PackageI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getAll = async (): Promise<PackageI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getById = async (id: string): Promise<PackageI> => {
    try {
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getActivos = async (): Promise<PackageI[]> => {
    try {
      return await this.repo.getActivos();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updatePackage = async (id: string, payload: PackageI): Promise<any> => {
    try {
      return await this.repo.updatePackage(id, payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateState = async (id: string, payload: PackageI): Promise<any> => {
    try {
      return await this.repo.updateState(id, payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


}


