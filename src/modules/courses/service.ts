import { ObjectId } from "mongoose";
import { ERR_400, OK_200 } from "../../constants/messages";
import { CourseI, CourseUserI } from "../../interfaces/courses.interface";
import { CoursesRepository} from "./repository";
import { RecordsTransactionService } from "../recordsTransactions/service";
import { RecordsTransactionI } from "../../interfaces/recordsTransactions";
import { BalanceUserRepository } from "../balanceUser/repository";
import { BalanceCompanyRepository } from "../balanceCompany/repository";
import { UserService } from "../user/service";
import { BalanceCompanyI } from "../../interfaces/balanceCompany";


export class PostService {
  private repo: CoursesRepository;

  constructor() {
    this.repo = new CoursesRepository();
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


  saveBuyCourse = async (data: any): Promise<string> => {
    try {
      //valid balance
      const buyMembership = await this.repo.saveCourseUser(data);
      const balance = await new BalanceUserRepository().getAllByUserId(data.userId);

      if (!balance) throw new Error("Saldo insuficiente, realice una recarga...");

      const packageData = await new CoursesRepository().getById(data.courseId);

      if (!packageData) throw new Error("No existe información de paquete de visitas...");

      if (balance.balance < Number(packageData.price)) throw new Error("Saldo insuficiente, realice una recarga...");

      //actualizar saldo usuario
      await new BalanceUserRepository().updateBalance(balance._id!, {
        balance: Number(balance.balance) - Number(packageData.price)
      });

      const price = Number(packageData.price) * 0.50;

      //actualizar saldo empresa referidos
      const walletE = await new BalanceCompanyRepository().getByBalanceCompany();

      if (walletE.length > 0) {
        await new BalanceCompanyRepository().update(walletE[0]._id!, {
          balance: Number(walletE[0].balance) + Number(price),
        });
      } else {
        await new BalanceCompanyRepository().save({
          balance: Number(price)
        });
      }


      await new UserService().updateBalanceRefer(data.userId, price);

      const payload: RecordsTransactionI = {
        value: Number(packageData.price),
        companyValue: price,
        referValue: price,
        detail: `Compra anuncio ${packageData.title}`,
        userId: data.userId,
        status: true,
        typeTransaction: 'Compra anuncio',
        walletId: ""
      }
      await new RecordsTransactionService().save(payload);

      return OK_200;
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


