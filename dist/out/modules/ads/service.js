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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsService = void 0;
var messages_1 = require("../../constants/messages");
var repository_1 = require("../balanceUser/repository");
var repository_2 = require("../package/repository");
var service_1 = require("../recordsTransactions/service");
var repository_3 = require("../user/repository");
var service_2 = require("../user/service");
var repository_4 = require("./repository");
var repository_5 = require("../balanceCompany/repository");
var AdsService = /** @class */ (function () {
    function AdsService() {
        var _this = this;
        this.create = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var balance, packageData, price, walletE, payload, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 12, , 13]);
                        return [4 /*yield*/, new repository_1.BalanceUserRepository().getAllByUserId(data.userId)];
                    case 1:
                        balance = _a.sent();
                        if (!balance)
                            throw new Error("Saldo insuficiente, realice una recarga...");
                        return [4 /*yield*/, new repository_2.PackageRepository().getById(data.package)];
                    case 2:
                        packageData = _a.sent();
                        if (!packageData)
                            throw new Error("No existe información de paquete de visitas...");
                        if (balance.balance < Number(packageData.valor))
                            throw new Error("Saldo insuficiente, realice una recarga...");
                        //actualizar saldo usuario
                        return [4 /*yield*/, new repository_1.BalanceUserRepository().updateBalance(balance._id, {
                                balance: Number(balance.balance) - Number(packageData.valor)
                            })];
                    case 3:
                        //actualizar saldo usuario
                        _a.sent();
                        price = Number(packageData.valor) * 0.50;
                        return [4 /*yield*/, new repository_5.BalanceCompanyRepository().getByBalanceCompany()];
                    case 4:
                        walletE = _a.sent();
                        if (!(walletE.length > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, new repository_5.BalanceCompanyRepository().update(walletE[0]._id, {
                                balance: Number(walletE[0].balance) + Number(price),
                                walletId: ""
                            })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, new repository_5.BalanceCompanyRepository().save({
                            balance: Number(price),
                            walletId: ""
                        })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [4 /*yield*/, new service_2.UserService().updateBalanceRefer(data.userId, price)];
                    case 9:
                        _a.sent();
                        payload = {
                            value: Number(packageData.valor),
                            companyValue: price,
                            referValue: price,
                            detail: "Compra anuncio ".concat(packageData.name),
                            userId: data.userId,
                            status: true,
                            typeTransaction: 'Compra anuncio',
                            walletId: ""
                        };
                        return [4 /*yield*/, new service_1.RecordsTransactionService().save(payload)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.repo.save(data)];
                    case 11:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 12:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 13: return [2 /*return*/];
                }
            });
        }); };
        this.getById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var data, response_1, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repo.getByUserId(id)];
                    case 1:
                        data = _a.sent();
                        response_1 = [];
                        return [4 /*yield*/, Promise.all(data.map(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var result;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.repo.countVisitAds(element._id)];
                                        case 1:
                                            result = _b.sent();
                                            response_1.push({
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
                                            return [2 /*return*/, element];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response_1];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getAll = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, response_2, error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repo.getAll()];
                    case 1:
                        data = _a.sent();
                        response_2 = [];
                        return [4 /*yield*/, Promise.all(data.map(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var result;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new repository_3.UserRepository().getById(element.userId)];
                                        case 1:
                                            result = _a.sent();
                                            response_2.push({
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
                                            return [2 /*return*/, element];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response_2];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.deleteById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.deleteById(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(error_4);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateStateAds = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.updateStateAds(id, payload)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 2:
                        error_5 = _a.sent();
                        throw new Error(error_5);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateAdsById = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        payload.state = 1;
                        return [4 /*yield*/, this.repo.updateAds(id, payload)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 2:
                        error_6 = _a.sent();
                        throw new Error(error_6);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.onOffAdsById = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.updateAds(id, payload)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 2:
                        error_7 = _a.sent();
                        throw new Error(error_7);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAdsForUser = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var data, user_1, ads_1, maxAds, response, indexAds, _loop_1, i, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repo.getByIdAds(id)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, new repository_3.UserRepository().getById(id)];
                    case 2:
                        user_1 = _a.sent();
                        ads_1 = [];
                        // Validacion de preferencias
                        data.forEach(function (item) {
                            var _a, _b, _c;
                            var valid = true;
                            //edad
                            (_a = item.age) === null || _a === void 0 ? void 0 : _a.forEach(function (age) {
                                switch (age) {
                                    case "649cf2f03faa043ebff36daa" /* AgeEnum.entre1315 */:
                                        if (user_1.age > 12 && user_1.age < 16) {
                                            valid = true;
                                        }
                                        else {
                                            valid = false;
                                        }
                                        break;
                                    case "649cf3023faa043ebff36dae" /* AgeEnum.entre1618 */:
                                        if (user_1.age > 15 && user_1.age < 19) {
                                            valid = true;
                                        }
                                        else {
                                            valid = false;
                                        }
                                        break;
                                    case "649cf3103faa043ebff36db2" /* AgeEnum.entre1925 */:
                                        if (user_1.age > 18 && user_1.age < 26) {
                                            valid = true;
                                        }
                                        else {
                                            valid = false;
                                        }
                                        break;
                                    case "649cf31d3faa043ebff36db6" /* AgeEnum.mayor25 */:
                                        if (user_1.age > 25) {
                                            valid = true;
                                        }
                                        else {
                                            valid = false;
                                        }
                                        break;
                                }
                            });
                            // carrer
                            if (!item.carrer.includes(user_1.career) && valid) {
                                valid = false;
                            }
                            // country
                            if (!item.country.includes(user_1.country) && valid) {
                                valid = false;
                            }
                            // language
                            if (valid) {
                                (_b = user_1.languages) === null || _b === void 0 ? void 0 : _b.forEach(function (userLang) {
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
                                (_c = user_1.hobbies) === null || _c === void 0 ? void 0 : _c.forEach(function (userHobb) {
                                    if (item.hobbies.includes(userHobb)) {
                                        valid = true;
                                    }
                                    else {
                                        valid = false;
                                    }
                                });
                            }
                            // gender
                            if (!item.gender.includes(user_1.gender) && valid) {
                                valid = false;
                            }
                            // religion
                            if (!item.religion.includes(user_1.religion) && valid) {
                                valid = false;
                            }
                            // journal
                            if (!item.journal.includes(user_1.journal) && valid) {
                                valid = false;
                            }
                            // dependency
                            if (!item.dependency.includes(user_1.time_work) && valid) {
                                valid = false;
                            }
                            if (valid) {
                                ads_1.push(item);
                            }
                        });
                        maxAds = ads_1.length > 5 ? 5 : ads_1.length;
                        response = [];
                        indexAds = [];
                        if (ads_1.length > 0) {
                            _loop_1 = function (i) {
                                var randomIndex = Math.floor(Math.random() * ads_1.length);
                                if (!indexAds.find(function (f) { return f == randomIndex; })) {
                                    indexAds.push(randomIndex);
                                    response.push(ads_1[randomIndex]);
                                }
                            };
                            for (i = 0; i < maxAds; i++) {
                                _loop_1(i);
                            }
                        }
                        return [2 /*return*/, response];
                    case 3:
                        error_8 = _a.sent();
                        throw new Error(error_8);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.visitAds = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var visit, ads, dataPackage, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.repo.visitAds(data)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.repo.countVisitAds(data.adsId)];
                    case 2:
                        visit = (_a.sent()).length;
                        return [4 /*yield*/, this.repo.getAdsById(data.adsId)];
                    case 3:
                        ads = _a.sent();
                        return [4 /*yield*/, new repository_2.PackageRepository().getById(ads.package)];
                    case 4:
                        dataPackage = _a.sent();
                        if (!(Number(visit) >= Number(dataPackage.visit))) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.repo.updateStateAds(data.adsId, {
                                state: 3,
                                comentary: "FIN PAQUETE"
                            })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, messages_1.OK_200];
                    case 7:
                        error_9 = _a.sent();
                        throw new Error(error_9);
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        this.repo = new repository_4.AdsRepository();
    }
    return AdsService;
}());
exports.AdsService = AdsService;
