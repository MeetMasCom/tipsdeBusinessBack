import { ObjectId } from "mongoose";
import { ERR_400, OK_200 } from "../../constants/messages";
import { AudioLibroI } from "../../interfaces/audiolibro.interface";
import { AudioLibroRepository} from "./repository";


export class AudioLibroService {
  private repo: AudioLibroRepository;

  constructor() {
    this.repo = new AudioLibroRepository();
  }

   
  saveAudioLibro = async (params:AudioLibroI): Promise<AudioLibroI> => {
    try {
      return await this.repo.saveAudioLibro(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  
  getAudioLibroByIdUser = async (id: string): Promise<AudioLibroI[]> => {
    try {
      return await this.repo.getAudioLibroByIdUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getAudioLibroById = async (id: string): Promise<AudioLibroI[]> => {
    try {
      return await this.repo.getAudioLibroById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getAllAudioLibro = async (): Promise<AudioLibroI[]> => {
    try {
      return await this.repo.getAllAudioLibro();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
 
  updateAudioLibro = async (id: string, params: AudioLibroI): Promise<string> => {
    try {
      await this.repo.updateAudioLibro(id, params);
      return OK_200
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


}


