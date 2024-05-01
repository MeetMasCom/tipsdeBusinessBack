"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
const model_2 = require("../user/model");
class ProfileRepository {
    saveProfile(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const profileModel = yield (0, model_1.profileModelMongo)(cnxMongo);
                const response = yield profileModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getProfileId(idU, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Id = new mongoose_1.Types.ObjectId(idU);
                const Profile = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_2.userModelMongo)(cnxMongo);
                const response = yield userModel.find({
                    $and: [
                        { _id: idU },
                        { profile: id }
                    ]
                }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const profileModel = yield (0, model_1.profileModelMongo)(cnxMongo);
                const response = yield profileModel.find().exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    addProfile(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_2.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $push: { profile: data } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar el perfil");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    addSocialN(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_2.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $push: { rsocials: data } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo agregar la red social");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getProfileById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const profileModel = yield (0, model_1.profileModelMongo)(cnxMongo);
                const response = yield profileModel.find({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getFollowersId(idU, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Id = new mongoose_1.Types.ObjectId(idU);
                const Profile = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_2.userModelMongo)(cnxMongo);
                const response = yield userModel.find({
                    $and: [
                        { _id: idU },
                        { followers: id }
                    ]
                }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    addFollowers(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_2.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $push: { followers: data.followers } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar el perfil");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getFollowingsId(idU, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Id = new mongoose_1.Types.ObjectId(idU);
                const Profile = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_2.userModelMongo)(cnxMongo);
                const response = yield userModel.find({
                    $and: [
                        { _id: idU },
                        { following: id }
                    ]
                }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    addFollowings(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_2.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $push: { following: data.following } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar el perfil");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.ProfileRepository = ProfileRepository;
