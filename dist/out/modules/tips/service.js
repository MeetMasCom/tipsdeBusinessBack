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
exports.TipsService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class TipsService {
    constructor() {
        this.saveTips = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveTips(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getTipsByIdUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getTipsByIdUser(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getTipsById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getTipsById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getAllTips = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getAllTips();
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.updateTips = (id, params) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updateTips(id, params);
                return messages_1.OK_200;
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
var messages_1 = require("../../constants/messages");
var repository_1 = require("./repository");
var TipsService = /** @class */ (function () {
    function TipsService() {
        var _this = this;
        this.saveTips = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.saveTips(params)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getTipsByIdUser = function (id, type) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getTipsByIdUser(id, type)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getTipsById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getTipsById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAllTips = function () { return __awaiter(_this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getAllTips()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateTips = function (id, params) { return __awaiter(_this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.updateTips(id, params)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, messages_1.OK_200];
                    case 2:
                        error_5 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.repo = new repository_1.TipsRepository();
    }
}
exports.TipsService = TipsService;
