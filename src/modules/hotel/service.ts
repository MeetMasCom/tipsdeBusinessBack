import { connected } from "process";
import { ERR_400 } from "../../constants/messages";
import { HotelI,HotelExtraI } from "../../interfaces/hotel.interface";
import { PoliciesI } from "../../interfaces/policies.interface";
import { HotelRepository} from "./repository";


export class HotelService {
  private repo: HotelRepository;

  constructor() {
    this.repo = new HotelRepository();
  }

  save = async (params:HotelI): Promise<HotelI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getAll = async (): Promise<HotelI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getHotels = async (): Promise<HotelI[]> => {
    try {
      return await this.repo.getHotels();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getById = async (id: string): Promise<HotelI[]> => {
    try {
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  

  getByIdUser = async (id: string): Promise<HotelI[]> => {
    try {
      return await this.repo.getByIdUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  update = async (id: string, payload: HotelI): Promise<string> => {
    try {
      const validHotel = await this.repo.getById(id);
      if (!validHotel) throw new Error("El hotel no existe.");
      if (validHotel) payload = { state: 1, ...payload } as HotelI;
    
      await this.repo.update(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  decline = async (id: string, payload: HotelI): Promise<string> => {
    try {
      const validHotel = await this.repo.getById(id);
      if (!validHotel) throw new Error("El hotel no existe.");
      if (validHotel) payload = { state: 2, ...payload } as HotelI;
      console.log(payload);
      await this.repo.update(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  commentdecline = async (id: string, payload: HotelI): Promise<string> => {
    try {
      await this.repo.updateComment(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  commentPolicies = async (id: string, payload: PoliciesI): Promise<string> => {
    try {
      await this.repo.commentPolicies(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getHotelNotVerified = async (): Promise<HotelI[]> => {
    try {
      return await this.repo.getHotelNotVerified();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  getHotelVerified = async (): Promise<HotelI[]> => {
    try {
      return await this.repo.getHotelVerified();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  updateServices = async (id: string, payload: HotelExtraI): Promise<String> => {
    try {
      console.log("id",id);
      console.log("data",payload);
      const validHotel = await this.repo.getById(id);
      if (!validHotel) throw new Error("El Hotel no existe.");
      await this.repo.updateServices(id, payload);
      return "Servicio Agregado";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  updatePolicies = async (id: string, payload: HotelExtraI): Promise<String> => {
    try {
      const validHotel = await this.repo.getById(id);
      if (!validHotel) throw new Error("El Hotel no existe.");
      await this.repo.updatePolicies(id, payload);
      return "Politica Agregada";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getByIdServices = async (id: string): Promise<HotelI[]> => {
    try {
      return await this.repo.getByIdServices(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateHotel = async (id: string, payload: HotelI): Promise<string> => {
    try {
      await this.repo.updateHotel(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  savePolicies = async (params:PoliciesI): Promise<PoliciesI> => {
    try {
      return await this.repo.savePolicies(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getByIdPolicies = async (id: string): Promise<PoliciesI[]> => {
    try {
      return await this.repo.getByIdPolicies(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  verifyPolicies= async (id: string, payload:PoliciesI): Promise<string> => {
    try {     
      await this.repo.verifyPolicies(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  updatePoliciesHotel = async (id: string, payload: PoliciesI): Promise<String> => {
    try {
      await this.repo.updatePoliciesHotel(id, payload);
      return "Politica Agregada";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  updateState= async (id: string, payload:HotelI): Promise<string> => {
    try {     
      await this.repo.updateState(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

}


