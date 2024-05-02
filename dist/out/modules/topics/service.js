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
exports.TopicService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class TopicService {
    constructor() {
        this.saveTopic = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.saveTopic(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getTopicByIdModule = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getTopicByIdModule(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getTopicById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getTopicById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
var messages_1 = require("../../constants/messages");
var repository_1 = require("./repository");
var TopicService = /** @class */ (function () {
    function TopicService() {
        var _this = this;
        this.saveTopic = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.saveTopic(params)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getTopicByIdModule = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getTopicByIdModule(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getTopicById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.getTopicById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.updateTopic = function (id, payload) { return __awaiter(_this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repo.updateTopic(id, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new Error(messages_1.ERR_400);
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.repo = new repository_1.TopicRepository();
    }
}
exports.TopicService = TopicService;
