import { ERR_400 } from "../../constants/messages";
import { TypeRoomI } from "../../interfaces/typeRoom.interface";
import { TypeRoomRepository} from "./repository";


export class TypeRoomService {
  private repo: TypeRoomRepository;

  constructor() {
    this.repo = new TypeRoomRepository();
  }

  save = async (params:TypeRoomI): Promise<TypeRoomI> => {
    try {
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getAll = async (): Promise<TypeRoomI[]> => {
    try {
      return await this.repo.getAll();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getById = async (id: string): Promise<TypeRoomI[]> => {
    try {
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdHotel = async (id: string): Promise<TypeRoomI[]> => {
    try {
      return await this.repo.getByIdHotel(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

}


