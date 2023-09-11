import { ERR_400 } from "../../constants/messages";
import { StudentI } from "../../interfaces/student.interface";
import { StudentRepository} from "./repository";


export class StudentService {
  private repo: StudentRepository;

  constructor() {
    this.repo = new StudentRepository();
  }

  save = async (params:StudentI): Promise<any> => {
    try { return await this.repo.save(params);
    } catch (error) {            
      throw new Error(error as string);
    }
  };


  getByIdCourse = async (id: string): Promise<any[]> => {
    try {
      return await this.repo.getByIdCourse(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

 
  getValidStudent = async (id: string,student:any): Promise<StudentI[]> => {
    try {
      return await this.repo.getValidStudent(id,student);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getCourseByUser = async (id: string): Promise<any[]> => {
    try {
      return await this.repo.getCourseByUser(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  
  getCourseByStudent = async (id: string): Promise<StudentI[]> => {
    try {
      return await this.repo.getCourseByStudent(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getCourseByCategoria = async (student: string,cat:string): Promise<StudentI[]> => {
    try {
      return await this.repo.getCourseByCategoria(student,cat);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

}


