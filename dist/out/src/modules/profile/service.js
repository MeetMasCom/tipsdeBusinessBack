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
exports.ProfileService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class ProfileService {
    constructor() {
        this.saveProfile = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveProfile(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getProfileId = (id, profile) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getProfileId(id, profile);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllProfile = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllProfile();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.addProfile = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const idp = payload.profile_id;
                const profile = yield this.repo.getProfileId(id, idp);
                if (profile.length > 0)
                    throw new Error("Perfil ya agregado.");
                if (profile.length === 0)
                    yield this.repo.addProfile(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.addSocialN = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.addSocialN(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getProfileById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getProfileById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.addFollowers = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const idp = payload.followers;
                const profile = yield this.repo.getFollowersId(id, idp);
                if (profile.length > 0)
                    throw new Error("Seguidor ya registrado.");
                if (profile.length === 0)
                    yield this.repo.addFollowers(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.addFollowings = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                const idp = payload.following;
                const profile = yield this.repo.getFollowingsId(id, idp);
                if (profile.length > 0)
                    throw new Error("Seguidor ya registrado.");
                if (profile.length === 0)
                    yield this.repo.addFollowings(id, payload);
                return "Datos actualizados";
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.repo = new repository_1.ProfileRepository();
    }
}
exports.ProfileService = ProfileService;
