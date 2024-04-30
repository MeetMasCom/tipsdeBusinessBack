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
exports.AdsService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("../balanceUser/repository");
const repository_2 = require("../package/repository");
const service_1 = require("../recordsTransactions/service");
const repository_3 = require("../user/repository");
const service_2 = require("../user/service");
const repository_4 = require("./repository");
const repository_5 = require("../balanceCompany/repository");
class AdsService {
    constructor() {
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                //valid balance
                const balance = yield new repository_1.BalanceUserRepository().getAllByUserId(data.userId);
                if (!balance)
                    throw new Error("Saldo insuficiente, realice una recarga...");
                const packageData = yield new repository_2.PackageRepository().getById(data.package);
                if (!packageData)
                    throw new Error("No existe información de paquete de visitas...");
                if (balance.balance < Number(packageData.valor))
                    throw new Error("Saldo insuficiente, realice una recarga...");
                //actualizar saldo usuario
                yield new repository_1.BalanceUserRepository().updateBalance(balance._id, {
                    balance: Number(balance.balance) - Number(packageData.valor)
                });
                const price = Number(packageData.valor) * 0.50;
                //actualizar saldo empresa referidos
                const walletE = yield new repository_5.BalanceCompanyRepository().getByBalanceCompany();
                if (walletE.length > 0) {
                    yield new repository_5.BalanceCompanyRepository().update(walletE[0]._id, {
                        balance: Number(walletE[0].balance) + Number(price),
                        walletId: ""
                    });
                }
                else {
                    yield new repository_5.BalanceCompanyRepository().save({
                        balance: Number(price),
                        walletId: ""
                    });
                }
                yield new service_2.UserService().updateBalanceRefer(data.userId, price);
                const payload = {
                    value: Number(packageData.valor),
                    companyValue: price,
                    referValue: price,
                    detail: `Compra anuncio ${packageData.name}`,
                    userId: data.userId,
                    status: true,
                    typeTransaction: 'Compra anuncio',
                    walletId: ""
                };
                yield new service_1.RecordsTransactionService().save(payload);
                yield this.repo.save(data);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.repo.getByUserId(id);
                let response = [];
                yield Promise.all(data.map((element) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    const result = yield this.repo.countVisitAds(element._id);
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
                        visit: (_a = result.length) !== null && _a !== void 0 ? _a : 0
                    });
                    return element;
                })));
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.repo.getAll();
                let response = [];
                yield Promise.all(data.map((element) => __awaiter(this, void 0, void 0, function* () {
                    const result = yield new repository_3.UserRepository().getById(element.userId);
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
                    });
                    return element;
                })));
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.deleteById(id);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updateStateAds = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateStateAds(id, payload);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updateAdsById = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                payload.state = 1;
                yield this.repo.updateAds(id, payload);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.onOffAdsById = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateAds(id, payload);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getAdsForUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.repo.getByIdAds(id);
                const user = yield new repository_3.UserRepository().getById(id);
                let ads = [];
                // Validacion de preferencias
                data.forEach(item => {
                    var _a, _b, _c;
                    let valid = true;
                    //edad
                    (_a = item.age) === null || _a === void 0 ? void 0 : _a.forEach(age => {
                        switch (age) {
                            case "649cf2f03faa043ebff36daa" /* AgeEnum.entre1315 */:
                                if (user.age > 12 && user.age < 16) {
                                    valid = true;
                                }
                                else {
                                    valid = false;
                                }
                                break;
                            case "649cf3023faa043ebff36dae" /* AgeEnum.entre1618 */:
                                if (user.age > 15 && user.age < 19) {
                                    valid = true;
                                }
                                else {
                                    valid = false;
                                }
                                break;
                            case "649cf3103faa043ebff36db2" /* AgeEnum.entre1925 */:
                                if (user.age > 18 && user.age < 26) {
                                    valid = true;
                                }
                                else {
                                    valid = false;
                                }
                                break;
                            case "649cf31d3faa043ebff36db6" /* AgeEnum.mayor25 */:
                                if (user.age > 25) {
                                    valid = true;
                                }
                                else {
                                    valid = false;
                                }
                                break;
                        }
                    });
                    // carrer
                    if (!item.carrer.includes(user.career) && valid) {
                        valid = false;
                    }
                    // country
                    if (!item.country.includes(user.country) && valid) {
                        valid = false;
                    }
                    // language
                    if (valid) {
                        (_b = user.languages) === null || _b === void 0 ? void 0 : _b.forEach(userLang => {
                            if (item.language.includes(userLang)) {
                                valid = true;
                            }
                            else {
                                valid = false;
                            }
                        });
                    }
                    // hobbies
                    if (valid) {
                        (_c = user.hobbies) === null || _c === void 0 ? void 0 : _c.forEach(userHobb => {
                            if (item.hobbies.includes(userHobb)) {
                                valid = true;
                            }
                            else {
                                valid = false;
                            }
                        });
                    }
                    // gender
                    if (!item.gender.includes(user.gender) && valid) {
                        valid = false;
                    }
                    // religion
                    if (!item.religion.includes(user.religion) && valid) {
                        valid = false;
                    }
                    // journal
                    if (!item.journal.includes(user.journal) && valid) {
                        valid = false;
                    }
                    // dependency
                    if (!item.dependency.includes(user.time_work) && valid) {
                        valid = false;
                    }
                    if (valid) {
                        ads.push(item);
                    }
                });
                // Anuncios aleatorios
                const maxAds = ads.length > 5 ? 5 : ads.length;
                let response = [];
                let indexAds = [];
                if (ads.length > 0)
                    for (let i = 0; i < maxAds; i++) {
                        const randomIndex = Math.floor(Math.random() * ads.length);
                        if (!indexAds.find(f => f == randomIndex)) {
                            indexAds.push(randomIndex);
                            response.push(ads[randomIndex]);
                        }
                    }
                return response;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.visitAds = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.visitAds(data);
                const visit = (yield this.repo.countVisitAds(data.adsId)).length;
                const ads = yield this.repo.getAdsById(data.adsId);
                const dataPackage = yield new repository_2.PackageRepository().getById(ads.package);
                if (Number(visit) >= Number(dataPackage.visit)) {
                    yield this.repo.updateStateAds(data.adsId, {
                        state: 3,
                        comentary: "FIN PAQUETE"
                    });
                }
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.repo = new repository_4.AdsRepository();
    }
}
exports.AdsService = AdsService;
