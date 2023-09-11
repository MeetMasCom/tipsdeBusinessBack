import { connectionMongo } from "../../database/conection";
import { Types } from "mongoose";
import { MembershipI, MembershipUserI } from "../../interfaces/membership";
import { membershipModelMongo, membershipUserModelMongo } from "./model";

export class MembershipRepository {
  async save(data: MembershipI) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipModel = await membershipModelMongo(cnxMongo);
      const response = await membershipModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as MembershipI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getAll() {
    try {
      const cnxMongo = await connectionMongo();
      const membershipModel = await membershipModelMongo(cnxMongo);
      const response = await membershipModel.find().exec();
      await cnxMongo.close();
      return response as MembershipI[];
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getById(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipModel = await membershipModelMongo(cnxMongo);
      const response = await membershipModel.findOne({ _id: id }).exec();
      await cnxMongo.close();
      return response as MembershipI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getByCode(code: string) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipModel = await membershipModelMongo(cnxMongo);
      const response = await membershipModel.findOne({ code }).exec();
      await cnxMongo.close();
      return response as MembershipI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async update(id: string, data: MembershipI) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipModel = await membershipModelMongo(cnxMongo);

      const response = await membershipModel
        .updateOne({ _id: id }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error("No se pudo actualizar la información de membresía");

      await cnxMongo.close();
      return response.upsertedId;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async saveMembershipUser(data: MembershipUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipUserModel = await membershipUserModelMongo(cnxMongo);
      const response = await membershipUserModel.create({
        _id: new Types.ObjectId(),
        ...data,
      });
      await cnxMongo.close();
      return response as MembershipUserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async updateMembershipUser(id: string, data: MembershipUserI) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipUserModel = await membershipUserModelMongo(cnxMongo);

      const response = await membershipUserModel
        .updateOne({ _id: id, state: true }, { $set: { ...data } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error(
          "No se pudo actualizar la información de membresía usuario"
        );

      await cnxMongo.close();
      return response.upsertedId as unknown as string;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async deleteMembershipUser(id: string) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipUserModel = await membershipUserModelMongo(cnxMongo);

      const response = await membershipUserModel
        .updateOne({ _id: id, state: true }, { $set: { state: false } })
        .exec();

      if (response.modifiedCount == 0)
        throw new Error(
          "No se pudo actualizar la información de membresía usuario"
        );

      await cnxMongo.close();
      return response.upsertedId as unknown as string;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getMembershipUser(userId: string) {
    try {
      const cnxMongo = await connectionMongo();
      const membershipUserModel = await membershipUserModelMongo(cnxMongo);
      const response = await membershipUserModel
        .findOne({ userId: userId, state: true })
        .exec();
      await cnxMongo.close();
      return response as MembershipUserI;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
