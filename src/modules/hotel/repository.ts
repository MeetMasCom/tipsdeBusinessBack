import { connectionMongo } from "../../database/conection";
import { Connection, Schema, Types,model } from "mongoose";
import { HotelI,HotelExtraI } from "../../interfaces/hotel.interface";
import { hotelModelMongo, policiesModelMongo } from "./model";
import { PoliciesI } from "../../interfaces/policies.interface";



export class HotelRepository {
  async save(data: HotelI) {
    try {      
  //console.log(data);
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);
      const response = await hotelModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as HotelI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);
      const response = await hotelModel.find({state:3}).exec();
      await cnxMongo.close();
      return response as HotelI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);      
      const response = await hotelModel.find({ _id: id }).exec();
      await cnxMongo.close();
      return response as HotelI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdUser(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);      
      const response = await hotelModel.find({ user_id: id }).exec();
      await cnxMongo.close();
      return response as HotelI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async update(id: string, data: HotelI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await hotelModelMongo(cnxMongo);
        console.log(id);
        console.log(data);
      const response = await userModel
        .updateOne({ _id: id }, { $set: {state:data.state}} )
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo verificar la información del Hotel");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateComment(id: string, data: HotelI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await hotelModelMongo(cnxMongo);
        console.log(id);
        console.log(data);
      const response = await userModel
        .updateOne({ _id: id }, { $set: data} )
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo comentar la publicacion");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  
  async updateHotel(id: string, data: HotelI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await hotelModelMongo(cnxMongo);
        console.log(id);
        console.log(data);
      const response = await userModel
        .updateOne({ _id: id }, { $set: data} )
        .exec();
      if (response.modifiedCount == 0)
        throw new Error("No se pudo comentar la publicacion");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getHotelNotVerified() {
    try {
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);
      const response = await hotelModel.find({state:0}).exec();
      await cnxMongo.close();
      return response as HotelI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }
  async getHotelVerified() {
    try {
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);
      const response = await hotelModel.find({state:1}).exec();
      await cnxMongo.close();
      return response as HotelI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getHotels() {
    try {
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);
      const response = await hotelModel.find({state:3}).exec();
      await cnxMongo.close();
      return response as HotelI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async updateServices(id: string, data: HotelExtraI) {
    try {
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);

      console.log("id",id);
      console.log("data",data);

      const response = await hotelModel

        .updateOne({ _id: id }, { $push: { services: data.service }  })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo registrar el servicio");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updatePolicies(id: string, data: HotelExtraI) {
    try {
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);
      const response = await hotelModel
        .updateOne({ _id: id }, { $push: { policies: data.policies }  })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo registrar las políticas");
      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdServices(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);      
      const response = await hotelModel.find({ _id: id}).exec();
      await cnxMongo.close();
      return response as HotelI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }


  async savePolicies(data: PoliciesI) {
    try {      
      const cnxMongo = await connectionMongo();
      const policiesModel = await policiesModelMongo(cnxMongo);
      const response = await policiesModel.create({
        _id: new Types.ObjectId(),
        ...data
      });
      await cnxMongo.close();
      return response as PoliciesI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByIdPolicies(id: string) {
    try {
      console.log("repo",id);
      const cnxMongo = await connectionMongo();
      const policiesModel = await policiesModelMongo(cnxMongo);
      const response = await policiesModel.find({ hotel_id: id }).exec();
      await cnxMongo.close();
      return response as PoliciesI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async commentPolicies(id: string, data: PoliciesI) {
    try {
      const cnxMongo = await connectionMongo();
      const policiesModel = await policiesModelMongo(cnxMongo);
        console.log(id);
        console.log(data);
      const response = await policiesModel
        .updateOne({ hotel_id: id }, { $set: data} )
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo comentar la publicacion");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  
  async verifyPolicies(id: string, data: PoliciesI) {
    try {
      const cnxMongo = await connectionMongo();
      const policiesModel = await policiesModelMongo(cnxMongo);
        console.log("repo",id);
        console.log("repo",data);
      const response = await policiesModel
        .updateOne({ hotel_id: id }, { $set: data} )
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo verificar la información del Hotel");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updatePoliciesHotel(id: string, data: PoliciesI) {
    try {
      const cnxMongo = await connectionMongo();
      const userModel = await policiesModelMongo(cnxMongo);
        console.log(id);
        console.log(data);
      const response = await userModel
        .updateOne({ _id: id }, { $set: data} )
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar las politicas");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateState(id: string, data: HotelI) {
    try {
      const cnxMongo = await connectionMongo();
      const hotelModel = await hotelModelMongo(cnxMongo);
        console.log("repo",id);
        console.log("repo",data);
      const response = await hotelModel
        .updateOne({_id: id }, { $set: data} )
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("Estado actualizado");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

}

