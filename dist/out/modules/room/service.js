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
exports.RoomService = void 0;
const messages_1 = require("../../constants/messages");
const repository_1 = require("./repository");
class RoomService {
    constructor() {
        this.save = (params) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.save(params);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getByIdHotelRoom = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getByIdHotelRoom(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.getRoomById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.getRoomById(id);
            }
            catch (error) {
                throw new Error(messages_1.ERR_400);
            }
        });
        this.addPriceRoom = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.addPrice(id, payload);
                return yield this.repo.getRoomById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updatePriceRoom = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repo.updatePrice(id, payload);
                return yield this.repo.getRoomById(id);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.repo = new repository_1.RoomRepository();
    }
}
exports.RoomService = RoomService;
