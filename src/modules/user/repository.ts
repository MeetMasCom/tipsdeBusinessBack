import { connectionMongo } from "../../database/conection";
import { Types } from "mongoose";
import {
  ReferralsI,
  UserExtraI,
  UserI,
  UserOtpI,
  UserValidOtpI,
  SearchUsers,
} from "../../interfaces/user.interface";
import { userModelMongo, userOtpModelMongo, referralsModelMongo,postModelMongo } from "./model";
import { ERR_400 } from "../../constants/messages";
import { PostI } from "../../interfaces/post.interface";

export class UserRepository {
  async save(data: UserI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as UserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel.find().exec();
      await cnxMongo.close();
      return response as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async online(id: string, status: boolean) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);

      const response = await userModel
        .updateOne({ _id: id }, { $set: { online: status } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del usuario");

      await cnxMongo.close();
      return response.modifiedCount;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as UserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdentification(identification: string) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel.findOne({ identification }).exec();
      await cnxMongo.close();
      return response as UserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByEmailOrUserName(email: string, userName: string) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .findOne({ $or: [{ email }, { userName }] })
        .exec();
      await cnxMongo.close();
      return response as UserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async update(id: string, data: UserExtraI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);

      const response = await userModel
        .updateOne({ _id: id }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del usuario");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updatePassword(id: string, password: string) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);

      const response = await userModel
        .updateOne({ _id: id }, { $set: { password } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del usuario");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async saveOtp(data: UserOtpI) {
    try {
      const cnxMongo = await connectionMongo();
      const userOtpModel = await userOtpModelMongo(cnxMongo);
      const response = await userOtpModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as UserOtpI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async validOtp(data: UserValidOtpI) {
    try {
      const cnxMongo = await connectionMongo();
      const userOtpModel = await userOtpModelMongo(cnxMongo);
      const response = await userOtpModel
        .findOne({
          used: false,
          otp: data.otp,
          userId: data.userId,
        })
        .exec();
      await cnxMongo.close();
      return response as UserOtpI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateOtp(id: string, used: boolean) {
    try {
      const cnxMongo = await connectionMongo();
      const userOtpModel = await userOtpModelMongo(cnxMongo);

      const response = await userOtpModel
        .updateOne({ _id: id }, { $set: { used } })
        .exec();

      if (response.modifiedCount == 0) throw new Error(ERR_400);

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdUser(id: string) {
    try {
      const Id = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel.aggregate([
        {
          $match: { _id: Id },
        },
        {
          $lookup: {
            from: "catalogues",
            localField: "studies",
            foreignField: "_id",
            as: "studies",
          },
        },
        {
          $lookup: {
            from: "catalogues",
            localField: "zodiac_sign",
            foreignField: "_id",
            as: "signe",
          },
        },
        {
          $lookup: {
            from: "catalogues",
            localField: "sport",
            foreignField: "_id",
            as: "sport",
          },
        }
        ,
        {
          $lookup: {
            from: "catalogues",
            localField: "smoke",
            foreignField: "_id",
            as: "smoke",
          },
        } ,
        {
          $lookup: {
            from: "catalogues",
            localField: "drink",
            foreignField: "_id",
            as: "drink",
          },
        },
        {
          $lookup: {
            from: "countries",
            localField: "currentResidence",
            foreignField: "_id",
            as: "residence",
          },
        },
        {
          $lookup: {
            from: "catalogues",
            localField: "civil_status",
            foreignField: "_id",
            as: "civil_status",
          },
        },
        {
          $lookup: {
            from: "catalogues",
            localField: "childs",
            foreignField: "_id",
            as: "childs",
          },
        },
        {
          $lookup: {
            from: "catalogues",
            localField: "career",
            foreignField: "_id",
            as: "career",
          },
        }
        ,
        {
          $lookup: {
            from: "catalogues",
            localField: "policy",
            foreignField: "_id",
            as: "policy",
          },
        },
        {
          $lookup: {
            from: "countries",
            localField: "country",
            foreignField: "_id",
            as: "country",
          },
        },
        {
          $lookup: {
            from: "catalogues",
            localField: "gender",
            foreignField: "_id",
            as: "genero",
          },
        },
        {
          $lookup: {
            from: "catalogues",
            localField: "body",
            foreignField: "_id",
            as: "cuerpo",
          },
        },
        {
          $lookup: {
            from: "catalogues",
            localField: "preferences",
            foreignField: "_id",
            as: "prefer",
          },
        },
        
      ]).exec();
      await cnxMongo.close();
      return response as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAllUser() {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel.find().exec();
      await cnxMongo.close();
      return response as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async saveReferUser(data: ReferralsI) {
    try {
      const cnxMongo = await connectionMongo();
      const referralsModel = await referralsModelMongo(cnxMongo);
      const response = await referralsModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as ReferralsI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getReferUser(userId: string) {
    try {
      const cnxMongo = await connectionMongo();
      const referralsModel = await referralsModelMongo(cnxMongo);
      const response = await referralsModel.find({ userId }).exec();
      await cnxMongo.close();
      return response as ReferralsI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getUserGender(id: string) {
    try {
      const gender = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel.aggregate([
        {
          $match: {
            gender: gender,
          },
        },
        {
          $lookup: {
            from: "countries",
            localField: "country",
            foreignField: "_id",
            as: "country",
          },
        },
        { $sample: { size: 10 } }
      ]).sort({ createdAt: -1 }).exec();

      await cnxMongo.close();
      return response as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getUserActive(id: string) {
    try {
      const gender = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel.aggregate([
        {
          $match: [{
            gender: gender
          }, { state: 2 }]
        },
        {
          $lookup: {
            from: "countries",
            localField: "country",
            foreignField: "_id",
            as: "country",
          },
        },
        { $sample: { size: 10 } }
      ]).sort({ createdAt: -1 }).exec();

      await cnxMongo.close();
      return response as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getAllUserSearch(body: SearchUsers) {
    try {
      
      const genero = new Types.ObjectId(body.preferences);
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .find({
          country: body.country,  
          //gender:body.preferences,       
          age: {
            $gt: body.age && body.age[0],
            $lt: body.age && body.age[1],
          },
          civil_status: body.stateCivil !== "" ? body.stateCivil : undefined,
          height: body.heigth !== null ? body.heigth : undefined,
          eyeColor: body.eyeColor !== "" ? body.eyeColor : undefined,
          body: body.bodyType !== "" ? body.bodyType : undefined,
          drink: body.drink !== "" ? body.drink : undefined,
          smoke: body.smoke !== "" ? body.smoke : undefined,
          childs: body.childrens !== "" ? body.childrens : undefined
        })
        .exec();
      await cnxMongo.close();
      return response as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async getUserOnline(id: string) {
    try {
      const gender = new Types.ObjectId(id);
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .aggregate([
          {
            $match: {
              $and: [{ gender: gender }, { online: true }],
            },
          },
          {
            $lookup: {
              from: "countries",
              localField: "country",
              foreignField: "_id",
              as: "country",
            },
          },
        ])
        .sort({ createdAt: -1 })
        .limit(10)
        .exec();
      await cnxMongo.close();
      return response as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateAgreements(id: string, agreements: boolean) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .updateOne({ _id: id }, { $set: { agreements } })
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del usuario");
      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateSocialAgreements(id: string, socialAgreements: boolean) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .updateOne({ _id: id }, { $set: { socialAgreements } })
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del usuario");
      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async verifyUser(id: string, data: UserExtraI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel
        .updateOne({ _id: id }, { $set: { ...data } }).exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del usuario");
      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getUserSocialAgreements() {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel.find({ socialAgreements: true }).exec();
      await cnxMongo.close();
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateType(id: string, type: number) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);

      const response = await userModel
        .updateOne({ _id: id }, { $set: { type } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del usuario");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getVerifyTeacher(id:string) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);
      const response = await userModel.find({typeUser:id}).sort({ createdAt: -1 }).exec();

      await cnxMongo.close();
      return response as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  async updateCupo(data: UserExtraI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);

      const response = await userModel
        .updateOne({ usersId: 1 }, { $set: { ...data } })        
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información del usuario");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }
  async getCupoLimite() {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);

      const response = await userModel
        .findOne({ usersId: 1 })        
        .exec();
      

      await cnxMongo.close();
      return response as unknown  as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  async usersincupo() {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await userModelMongo(cnxMongo);

      const response = await userModel
      .aggregate([
        {
          $lookup: {
            from: "cuponUser",
            localField: "_id",
            foreignField: "user_cupon",
            as: "cupon"
          }
        },
        {
          $match: {
            cupon: { $size: 0 } // Filtrar los clientes sin pedidos
          }
        },
        {
          $project: {
            _id: 1,
            userName:1,
            firstname:1,
            email:1,
            lastname: 1,
          }
        }
      ])

      await cnxMongo.close();
      return response as unknown  as UserI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
