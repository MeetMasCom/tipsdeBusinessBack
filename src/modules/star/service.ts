import { ERR_400 } from "../../constants/messages";
import { StarI } from "../../interfaces/star.interface";
import { StarRepository} from "./repository";


export class StarService {
  private repo: StarRepository;

  constructor() {
    this.repo = new StarRepository();
  }

  save = async (params: StarI): Promise<StarI> => {
    try {
      
      return await this.repo.save(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };


  getByIdUser = async (id: string): Promise<StarI[]> => {
    try {
      return await this.repo.getByIdUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getByIdAll = async (id: string): Promise<StarI[]> => {
    try {
      return await this.repo.getByIdAll(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


  getStarUserFadId = async (user: Object, fad:Object): Promise<StarI[]> => {
    try {
      return await this.repo.getStarUserFadId(user,fad);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getById = async (id: string): Promise<StarI[]> => {
    try {
      return await this.repo.getById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  update = async (id: string, payload: StarI): Promise<string> => {
    try {
     // const validStar = await this.repo.getById(id);
      //if (!validStar) throw new Error("No existe la calificacion.");
      payload = {  ...payload } as StarI;
      console.log(payload);
      await this.repo.update(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

}
