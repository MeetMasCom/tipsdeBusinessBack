import { ObjectId } from "mongoose";
import { ERR_400 } from "../../constants/messages";
import { CourseI, CourseUserI } from "../../interfaces/courses.interface";
import { PostRepository} from "./repository";
import { RecordsTransactionService } from "../recordsTransactions/service";
import { RecordsTransactionI } from "../../interfaces/recordsTransactions";


export class PostService {
  private repo: PostRepository;

  constructor() {
    this.repo = new PostRepository();
  }

   
  saveCourse = async (params:CourseI): Promise<CourseI> => {
    try {
      return await this.repo.saveCourse(params);
    } catch (error) {            
      throw new Error(ERR_400);
    }
  };

  
  getCourseByIdUser = async (id: string,tipo:any): Promise<CourseI[]> => {
    try {
      return await this.repo.getCourseByIdUser(id,tipo);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getCourseById = async (id: string): Promise<CourseI[]> => {
    try {
      return await this.repo.getCourseById(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
 

  getAllCourses = async (): Promise<CourseI[]> => {
    try {
      return await this.repo.getAllCourses();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getAllInLive = async (): Promise<CourseI[]> => {
    try {
      return await this.repo.getAllInLive();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getCourseByCategoria = async (id: any,tipo:any): Promise<CourseI[]> => {
    try {
      return await this.repo.getCourseByCategoria(id,tipo);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getCourseByUser = async (id: any,tipo:any): Promise<CourseI[]> => {
    try {
      return await this.repo.getCourseByUser(id,tipo);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

  getCourseByUserStudent = async (id: string): Promise<CourseI[]> => {
    try {
      return await this.repo.getCourseByUserStudent(id);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
  

  getTopCourses = async (): Promise<CourseI[]> => {
    try {
      return await this.repo.getTopCourses();
    } catch (error) {
      throw new Error(ERR_400);
    }
  };


  saveBuyCourse = async (
    params: CourseUserI
  ): Promise<CourseUserI> => {
    try {
      console.log("params",params);
      const buyMembership = await this.repo.saveCourseUser(params);
      const course = await this.repo.getById(params.courseId);
        console.log("course",course);
      const payload: RecordsTransactionI = {
        value: parseFloat(course.price),
        companyValue: 0,
        referValue: 0,
        detail: `Compra curso ${course.title}`,
        userId: params.userId,
        status: true,
        typeTransaction: 'Compra curso',
        walletId: '64815307cd63e1f5a8982369'
      }

      console.log("service",payload);
      await new RecordsTransactionService().save(payload);
      return buyMembership;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  verifyCourseUser = async (id: string, idC:string): Promise<CourseUserI[]> => {
    try {
      return await this.repo.verifyCourseUser(id,idC);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };
 

  updateState = async (id: string, payload: CourseI): Promise<any> => {
    try {
      return await this.repo.updateState(id,payload);
    } catch (error) {
      throw new Error(ERR_400);
    }
  };

}


