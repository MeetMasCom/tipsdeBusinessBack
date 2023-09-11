import e from "cors";
import { OK_200 } from "../../constants/messages";
import { AdsI, ReviewAdsI, VisitAdsI } from "../../interfaces/ads.interface";
import { RecordsTransactionI } from "../../interfaces/recordsTransactions";
import { BalanceUserRepository } from "../balanceUser/repository";
import { PackageRepository } from "../package/repository";
import { RecordsTransactionService } from "../recordsTransactions/service";
import { UserRepository } from "../user/repository";
import { UserService } from "../user/service";
import { AdsRepository } from "./repository";
import { BalanceCompanyRepository } from "../balanceCompany/repository";
import { AgeEnum } from "../../enums/age.enum";
import { log } from "console";

export class AdsService {
  private repo: AdsRepository;

  constructor() {
    this.repo = new AdsRepository();
  }

  create = async (data: AdsI): Promise<string> => {
    try {

      //valid balance
      const balance = await new BalanceUserRepository().getAllByUserId(data.userId);

      if (!balance) throw new Error("Saldo insuficiente, realice una recarga...");

      const packageData = await new PackageRepository().getById(data.package);

      if (!packageData) throw new Error("No existe información de paquete de visitas...");

      if (balance.balance < Number(packageData.valor)) throw new Error("Saldo insuficiente, realice una recarga...");

      //actualizar saldo usuario
      await new BalanceUserRepository().updateBalance(balance._id!, {
        balance: Number(balance.balance) - Number(packageData.valor)
      });

      const price = Number(packageData.valor) * 0.50;

      //actualizar saldo empresa referidos
      const walletE = await new BalanceCompanyRepository().getByBalanceCompany();

      if (walletE.length > 0) {
        await new BalanceCompanyRepository().update(walletE[0]._id!, {
          balance: Number(walletE[0].balance) + Number(price),
          walletId: ""
        });
      } else {
        await new BalanceCompanyRepository().save({
          balance: Number(price),
          walletId: ""
        });
      }


      await new UserService().updateBalanceRefer(data.userId, price);

      const payload: RecordsTransactionI = {
        value: Number(packageData.valor),
        companyValue: price,
        referValue: price,
        detail: `Compra anuncio ${packageData.name}`,
        userId: data.userId,
        status: true,
        typeTransaction: 'Compra anuncio',
        walletId: ""
      }
      await new RecordsTransactionService().save(payload);

      await this.repo.save(data);
      return OK_200;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getById = async (id: string): Promise<AdsI[]> => {
    try {
      const data = await this.repo.getByUserId(id);
      let response: AdsI[] = [];

      await Promise.all(data.map(async (element) => {
        const result = await this.repo.countVisitAds(element._id!);
        response.push({
          _id: element._id,
          type: element.type,
          userId: element.userId,
          title: element.title,
          description: element.description,
          link: element.link,
          country: element.country,
          age: element.age,
          carrer: element.carrer,
          file: element.file,
          language: element.language,
          hobbies: element.hobbies,
          gender: element.gender,
          religion: element.religion,
          journal: element.journal,
          dependency: element.dependency,
          state: element.state,
          package: element.package,
          createdAt: element.createdAt,
          updatedAt: element.updatedAt,
          visit: result.length ?? 0
        })
        return element;
      }));
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  };


  getAll = async (): Promise<AdsI[]> => {
    try {
      const data = await this.repo.getAll();
      let response: AdsI[] = [];
      await Promise.all(data.map(async (element) => {
        const result = await new UserRepository().getById(element.userId);
        response.push({
          _id: element._id,
          type: element.type,
          userId: element.userId,
          user: result.userName,
          title: element.title,
          description: element.description,
          link: element.link,
          country: element.country,
          age: element.age,
          carrer: element.carrer,
          file: element.file,
          language: element.language,
          hobbies: element.hobbies,
          gender: element.gender,
          religion: element.religion,
          journal: element.journal,
          dependency: element.dependency,
          state: element.state,
          package: element.package,
          createdAt: element.createdAt,
          updatedAt: element.updatedAt
        })
        return element;
      }));
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  };


  deleteById = async (id: string): Promise<string> => {
    try {
      await this.repo.deleteById(id);
      return OK_200;
    } catch (error) {
      throw new Error(error as string);
    }
  };


  updateStateAds = async (id: string, payload: ReviewAdsI): Promise<string> => {
    try {
      await this.repo.updateStateAds(id, payload);
      return OK_200;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  updateAdsById = async (id: string, payload: AdsI): Promise<string> => {
    try {
      payload.state = 1;
      await this.repo.updateAds(id, payload);
      return OK_200;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  onOffAdsById = async (id: string, payload: AdsI): Promise<string> => {
    try {
      await this.repo.updateAds(id, payload);
      return OK_200;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  getAdsForUser = async (id: string): Promise<AdsI[]> => {
    try {
      const data = await this.repo.getByIdAds(id);
      const user = await new UserRepository().getById(id);
      let ads: AdsI[] = [];


      // Validacion de preferencias
      data.forEach(item => {
        let valid: boolean = true;

        //edad
        item.age?.forEach(age => {
          switch (age) {
            case AgeEnum.entre1315:
              if (user.age! > 12 && user.age! < 16) {
                valid = true;
              } else {
                valid = false;
              }
              break;
            case AgeEnum.entre1618:
              if (user.age! > 15 && user.age! < 19) {
                valid = true;
              } else {
                valid = false;
              }
              break;
            case AgeEnum.entre1925:
              if (user.age! > 18 && user.age! < 26) {
                valid = true;
              } else {
                valid = false;
              }
              break;
            case AgeEnum.mayor25:
              if (user.age! > 25) {
                valid = true;
              } else {
                valid = false;
              }
              break;
          }

        })

        // carrer
        if (!item.carrer.includes(user.career!) && valid) {
          valid = false;
        }

        // country
        if (!item.country.includes(user.country!) && valid) {
          valid = false;
        }

        // language
        if (valid) {
          user.languages?.forEach(userLang => {
            if (item.language.includes(userLang)) {
              valid = true;
            } else {
              valid = false;
            }
          })
        }

        // hobbies
        if (valid) {
          user.hobbies?.forEach(userHobb => {
            if (item.hobbies.includes(userHobb)) {
              valid = true;
            } else {
              valid = false;
            }
          })
        }

        // gender
        if (!item.gender.includes(user.gender!) && valid) {
          valid = false;
        }

        // religion
        if (!item.religion.includes(user.religion!) && valid) {
          valid = false;
        }

        // journal
        if (!item.journal.includes(user.journal!) && valid) {
          valid = false;
        }

        // dependency
        if (!item.dependency.includes(user.time_work!) && valid) {
          valid = false;
        }

        if (valid) {
          ads.push(item);
        }

      })

      // Anuncios aleatorios
      const maxAds = ads.length > 5 ? 5 : ads.length;
      let response: AdsI[] = [];
      let indexAds: number[] = [];
      if (ads.length > 0)
        for (let i = 0; i < maxAds; i++) {
          const randomIndex = Math.floor(Math.random() * ads.length);
          if (!indexAds.find(f => f == randomIndex)) {
            indexAds.push(randomIndex);
            response.push(ads[randomIndex]);
          }
        }
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  visitAds = async (data: VisitAdsI): Promise<string> => {
    try {
      await this.repo.visitAds(data);
      const visit = (await this.repo.countVisitAds(data.adsId)).length;
      const ads = await this.repo.getAdsById(data.adsId);
      const dataPackage = await new PackageRepository().getById(ads.package);

      if (Number(visit) >= Number(dataPackage.visit)) {
        await this.repo.updateStateAds(data.adsId, {
          state: 3,
          comentary: "FIN PAQUETE"
        });
      }
      return OK_200;
    } catch (error) {
      throw new Error(error as string);
    }
  };



}
