import { ObjectId } from "mongoose";
import { ERR_400 } from "../../constants/messages";
import { PostI } from "../../interfaces/post.interface";
import { UserI } from "../../interfaces/user.interface";
import { PostRepository} from "./repository";


export class PostService {
  private repo: PostRepository;

  constructor() {
    this.repo = new PostRepository();
  }

   
  savePost = async (params:PostI): Promise<PostI> => {
    try {
      return await this.repo.savePost(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  
  getPostByIdUser = async (id: string): Promise<PostI[]> => {
    try {
      return await this.repo.getPostByIdUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

   
  getPostUserProfile = async (id: string): Promise<PostI[]> => {
    try {
      return await this.repo.getPostUserProfile(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  

  getPostById = async (id: string): Promise<PostI[]> => {
    try {
      return await this.repo.getPostById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

    
  getPostByType = async (id: string): Promise<any> => {
    try {
      return await this.repo.getPostByType(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


  getPostProfileUserId = async (id: string, profile:string): Promise<any> => {
    try {
      return await this.repo.getPostProfileUserId(id,profile);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  updateProfile = async (id: string, payload: UserI): Promise<string> => {
    try {
      await this.repo.updateProfile(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getCountPost = async (id: string, payload: string): Promise<any> => {
    try {
     
      return await this.repo.getCountPost(id,payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  
  deletePost = async (id: string): Promise<any> => {
    try {
     
      return await this.repo.deletePost(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };



}


