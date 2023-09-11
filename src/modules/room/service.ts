import { ERR_400 } from "../../constants/messages";
import { RoomI } from "../../interfaces/room.interface";
import { RoomRepository} from "./repository";


export class RoomService {
  private repo: RoomRepository;

  constructor() {
    this.repo = new RoomRepository();
  }

  save = async (params:RoomI): Promise<RoomI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getByIdHotelRoom = async (id: string): Promise<RoomI[]> => {
    try {
      return await this.repo.getByIdHotelRoom(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  getRoomById = async (id: string): Promise<RoomI[]> => {
    try {
      return await this.repo.getRoomById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  addPriceRoom = async (id: string, payload: RoomI): Promise<RoomI[]> => {
    try {
      await this.repo.addPrice(id, payload);
      return await this.repo.getRoomById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  updatePriceRoom = async (id: string, payload: RoomI): Promise<RoomI[]> => {
    try {
      await this.repo.updatePrice(id, payload);
      return await this.repo.getRoomById(id);
    } catch (error) {
      throw new Error(error as string);
    }
  };

}


