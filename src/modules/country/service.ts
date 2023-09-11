import { ERR_400 } from "../../constants/messages";
import { CountryI } from "../../interfaces/country.interface copy";
import { CountryRepository } from "./repository";

export class CountryService {
  private repo: CountryRepository;

  constructor() {
    this.repo = new CountryRepository();
  }

  getAll = async (): Promise<CountryI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
}
