import { ERR_400 } from "../../constants/messages";
import { LikePostI } from "../../interfaces/likePost.interface";
import { LikePostRepository} from "./repository";


export class LikePostService {
  private repo: LikePostRepository;

  constructor() {
    this.repo = new LikePostRepository();
  }

  save = async (params:LikePostI): Promise<any> => {
    try {
      const validUser = await this.repo.validateLike(params.post_id,params.userlike);
      if (validUser) throw new Error("Like realizado");
      if(!validUser) return await this.repo.save(params);
    } catch (error) {            
      throw new Error(error as string);
    }
  };


   validateLike=async(id:string,idLike:string): Promise<LikePostI[]>=>{
    try {
      return await this.repo.validateLike(id,idLike);
    } catch (error) {
      throw new Error(ERR_400);
    }
  } 

 

   
  likePostUser = async (id: string,idL:string): Promise<LikePostI[]> => {
    try {
      return await this.repo.likePostUser(id,idL);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  deleteLikePost = async (idP: string,idUL:string): Promise<LikePostI[]> => {
    try {
      return await this.repo.deleteLikePost(idP,idUL);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  
  countLikePost = async (idP: string): Promise<LikePostI[]> => {
    try {
      return await this.repo.countLikePost(idP);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };







}


