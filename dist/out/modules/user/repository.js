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
exports.UserRepository = void 0;
const conection_1 = require("../../database/conection");
const mongoose_1 = require("mongoose");
const model_1 = require("./model");
const messages_1 = require("../../constants/messages");
class UserRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.find().exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    online(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { online: status } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.modifiedCount;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.findOne({ _id: id }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdentification(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.findOne({ identification }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByEmailOrUserName(email, userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .findOne({ $or: [{ email }, { userName }] })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updatePassword(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { password } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    saveOtp(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userOtpModel = yield (0, model_1.userOtpModelMongo)(cnxMongo);
                const response = yield userOtpModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    validOtp(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userOtpModel = yield (0, model_1.userOtpModelMongo)(cnxMongo);
                const response = yield userOtpModel
                    .findOne({
                    used: false,
                    otp: data.otp,
                    userId: data.userId,
                })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateOtp(id, used) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userOtpModel = yield (0, model_1.userOtpModelMongo)(cnxMongo);
                const response = yield userOtpModel
                    .updateOne({ _id: id }, { $set: { used } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error(messages_1.ERR_400);
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getByIdUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Id = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.aggregate([
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
                    },
                    {
                        $lookup: {
                            from: "catalogues",
                            localField: "smoke",
                            foreignField: "_id",
                            as: "smoke",
                        },
                    },
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
                    },
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
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.find().exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    saveReferUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(data);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const referralsModel = yield (0, model_1.referralsModelMongo)(cnxMongo);
                const response = yield referralsModel.create(Object.assign({ _id: new mongoose_1.Types.ObjectId() }, data));
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getReferUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const referralsModel = yield (0, model_1.referralsModelMongo)(cnxMongo);
                const response = yield referralsModel.find({ userId }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUserGender(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gender = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.aggregate([
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
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUserActive(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gender = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.aggregate([
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
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllUserSearch(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const genero = new mongoose_1.Types.ObjectId(body.preferences);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
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
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUserOnline(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gender = new mongoose_1.Types.ObjectId(id);
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
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
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateAgreements(id, agreements) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { agreements } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateSocialAgreements(id, socialAgreements) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { socialAgreements } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    verifyUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: Object.assign({}, data) }).exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUserSocialAgreements() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.find({ socialAgreements: true }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateType(id, type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ _id: id }, { $set: { type } })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getVerifyTeacher(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel.find({ typeUser: id }).sort({ createdAt: -1 }).exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateCupo(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .updateOne({ usersId: 1 }, { $set: Object.assign({}, data) })
                    .exec();
                if (response.modifiedCount == 0)
                    throw new Error("No se pudo actualizar la información del usuario");
                yield cnxMongo.close();
                return response.upsertedId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getCupoLimite() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
                    .findOne({ usersId: 1 })
                    .exec();
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    usersincupo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cnxMongo = yield (0, conection_1.connectionMongo)();
                const userModel = yield (0, model_1.userModelMongo)(cnxMongo);
                const response = yield userModel
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
                            userName: 1,
                            firstname: 1,
                            email: 1,
                            lastname: 1,
                        }
                    }
                ]);
                yield cnxMongo.close();
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.UserRepository = UserRepository;
