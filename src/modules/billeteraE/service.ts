import { ERR_400 } from "../../constants/messages";
import { BilleteraI } from "../../interfaces/billeteraE.interface";
import { BilleteraRepository } from "./repository";


export class BilleteraService {
  private repo: BilleteraRepository;

  constructor() {
    this.repo = new BilleteraRepository();
  }

  save = async (params: BilleteraI): Promise<BilleteraI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getAll = async (): Promise<BilleteraI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getById = async (id: string): Promise<BilleteraI> => {
    try {
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdUser = async (id: string): Promise<BilleteraI[]> => {
    try {
      return await this.repo.getByIdUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  update = async (id: string, payload: BilleteraI): Promise<string> => {
    try {
      const validHotel = await this.repo.getById(id);
      if (!validHotel) throw new Error("La billetera no existe.");
      if (validHotel) payload = { ...payload } as BilleteraI;

      await this.repo.update(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };
}


