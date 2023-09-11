import { ERR_400 } from "../../constants/messages";
import { LikeI } from "../../interfaces/like.interface";
import { LikeRepository} from "./repository";


export class LikeService {
  private repo: LikeRepository;

  constructor() {
    this.repo = new LikeRepository();
  }

  save = async (params:LikeI): Promise<any> => {
    try {
      const validUser = await this.repo.validateLike(params.user_id,params.userlike);
      if (validUser) throw new Error("Match ya realizado");
      if(!validUser) return await this.repo.save(params);
    } catch (error) {            
      throw new Error(error as string);
    }
  };


   validateLike=async(id:string,idLike:string): Promise<LikeI[]>=>{
    try {
      return await this.repo.validateLike(id,idLike);
    } catch (error) {
      throw new Error(ERR_400);
    }
  } 

  getByIdLike = async (id: string): Promise<LikeI[]> => {
    try {
      return await this.repo.getByIdLike(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  getUserLike = async (id: string): Promise<LikeI[]> => {
    try {
      return await this.repo.getUserLike(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateLike = async (id: string): Promise<any> => {
    try {
      return await this.repo.updateLike(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getMyLikes = async (id: string): Promise<LikeI[]> => {
    try {
      return await this.repo.getMyLikes(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  
  verificarLike = async (id: string,idL:string): Promise<LikeI[]> => {
    try {
      return await this.repo.verificarLike(id,idL);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };



}


