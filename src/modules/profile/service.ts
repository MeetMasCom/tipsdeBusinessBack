import { ERR_400 } from "../../constants/messages";
import { ProfileI } from "../../interfaces/profile.interface";
import { UserI } from "../../interfaces/user.interface";
import { ProfileRepository } from "./repository";


export class ProfileService {
  private repo: ProfileRepository;

  constructor() {
    this.repo = new ProfileRepository();
  }

   
  saveProfile= async (params:ProfileI): Promise<ProfileI> => {
    try {
      return await this.repo.saveProfile(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  getProfileId = async (id:string,profile:string): Promise<UserI[]> => {
    try {

      return await this.repo.getProfileId(id,profile);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  
  getAllProfile = async (): Promise<ProfileI[]> => {
    try {
      return await this.repo.getAllProfile();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  

  addProfile = async (id: string, payload: any): Promise<string> => {
    try {
      const idp=payload.profile_id as unknown as string;
      const profile = await this.repo.getProfileId(id,idp);
      if (profile.length>0) throw new Error("Perfil ya agregado.");
      if (profile.length===0) 
      await this.repo.addProfile(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  addSocialN = async (id: string, payload: UserI): Promise<string> => {
    try {
     
      await this.repo.addSocialN(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getProfileById = async (id:String): Promise<ProfileI[]> => {
    try {
      return await this.repo.getProfileById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  addFollowers = async (id: string, payload: UserI): Promise<string> => {
    try {
      const idp=payload.followers as unknown as string;
      const profile = await this.repo.getFollowersId(id,idp);
      if (profile.length>0) throw new Error("Seguidor ya registrado.");
      if (profile.length===0) 
      await this.repo.addFollowers(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

  addFollowings = async (id: string, payload: UserI): Promise<string> => {
    try {
      const idp=payload.following as unknown as string;
      const profile = await this.repo.getFollowingsId(id,idp);
      if (profile.length>0) throw new Error("Seguidor ya registrado.");
      if (profile.length===0) 
      await this.repo.addFollowings(id, payload);
      return "Datos actualizados";
    } catch (error) {
      throw new Error(error as string);
    }
  };

}


